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
domain : com.store.goguma
각각 기능별 [관리자 , 유저 , 자유게시판 ...]로 구분
<details>
<summary>토글 접기/펼치기</summary>
  <div markdown="1">
📦src
 ┣ 📂main
 ┃ ┣ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂store
 ┃ ┃ ┃ ┃ ┗ 📂goguma
 ┃ ┃ ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AboutPageController.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AdminRestController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminAnswerDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminBannerDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminChatRoomAndMessageDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminChatRoomDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminFreeBoardDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminProductDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminQnaDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminReportDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminResponsePageDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiHistoryDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiModifyDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PageReqDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂category
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryApiController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CategoryPageController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜CategoryResponseDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatRestController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂chatMessage
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatMessageDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatMessageReqDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂chatRoom
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomUpdateDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SaveRoomDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂chatRoomName
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatRoomNameDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ChatUtil.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂chatbot
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AdminController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜AdminDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MvcConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜WebMvcConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜WebSocketConfig.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂cs
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CsPageController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FaqController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NoticeController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜QnaController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FaqRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NoticeRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜QnaRequestDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂emoji
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiApiController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜EmojiPageController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiFileDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiHistoryReqDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiListMainAndSubDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiUploadDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ShareWriteReqDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Banner.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardCategoryMain.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardCategorySub.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatMessage.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoom.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomName.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Emoji.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiHistory.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Faq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoard.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardDetail.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardRecommendation.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardView.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainEmoji.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Notice.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OauthUserEntity.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PMainCategory.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Product.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductHistory.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PSubcategory.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Qna.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Report.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Review.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜User.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜WishList.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂freeboard
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeboardController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardDetailController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeboardRestController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜FreeBoardReviewController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardCategoryMainDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardCategorySubDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardTypeDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardCateListDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardCountRecommendationByCateDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardDetailAndUserDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardDetailDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardFormDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardListDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardManyCategoryDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardPageDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardRecommendationDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardResDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardReviewDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardReviewReqDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardReviewResDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardViewDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserFreeBoardPageReqDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserFreeBoardPageResDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂handler
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂exception
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BackPageRestfulException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LoginRestfulException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RedirectException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReportException.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CustomErrorController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RestfulExceptionHandler.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜StompEventListener.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜StompHandler.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜MainController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜BannerDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductRestController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductSearchDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductUserDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductWriteFormDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜WishListDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂utils
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ProductType.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂report
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ReportDTO.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BannerRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardMainCategoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardSubCategoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatMessageRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomNameRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiHistoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FaqRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardRecommendationRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardViewRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainEmojiRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MyUserRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NoticeRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OauthRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PMainCategoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductHistoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PSubcategoryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QnaRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReportRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReviewRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜WishListRepository.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BannerService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BoardService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CategoryService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatMessageService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomNameService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatRoomService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiHistoryService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜EmojiUploadService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FaqService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardDetailService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardRecommendationService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardViewService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MainEmojiService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NoticeService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OauthService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PaymentService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PMainCategoryService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductHistoryService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PSubcategoryService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QnaService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReportService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ReviewService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜WishListService.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OauthController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SessionController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserRestController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂my
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductHistoryDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductHostDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜QnaUserDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜RequestPageDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ResponsePageDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserEmojiDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜WishProductDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FreeBoardDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜GoogleProfile.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜KakaoAccount.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜KakaoProfile.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ModifyUserDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NaverProfile.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NaverResponse.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OauthDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OauthResisterDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜OAuthToken.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProductHistoryReqDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Profile.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Properties.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ResOauthUserDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SignInFormDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserDTO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserProfileDto.java
 ┃ ┃ ┃ ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂page
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PageReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜PageRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂payment
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PaymentRefundDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PaymentReqDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PaymentResponseData.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜PaymentTokenDto.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜ResponseToken.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BannerType.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ChatType.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Define.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserRole.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Utils.java
 ┃ ┃ ┃ ┃ ┃ ┗ 📜GogumaApplication.java
 ┃ ┣ 📂resources
 ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┣ 📜admin.xml
 ┃ ┃ ┃ ┣ 📜banner.xml
 ┃ ┃ ┃ ┣ 📜boardMainCategory.xml
 ┃ ┃ ┃ ┣ 📜boardSubCategory.xml
 ┃ ┃ ┃ ┣ 📜category.xml
 ┃ ┃ ┃ ┣ 📜chatMessage.xml
 ┃ ┃ ┃ ┣ 📜chatRoom.xml
 ┃ ┃ ┃ ┣ 📜chatRoomName.xml
 ┃ ┃ ┃ ┣ 📜emoji.xml
 ┃ ┃ ┃ ┣ 📜emojiHistory.xml
 ┃ ┃ ┃ ┣ 📜faq.xml
 ┃ ┃ ┃ ┣ 📜freeBoard.xml
 ┃ ┃ ┃ ┣ 📜freeBoardRecommendation.xml
 ┃ ┃ ┃ ┣ 📜freeBoardView.xml
 ┃ ┃ ┃ ┣ 📜myUser.xml
 ┃ ┃ ┃ ┣ 📜notice.xml
 ┃ ┃ ┃ ┣ 📜oauth.xml
 ┃ ┃ ┃ ┣ 📜product.xml
 ┃ ┃ ┃ ┣ 📜productHistory.xml
 ┃ ┃ ┃ ┣ 📜qna.xml
 ┃ ┃ ┃ ┣ 📜report.xml
 ┃ ┃ ┃ ┣ 📜review.xml
 ┃ ┃ ┃ ┣ 📜user.xml
 ┃ ┃ ┃ ┗ 📜wishList.xml
 ┃ ┃ ┣ 📂static
 ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜animate.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap-theme.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap-theme.css.map
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap-theme.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap-theme.min.css.map
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap.css.map
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bootstrap.min.css.map
 ┃ ┃ ┃ ┃ ┃ ┣ 📜colors.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜custom.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜flaticon.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜font-awesome.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜font-awesome.min.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜owl.carousel.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜prettyPhoto.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜responsive.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜style.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜versions.css
 ┃ ┃ ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜flaticon.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Flaticon.eot
 ┃ ┃ ┃ ┃ ┃ ┣ 📜flaticon.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Flaticon.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Flaticon.ttf
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Flaticon.woff
 ┃ ┃ ┃ ┃ ┃ ┣ 📜fontawesome-webfont.eot
 ┃ ┃ ┃ ┃ ┃ ┣ 📜fontawesome-webfont.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜fontawesome-webfont.ttf
 ┃ ┃ ┃ ┃ ┃ ┣ 📜fontawesome-webfont.woff
 ┃ ┃ ┃ ┃ ┃ ┣ 📜fontawesome-webfont.woff2
 ┃ ┃ ┃ ┃ ┃ ┣ 📜FontAwesome.otf
 ┃ ┃ ┃ ┃ ┃ ┣ 📜glyphicons-halflings-regular.eot
 ┃ ┃ ┃ ┃ ┃ ┣ 📜glyphicons-halflings-regular.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜glyphicons-halflings-regular.ttf
 ┃ ┃ ┃ ┃ ┃ ┣ 📜glyphicons-halflings-regular.woff
 ┃ ┃ ┃ ┃ ┃ ┣ 📜glyphicons-halflings-regular.woff2
 ┃ ┃ ┃ ┃ ┃ ┗ 📜_flaticon.scss
 ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┃ ┣ 📂logos
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜logo-light.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜logo-seo.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂prettyPhoto
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dark_rounded
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnNext.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnPrevious.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜contentPattern.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜default_thumbnail.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜loader.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sprite.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dark_square
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnNext.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnPrevious.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜contentPattern.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜default_thumbnail.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜loader.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sprite.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂default
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜default_thumb.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜loader.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sprite.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sprite_next.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sprite_prev.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sprite_x.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sprite_y.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂facebook
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnNext.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnPrevious.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜contentPatternBottom.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜contentPatternLeft.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜contentPatternRight.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜contentPatternTop.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜default_thumbnail.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜loader.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sprite.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂light_rounded
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnNext.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnPrevious.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜default_thumbnail.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜loader.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sprite.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂light_square
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnNext.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜btnPrevious.png
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜default_thumbnail.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜loader.gif
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜sprite.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📂seo-icons
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜development.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜growth.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜research.svg
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜stopwatch.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ajax-loader.gif
 ┃ ┃ ┃ ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bg.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜btnG_완성형.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cat-1.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cat-2.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cat-3.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cat-4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┃ ┃ ┃ ┣ 📜goguma_mascot.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜kakao_login_medium_narrow.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜logo.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pattern-4.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pattern.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜phonebg.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜web_light_sq_ctn@4x.png
 ┃ ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜01-custom-places-example.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜all.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜animate.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜custom.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜freeBoardList.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜hoverdir.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜jquery.prettyPhoto.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜jquery.vide.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜map.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜mapsed.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜modernizer.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜owl.carousel.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜portfolio.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜retina.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜scroll.js
 ┃ ┃ ┃ ┃ ┗ 📂uploads
 ┃ ┃ ┃ ┃ ┃ ┣ 📜about_01.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜background-12.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cloud.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜code.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜logo_01.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜logo_02.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜logo_03.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜logo_04.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜logo_05.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜logo_06.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_02.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_02.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_03.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_04.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_05.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_11.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_12.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_13.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜parallax_17.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜rocket.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜seo_01.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜seo_02.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜seo_03.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜seo_04.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜seo_05.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜seo_06.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜testi_01.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜testi_02.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜testi_03.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜version_01.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜version_02.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜version_03.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜version_04.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜version_05.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜version_06.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜version_07.jpg
 ┃ ┃ ┃ ┃ ┃ ┗ 📜version_08.jpg
 ┃ ┃ ┃ ┗ 📂customAssets
 ┃ ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜about.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂all
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜font.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-cate-setting.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜list.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂cs
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂faq
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜list.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂notice
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜list.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜write.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂qna
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜write.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂emoji
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜list.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜refund.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜upload.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜error.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_chat.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product_list.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜sidebar.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜userProduct.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chat_room.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜market.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜market2.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📜user.css
 ┃ ┃ ┃ ┃ ┃ ┗ 📜userProduct.css
 ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┃ ┣ 📜common_img_sprite.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜github.svg
 ┃ ┃ ┃ ┃ ┃ ┣ 📜no_product.png
 ┃ ┃ ┃ ┃ ┃ ┣ 📜sweet_potato_image.png
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sweet_potato_image2.png
 ┃ ┃ ┃ ┃ ┗ 📂js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜about.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_chat.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_notice.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜board.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜list.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜user_role.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-cate-setting.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-cate-setting2.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜list.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜메모.txt
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜메모2.txt
 ┃ ┃ ┃ ┃ ┃ ┣ 📂cs
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂faq
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-write.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜list.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂notice
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-detail.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-list.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-update.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-write.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜list.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂qna
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜write.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂emoji
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜list.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜refund.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜upload.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜error.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂free-board
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜free_board_detail.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜free_board_sidebar.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜free_detail_review.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜free_list.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜free_write.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜free_write_update.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂oauth
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜zipcode.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product_aside.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜board.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product_host_history.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chat_aside.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chat_room.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜free.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜jsonImage.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜newFile.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜session.js
 ┃ ┃ ┣ 📜application.yml
 ┃ ┃ ┣ 📜data.sql
 ┃ ┃ ┗ 📜schema.sql
 ┃ ┗ 📂webapp
 ┃ ┃ ┗ 📂WEB-INF
 ┃ ┃ ┃ ┗ 📂view
 ┃ ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┃ ┗ 📜about.jsp
 ┃ ┃ ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_aside.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_free_board.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_banner.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_banner_add.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_banner_update.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_chat.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_faq.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_faq_update.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_notice.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_product.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_qna.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_report.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_management_user_role.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_modi.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_payment_history.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_user.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin_write_qna.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜banner_create.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜banner_modify.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜emoji_detail.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜emoji_management.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜freeBoard_create.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜freeBoard_modify.jsp
 ┃ ┃ ┃ ┃ ┣ 📂board
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-cate-setting.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-cate-setting2.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜freeBoard_modify.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜list.jsp
 ┃ ┃ ┃ ┃ ┣ 📂chat
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chat_room.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜chat_room_update.jsp
 ┃ ┃ ┃ ┃ ┣ 📂cs
 ┃ ┃ ┃ ┃ ┃ ┣ 📂faq
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-write.jsp
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜list.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📂notice
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-detail.jsp
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-list.jsp
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-update.jsp
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜admin-write.jsp
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.jsp
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜list.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📂qna
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜write.jsp
 ┃ ┃ ┃ ┃ ┣ 📂emoji
 ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜refund.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜upload.jsp
 ┃ ┃ ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┃ ┃ ┗ 📜error.jsp
 ┃ ┃ ┃ ┃ ┣ 📂free_board
 ┃ ┃ ┃ ┃ ┃ ┣ 📜asideTest.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜free-card.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜free-list.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜free-main.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜free-write-update.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜free-write.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜free_board_aside.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜free_board_detail.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜free_board_review.jsp
 ┃ ┃ ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┃ ┃ ┣ 📜login.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜oauthRegister.jsp
 ┃ ┃ ┃ ┃ ┣ 📂product
 ┃ ┃ ┃ ┃ ┃ ┣ 📜detail.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜product_aside.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜product_list.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜product_register.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜product_update.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜userProduct.jsp
 ┃ ┃ ┃ ┃ ┣ 📂user
 ┃ ┃ ┃ ┃ ┃ ┣ 📜board.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜info.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜info_modify.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜myPageAside.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜my_imoji.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜my_qna.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜my_qna_view.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜payment_history.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜product_history.jsp
 ┃ ┃ ┃ ┃ ┃ ┣ 📜product_host_history.jsp
 ┃ ┃ ┃ ┃ ┃ ┗ 📜wish.jsp
 ┃ ┃ ┃ ┃ ┣ 📜footer.jsp
 ┃ ┃ ┃ ┃ ┣ 📜header.jsp
 ┃ ┃ ┃ ┃ ┗ 📜main.jsp
 ┗ 📂test
 ┃ ┗ 📂java
 ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┗ 📂store
 ┃ ┃ ┃ ┃ ┗ 📂goguma
 ┃ ┃ ┃ ┃ ┃ ┗ 📜GogumaApplicationTests.java
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
FrontEnd

🕵️‍♂️ Back_End
BackEnd

🌿 개발 툴
개발 툴

:octocat: 협력 툴
협력 툴

📡 API
API



⚙ 의존성
implementation 'org.springframework.boot:spring-boot-starter-web'
implementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter:3.0.3'
implementation group: 'org.glassfish.web', name: 'jakarta.servlet.jsp.jstl', version: '2.0.0'
implementation 'org.apache.tomcat.embed:tomcat-embed-jasper'
implementation 'org.springframework.boot:spring-boot-starter-websocket'

compileOnly 'org.projectlombok:lombok'
developmentOnly 'org.springframework.boot:spring-boot-devtools'
runtimeOnly 'com.mysql:mysql-connector-j'
annotationProcessor 'org.projectlombok:lombok'

testImplementation 'org.springframework.boot:spring-boot-starter-test'
testImplementation 'org.mybatis.spring.boot:mybatis-spring-boot-starter-test:3.0.3'	





3️⃣ ERD & 테이블 명세서
goguma (1)





4️⃣ SiteMap
image




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
