import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Check, AlertCircle, Lock, User, Phone, Calendar, Tv } from 'lucide-react';

const MyInfo = () => {
  // Mock User Data (로그인한 유저라고 가정)
  const [user, setUser] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    phone: '',
    age: '',
    favoriteAni: ''
  });

  // Password Change State
  const [isChangingPw, setIsChangingPw] = useState(false);
  const [pwData, setPwData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [pwCheck, setPwCheck] = useState({
    isCurrentCorrect: false, // 현재 비번 확인 완료 여부
    isNewValid: false,       // 새 비번 정규식 통과 여부
    isConfirmMatch: false    // 새 비번 일치 여부
  });

  // Validation State (닉네임, 전화번호 등)
  const [errors, setErrors] = useState({});
  const [messages, setMessages] = useState({});

  useEffect(() => {
    // Mock: 1번 유저 정보 로드
    axios.get('/data/userData.json')
      .then(res => {
        const currentUser = res.data[0]; // 1번 유저
        setUser(currentUser);
        setFormData({
          email: currentUser.email,
          nickname: currentUser.nickname,
          phone: currentUser.phone,
          age: currentUser.age,
          favoriteAni: currentUser.favoriteAni
        });
      })
      .catch(err => console.error("Failed to load user data", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePwChange = (e) => {
    const { name, value } = e.target;
    setPwData(prev => ({ ...prev, [name]: value }));
  };

  // --- Validation Logic (회원가입과 동일) ---

  const validateNickname = () => {
    const nickRegex = /^[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]{1,20}$/;
    if (!nickRegex.test(formData.nickname)) {
      setErrors(prev => ({ ...prev, nickname: true }));
      setMessages(prev => ({ ...prev, nickname: '특수문자, 숫자 제외 1~20자로 입력해주세요.' }));
      return false;
    }
    // 중복 검사는 생략 (실제로는 API 호출 필요)
    setErrors(prev => ({ ...prev, nickname: false }));
    setMessages(prev => ({ ...prev, nickname: '사용 가능한 닉네임입니다.' }));
    return true;
  };

  const validatePhone = () => {
    if (!formData.phone) return true; // Optional
    const phoneRegex = /^[0-9]{10,17}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: true }));
      setMessages(prev => ({ ...prev, phone: '숫자만 10~17자로 입력해주세요.' }));
      return false;
    }
    setErrors(prev => ({ ...prev, phone: false }));
    setMessages(prev => ({ ...prev, phone: '' }));
    return true;
  };

  // --- Password Logic ---

  const checkCurrentPassword = () => {
    // Mock: 현재 비밀번호 확인
    if (pwData.currentPassword === user.password) {
      setPwCheck(prev => ({ ...prev, isCurrentCorrect: true }));
      alert("비밀번호가 확인되었습니다. 새 비밀번호를 입력해주세요.");
    } else {
      alert("현재 비밀번호가 일치하지 않습니다.");
    }
  };

  const validateNewPassword = () => {
    const pwRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/;
    const isValid = pwRegex.test(pwData.newPassword);
    setPwCheck(prev => ({ ...prev, isNewValid: isValid }));
    
    if (pwData.confirmNewPassword) {
        setPwCheck(prev => ({ ...prev, isConfirmMatch: pwData.newPassword === pwData.confirmNewPassword }));
    }
  };

  const validateConfirmPassword = () => {
    setPwCheck(prev => ({ ...prev, isConfirmMatch: pwData.newPassword === pwData.confirmNewPassword }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. 기본 정보 유효성 검사
    const isNickValid = validateNickname();
    const isPhoneValid = validatePhone();

    if (!isNickValid || !isPhoneValid) {
      alert("입력 정보를 다시 확인해주세요.");
      return;
    }

    // 2. 비밀번호 변경 중이라면 비밀번호 검사
    if (isChangingPw) {
      if (!pwCheck.isCurrentCorrect) {
        alert("현재 비밀번호 확인이 필요합니다.");
        return;
      }
      if (!pwCheck.isNewValid) {
        alert("새 비밀번호 형식이 올바르지 않습니다.");
        return;
      }
      if (!pwCheck.isConfirmMatch) {
        alert("새 비밀번호가 일치하지 않습니다.");
        return;
      }
    }

    // Success
    alert("회원 정보가 수정되었습니다.");
    // 실제로는 여기서 API 호출하여 업데이트
    setIsChangingPw(false);
    setPwData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    setPwCheck({ isCurrentCorrect: false, isNewValid: false, isConfirmMatch: false });
  };

  const inputClass = "w-full pl-3 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-slate-700 placeholder:text-slate-400 text-sm";
  const labelClass = "block text-sm font-bold text-slate-600 mb-1 ml-1";

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50">
      <h3 className="text-2xl font-black text-slate-800 mb-8 pb-4 border-b border-slate-100">내 정보 수정</h3>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 아이디 (변경 불가) */}
        <div>
          <label className={labelClass}>아이디 (이메일)</label>
          <input 
            type="text" 
            value={formData.email} 
            readOnly 
            className={`${inputClass} bg-slate-100 text-slate-500 cursor-not-allowed`} 
          />
        </div>

        {/* 비밀번호 변경 섹션 */}
        <div className="bg-slate-50/50 p-6 rounded-xl border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Lock size={16} /> 비밀번호
            </label>
            <button 
              type="button" 
              onClick={() => setIsChangingPw(!isChangingPw)}
              className="text-xs font-bold text-primary hover:underline"
            >
              {isChangingPw ? '변경 취소' : '비밀번호 변경'}
            </button>
          </div>

          {isChangingPw && (
            <div className="space-y-4 animate-fadeIn">
              {/* 현재 비밀번호 확인 */}
              <div className="flex gap-2">
                <input 
                  type="password" 
                  name="currentPassword"
                  value={pwData.currentPassword}
                  onChange={handlePwChange}
                  placeholder="현재 비밀번호"
                  className={inputClass}
                  disabled={pwCheck.isCurrentCorrect}
                />
                <button 
                  type="button" 
                  onClick={checkCurrentPassword}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all
                    ${pwCheck.isCurrentCorrect 
                      ? 'bg-green-500 text-white cursor-default' 
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}`}
                  disabled={pwCheck.isCurrentCorrect}
                >
                  {pwCheck.isCurrentCorrect ? '확인됨' : '확인'}
                </button>
              </div>

              {/* 새 비밀번호 입력 (현재 비번 확인 후 활성화) */}
              {pwCheck.isCurrentCorrect && (
                <>
                  <div>
                    <input 
                      type="password" 
                      name="newPassword"
                      value={pwData.newPassword}
                      onChange={handlePwChange}
                      onBlur={validateNewPassword}
                      placeholder="새 비밀번호 (영문, 숫자, 특수문자 포함 7~20자)"
                      className={inputClass}
                    />
                    {!pwCheck.isNewValid && pwData.newPassword && (
                      <p className="text-xs text-red-500 mt-1 ml-1">비밀번호 형식이 올바르지 않습니다.</p>
                    )}
                  </div>
                  <div>
                    <input 
                      type="password" 
                      name="confirmNewPassword"
                      value={pwData.confirmNewPassword}
                      onChange={handlePwChange}
                      onBlur={validateConfirmPassword}
                      placeholder="새 비밀번호 확인"
                      className={inputClass}
                    />
                    {!pwCheck.isConfirmMatch && pwData.confirmNewPassword && (
                      <p className="text-xs text-red-500 mt-1 ml-1">비밀번호가 일치하지 않습니다.</p>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 닉네임 */}
          <div>
            <label className={labelClass}>닉네임</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                onBlur={validateNickname}
                className={`${inputClass} pl-10`}
              />
            </div>
            {messages.nickname && (
              <p className={`text-xs mt-1 ml-1 ${errors.nickname ? 'text-red-500' : 'text-green-500'}`}>
                {messages.nickname}
              </p>
            )}
          </div>

          {/* 전화번호 */}
          <div>
            <label className={labelClass}>전화번호</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={validatePhone}
                placeholder="-없이 입력"
                className={`${inputClass} pl-10`}
              />
            </div>
            {messages.phone && (
              <p className="text-xs text-red-500 mt-1 ml-1">{messages.phone}</p>
            )}
          </div>

          {/* 나이 */}
          <div>
            <label className={labelClass}>나이</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <select 
                name="age" 
                value={formData.age} 
                onChange={handleChange}
                className={`${inputClass} pl-10 appearance-none cursor-pointer`}
              >
                <option value="10대">10대</option>
                <option value="20대">20대</option>
                <option value="30대">30대</option>
                <option value="40대">40대</option>
                <option value="50대 이상">50대 이상</option>
              </select>
            </div>
          </div>

          {/* 최애 애니 */}
          <div>
            <label className={labelClass}>최애 애니</label>
            <div className="relative">
              <Tv className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                name="favoriteAni"
                value={formData.favoriteAni}
                onChange={handleChange}
                className={`${inputClass} pl-10`}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            수정 완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyInfo;
