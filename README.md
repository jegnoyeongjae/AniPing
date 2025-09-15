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


📺

<img width="1024" height="1024" alt="AniPing_candidate1" src="https://github.com/user-attachments/assets/eebce827-54cd-42af-9247-f9807fc85187" />

1️⃣ 프로젝트 구조
domain : com.store.Aniping
각각 기능별 [관리자 , 유저 , 자유게시판, 관리자]로 구분
<details>
<summary>프로젝트 구조 보기</summary>

<pre>
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
</pre>
</details>
<br/>
<br/>
2️⃣ 프로젝트 개요<br/>
📺 Aniping
Aniping은 사용자들이 애니메이션에 대한 자유로운 대화의 공간으로 활용할 수 있게 꾸며진 플랫폼입니다.<br/>

📺 이 플랫폼은 사용자들이 각 애니메이션의 평가에 기여하며, 매겨진 점수에 의해 평점을 부여하고, 좋아하는 캐릭터, 명대사, 성우의 랭킹을 매기고 추천 할 수 있는 기능을 제공하며, 추가적으로 각자의 의견을 게시하고 이에 대해 댓글을 통해 소통하는 자유 게시판을 제공하고있습니다. 또한 유해하거나 부적절한 글과 유저에 대한 관리를 위해 관리자 계정을 두어 애니메이션, 유저, 게시글, 신고 등을 관리 하게 하였습니다.
<br/>

📺 비즈니스 모델
광고 배너 : 유료로 광고 공간을 제공하여 광고주의 상품 노출량을 높입니다.
<br/>

📺 역할 분담
| 번호 | 팀/역할       | 세부 내용                                                                                  |
|-------|----------------|-------------------------------------------------------------------------------------------|
| 1     | 유저 (정영재)  | - 로그인, 로그아웃<br>- 회원가입<br>- 마이페이지<br>- 개인정보수정<br>- 찜하기<br>- 글관리<br>- 아이디/비밀번호찾기          |
| 2     | 관리자 (조유정)| - 글관리<br>- 유저관리<br>- 신고 글/유저 처리<br>- 고객센터 글 관리<br>- 카테고리 관리 기능<br>- 공지작성                       |
| 3     | 애니메이션 페이지 (이종훈) | a. 애니메이션 리스트<br>- 필터링(평점, 가나다 순, 조회순)<br>- 장르 리스트 페이지<br><br>b. 애니메이션 상세페이지<br>- PV영상<br>- 애니메이션 소개 (제목, 줄거리, 등장인물, 사진, 좋아요, 찜하기)<br>- 댓글<br>- 찜<br>- 신고하기<br>- 세부 카테고리 (태그) |
| 4     | 고객센터 (민도) | - 자주 묻는 질문<br>- 1:1 문의<br>- 문의 내역 리스트<br>- 검색                                               |
| 5     | 캐릭터 게시판 (민도) | - 캐릭터 명칭 게시판 (인기순위)<br>- 애니메이션 캐릭터 명대사<br>- 성우가 맡은 캐릭터 페이지<br>- 성우 상세 페이지                |

<br/>
📺 일정 관리
노션을 활용하여 기능별로 일정 관리

<br/>


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
<br/>
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
<br/>
🌿 개발 툴
<details>
<summary>토글 접기/펼치기</summary>
<div markdown="1">
- vsCode
</div>
</details>
<br/>
:octocat: 협력 툴

<br/>
📡 API
- Oauth2
- SMTP
- kakaoMap


<br/>
<br/>
⚙ 의존성
추가예정



<br/>
<br/>

3️⃣ ERD & 테이블 명세서
- 추가예정



<br/>
<br/>

4️⃣ SiteMap

<img width="1399" height="494" alt="image" src="https://github.com/user-attachments/assets/cd4ff904-f8d8-4385-b83f-d054fbf76240" />

<br/>
<br/>
5️⃣ 주요 기능
유저 (USER)

<br/>

관리자 (MASTER , ADMIN)

<br/>
애니메이션

<br/>
자유 게시판

<br/>
캐릭터 게시판
<br/>
고객 센터



<br/><br/>
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
