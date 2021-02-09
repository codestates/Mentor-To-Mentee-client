## 1. Intro

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2e82964c-473f-4602-bff4-d5f5f39b21a4%2FUntitled.png?table=block&id=547fc80b-8503-4cf4-bf23-934070b12133&spaceId=e14a5112-d083-4015-b0b5-1c50ea50f51f&width=3940&userId=505f5c27-9d71-4cf4-8174-1ef8968c448d&cache=v2)

> **팀 명 :** VVS

> **프로젝트 명 :** Mentor To Mentee

> **프로젝트 형태 :** 수강생 프로젝트

> **팀원 :** 이재원(최강), 강희석(희맹), 박정환(만능열쇠), 조영권(미키)

                                                                                 
## 2. Project

### 🎈MentorToMentee가 무엇인가요?

청년실업자가 약 100만명의 육박하는 시대입니다.
구직활동을 하는 사람이 가장 필요한 것이 무엇일까요?
자신이 취업하고 싶은 분야의 현직자가 말해주는 
현실적인 조언일 것이라고 생각됩니다.
현직자의 조언으로 인해, 구직자는 자신이 앞으로 나아가야할
방향을 정하는데 도움을 받을 수 있기 때문이죠!
저희는 이러한 가치를 실현하고자, Mentor To Mentee라는 서비스를 개발했습니다.
Mentor To Mentee는 이름에서 느껴지듯이 멘토와 멘티를 이어주는 서비스이며
멘티는 언제든지 자신이 원하는 멘토에게 고민 또는 질문을 남길 수 있습니다.
또한 멘토 정보는 실시간으로 업데이트 되고 있기 때문에,
한 명의 멘토가 아닌 여러명의 멘토의 답변을 받아 볼 수 있습니다.
아직도 취직에 대한 불안함과 두려움을 가진 당신!
해당 분야에서 올바른 방향으로 성장하는 그 날까지
저희 Mentor To Mentee가 그 옆을 지키도록 하겠습니다. 🤗

                                                                              
### 🎈MentorToMentee는 이렇게 만들어졌습니다!

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F311d6fa7-9bc7-4ad8-9a77-650ed62baa24%2F_2021-02-09_16-26-20.png?table=block&id=a8b26730-b456-400b-be82-e500c42d5be3&spaceId=e14a5112-d083-4015-b0b5-1c50ea50f51f&width=3940&userId=505f5c27-9d71-4cf4-8174-1ef8968c448d&cache=v2)

                                                                                 

### 🎈Our Project Flow!

### Client Flow

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa9f055b6-4122-4c0e-b1d7-e1a2c5856016%2FFlowchart_(6).jpg?table=block&id=18605dab-4122-4792-8219-6f94f71cab53&width=3940&userId=505f5c27-9d71-4cf4-8174-1ef8968c448d&cache=v2)

### Server Flow

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8e02bd8a-9e1c-4499-8ecb-4c166e4df777%2FFlowchart_(4).jpg?table=block&id=a720876e-d5e2-4650-9c66-84a785aacbdb&width=3940&userId=505f5c27-9d71-4cf4-8174-1ef8968c448d&cache=v2)

### DB Schema

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F20a44d77-4ac8-430c-99b4-88795a4c602a%2FUntitled.png?table=block&id=80bb1151-73e4-4c0c-bf08-18e6d69d9e33&width=3940&userId=505f5c27-9d71-4cf4-8174-1ef8968c448d&cache=v2)

### API Doc
[API 문서](https://www.notion.so/API-9b47c683959845bd953851fd182cbc84)


## 3. Members

### 조영권

- Role : 팀장
- Position : 프론트엔드
- Works :

    **[공통 작업]**
    1. 프로젝트 주제 관련 레퍼런스 조사
    2. 사전 설계 작업
        - wire-frame
        - flow-chart
        - DB Schema
        - API 문서
        
    **[클라이언트]**
    1. React, Styled Component 를 활용한 메인페이지, 멘토정보페이지, 질문답변페이지 개발
    2. Redux 를 이용하여 전역에서 State 관리
    3. 질문 답변 CRUD 요청 API
    4. 로그인, 회원가입 모달창 및 유효성 검사

    **[배포]**
    1. 클라이언트 S3, 서버 EC2 배포
    2. Route53, ACM, ECL 을 이용한 https 응답 구현

### 강희석

- Role : 팀원
- Position : 프론트엔드
- Works :
    
    **[공통 작업]**
    1. 프로젝트 주제 관련 레퍼런스 조사
    2. 사전 설계 작업
        - wire-frame
        - flow-chart
        - DB Schema
        - API 문서
        
    **[클라이언트]**
    1. React, Styled-components를 활용한 마이페이지, 멘티 정보 페이지, 질문 및 답변 상세페이지 구현
    2. 비밀번호 재설정, 회원 탈퇴 기능 추가
    3. Redux를 이용하여 전역에서 state 관리
    4. 재사용 가능한 모달창 컴포넌트 구현

### 이재원

- Role : 팀원
- Position : 백엔드
- Works :

    **[공통 작업]**

    1. 프로젝트 주제 관련 레퍼런스 조사
    2. 사전 설계 작업
        - wire-frame
        - flow-chart
        - DB Schema
        - API 문서

    **[서버]**
    1. MySQL과 Sequelizer를 사용한 DB 모델링
    2. 회원가입 / 로그인 / 로그아웃 구현
    3. Naver Oauth 구현
    4. 비밀번호 수정 API 구현
    5. 질문 요청 및 조회 API 구현
    6. 멘토 정보 생성, 수정, 조회 API 구현

### 박정환

- Role : 팀원
- Position : 백엔드
- Works :

    **[공통작업]**
    1. 프로젝트 주제 관련 레퍼런스 조사
    2. 사전 설계 작업
        - wire-frame
        - flow-chart
        - DB Schema
        - API 문서

    **[서버]**
    1. Sequelize 를 이용한 스키마 M:N 관계 셋업
    2. 메인페이지 멘토카드 API
    3. 계정 정보 설정, 비밀번호 재설정, 멘티정보 설정 API 
    4. 회원가입 내가받은 질문 API
    5. Multer-s3를 이용한 이미지 업로드 API

## 주요 기능

### 회원가입 & 이메일 로그인

![signup_login](https://user-images.githubusercontent.com/44192757/107332238-43afe780-6af7-11eb-82ca-f566b751c789.gif)


### 소셜 로그인 (네이버)

![naverlogin](https://user-images.githubusercontent.com/44192757/107331776-ac4a9480-6af6-11eb-8f32-7cb0d3d8588c.gif)


### 마이페이지 설정

![myPage](https://user-images.githubusercontent.com/44192757/107331541-64c40880-6af6-11eb-8f13-eb73f3bdb799.gif)


### 멘토 지원하기

![applymentor](https://user-images.githubusercontent.com/44192757/107331476-4f4ede80-6af6-11eb-89d1-4cf76e22edc4.gif)


### 멘토 정보 설정

![mentorInfo](https://user-images.githubusercontent.com/44192757/107331515-5c6bcd80-6af6-11eb-9925-20ed6899a1d4.gif)


### 멘토에게 질문하기

![askquestion](https://user-images.githubusercontent.com/44192757/107331505-5a097380-6af6-11eb-8471-a1004982d955.gif)


### 질문에 답변하기

![answer](https://user-images.githubusercontent.com/44192757/107331445-4231ef80-6af6-11eb-8103-00d1088f0a66.gif)



