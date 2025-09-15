- install list
  - react
    1. npm install
    2. npm i swiper
    3. npm install react-router-dom
    4. npm install axios --save
  
  - python
    1. pip install laftel
    2. pip install requests
    3. pip install beautifulsoup4
    4. pip install pandas
    5. pip install webdriver-manager
    6. python -m pip install selenium



logo

1️⃣ 프로젝트 구조
domain : com.store.Aniping
각각 기능별 [관리자 , 유저 , 자유게시판, 관리자]로 구분
<details>
<summary>토글 접기/펼치기</summary>
  <div markdown="1">
📦ANIPING  
 ┣ 📂node_modules  
 ┣ 📂public  
 ┃ ┣ 📂data  
 ┃ ┃ ┗ 📂images  
 ┃ ┃   ┣ 📂aniCha  
 ┃ ┃   ┣ 📂aniList  
 ┃ ┃   ┣ 📂banner  
 ┃ ┃   ┗ 📂btnLogin  
 ┃ ┗ 📂smartEditor  
 ┃     ┣ 📂css  
 ┃     ┣ 📂img  
 ┃     ┗ 📂js  
 ┣ 📂src  
 ┃ ┣ 📂components  
 ┃ ┃ ┣ 📂admin  
 ┃ ┃ ┃ ┣ 📂AdminAni  
 ┃ ┃ ┃ ┣ 📂AdminCha  
 ┃ ┃ ┃ ┣ 📂AdminVoiceActor  
 ┃ ┃ ┃ ┗ 📂customerservice  
 ┃ ┃ ┣ 📂anime  
 ┃ ┃ ┣ 📂character  
 ┃ ┃ ┣ 📂common  
 ┃ ┃ ┗ 📂user  
 ┃ ┣ 📂pages  
 ┃ ┃ ┣ 📂admin  
 ┃ ┃ ┃ ┣ 📂AdminAni  
 ┃ ┃ ┃ ┣ 📂AdminCha  
 ┃ ┃ ┃ ┣ 📂AdminVoiceActor  
 ┃ ┃ ┃ ┗ 📂customerservice  
 ┃ ┃ ┣ 📂anime  
 ┃ ┃ ┣ 📂character  
 ┃ ┃ ┗ 📂user  
 ┃ ┗ 📂router  
 ┗ 📂.git  
</div>
</details>
프로젝트 구조 보기


2️⃣ 프로젝트 개요
🍠 고구마마켓
고구마마켓은 사용자들이 [고]민 없이 중고 상품을 [구]매할 수 있는 온라인 [마]켓 플랫폼입니다.

이 플랫폼은 사용자들이 중고 상품을 구매하고 판매할 수 있는 기능을 제공하며, 사용자 간의 신뢰를 기반으로 한 거래가 이루어집니다. 또한 사용자들 간의 상호 작용을 촉진하여 커뮤니티를 활성화하는 것을 목표로 합니다.

🍠 비즈니스 모델
이모티콘 구매 : 사용자가 상품을 구매시 일정 비율의 수수료가 발생합니다.
광고 배너 : 유료로 광고 공간을 제공하여 광고주의 상품 노출량을 높입니다.


🍠 역할 분담
Name	[ 팀장 ]

position	채팅 , 상품 , 관리자 , 메인	고객센터 , 이모티콘 , 자유게시판 (카테고리)	관리자 , 자유게시판 (리스트,배너)	유저 , 자유게시판 (리뷰)	상품 , 자유게시판 (상세조회)
프로젝트 기간: 총 11일 (03/11 ~ 03/25)


🍠 일정 관리
노션을 활용하여 기능별로 일정 관리
image




📚기술스택
             
🕵️‍♂️ Front_End
<details>
<summary>토글 접기/펼치기</summary>
<div markdown="1">
- kakao map : v2
- HTML5
- CSS3
- JavaScript : v1.16.1
- daum map : v2
- summernote : 0.8.18
</div>
</details>

🕵️‍♂️ Back_End
<details>
<summary>토글 접기/펼치기</summary>
<div markdown="1">
- springboot : v3.1.8
- MySQL : v8.0.26
- jdk : v17.0.2
- MyBatis : v3.0.3
- JSP
- JSTL : v2.0.0
- Apache Tomcat : v10.0
- net.nurigo:javaSDK : v2.2 (고민중)
- lombok : v1.18.32

</div>
</details>

🌿 개발 툴
<details>
<summary>토글 접기/펼치기</summary>
<div markdown="1">
- vsCode

</div>
</details>

:octocat: 협력 툴
협력 툴

📡 API
- Oauth2
- SMTP
- kakaoMap



⚙ 의존성
추가예정





3️⃣ ERD & 테이블 명세서
- 추가예정





4️⃣ SiteMap

<img width="1399" height="494" alt="image" src="https://github.com/user-attachments/assets/cd4ff904-f8d8-4385-b83f-d054fbf76240" />


5️⃣ 주요 기능
유저 (USER)
기능 보기

관리자 (MASTER , ADMIN)
기능 보기

중고 거래
기능 보기

자유 게시판
기능 보기

고객 센터
기능 보기



6️⃣ 시연
메인화면, 회원가입, 로그인
메인화면 / 회원가입 / 로그인
image.gif
관리자
1대1 문의 사항	공지사항 등록 / 삭제	광고 베너 관리
1대1 문의 사항	공지사항 등록 / 삭제	광고 베너 관리
상품 관리	신고 관리	이모티콘 관리
상품 관리	신고 관리	이모티콘 관리
자유게시판 관리	자주 묻는 질문 관리	채팅 관리
자유게시판 관리	자주 묻는 질문 관리	채팅 관리
유저
문의하기	이모티콘 구매 / 환불
문의하기	이모티콘 구매 / 환불
채팅	상품 관리
채팅	상품 관리
상품 관리
상품 조회 / 검색	상품 상세	상품 등록 / 수정
상품 조회 / 검색	상품 상세	상품 등록 / 수정
자유 게시판
메인	상세페이지
메인	상세페이지
게시글 작성	리뷰 등록/삭제
게시글 작성	리뷰 등록/삭제
