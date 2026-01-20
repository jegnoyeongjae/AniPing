import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HelpCircle, ChevronDown, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const MyInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    axios.get('/data/userInquiries.json')
      .then(res => setInquiries(res.data))
      .catch(err => console.error("Failed to load inquiries data", err));
  }, []);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const getStatusBadge = (status) => {
    if (status === '답변완료') {
      return (
        <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-100 px-2.5 py-1 rounded-full">
          <CheckCircle size={14} /> 답변완료
        </span>
      );
    } else if (status === '처리중') {
      return (
        <span className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">
          <Clock size={14} /> 처리중
        </span>
      );
    } else {
      return (
        <span className="flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
          <AlertCircle size={14} /> 대기중
        </span>
      );
    }
  };

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-blue-50">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8 pb-4 border-b border-slate-100">
        <div>
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                <HelpCircle className="text-primary" /> My Inquiries
            </h3>
            <p className="text-slate-500 font-medium mt-1 ml-1">총 {inquiries.length}건의 문의 내역이 있습니다.</p>
        </div>
      </div>

      {inquiries.length > 0 ? (
        <div className="space-y-4">
          {inquiries.map((item) => (
            <div key={item.id} className="border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-primary/30">
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`w-full flex items-center justify-between p-6 text-left bg-white transition-colors ${openId === item.id ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-2">
                    {getStatusBadge(item.status)}
                    <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                </div>
                <ChevronDown 
                  className={`text-slate-400 transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-6">
                  <div>
                    <p className="text-sm font-bold text-slate-500 mb-2">문의 내용</p>
                    <p className="text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-200">
                      {item.content}
                    </p>
                  </div>
                  
                  {item.answer && (
                    <div>
                      <p className="text-sm font-bold text-primary mb-2">답변 내용</p>
                      <div className="text-slate-700 leading-relaxed bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <HelpCircle size={48} className="mx-auto text-slate-300 mb-4" />
          <p className="text-slate-500 font-bold text-lg">문의 내역이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default MyInquiries;
