# Starbucks_Gift
![kakao](https://user-images.githubusercontent.com/67001905/235474372-e23d8390-d7cb-4157-8b21-5c461a88a6d6.gif)

### 23 카테캠 FE 클론 코딩

https://skillflo.io/classroom/product/10118/course/10442/courseContent/58049

### 해당 Repository는 다음과 같은 FE 추가 과정의 학습에 목표를 두고 있습니다 :)

- HTML 실무
- CSS 실무
- Javascript 실무
- React 심화
- 프로젝트로 배우는 Vanilla JS와 React
- 데이터베이스: My SQL

# Rule 

1. 강의 수강 후 fork한 레포지토리에 `클론 코딩 - push` 후
2. 각자의 아이디 브랜치에 `Pull Request` 날려 merge하기.

- `스터디 진행 일정` : 매주 수요일 오후 7시 (변동 가능)
- `커밋 메시지 양식` : 이거는 각자 알아서... 
- `Pull request 양식` :  `이름(깃허브 아이디) : 미션 제출합니다.` 
- 매주 화요일 자정까지 `PR` 보내기.

# Fork & 학습 진행 및 PR 방법

1. `https://github.com/rktdnjs/Starbucks_Gift` 원본 Repository fork 하여 자신의 깃허브로 가져가기

![image](https://user-images.githubusercontent.com/67001905/235475319-9ad2c4a5-84de-452c-8d56-ab94f4a47197.png)

2. `Owner - (자기 자신)` 설정 후(전 이미 fork를 해서 이미지는 다른걸로 되어 있습니다) / `Create fork` 진행

![image](https://user-images.githubusercontent.com/67001905/235476313-74f60598-e5cb-4a81-bac8-91afbde14afb.png)

3. 생성된 Repository에서 `git clone`을 통해 로컬 환경에서 세팅 

![image](https://user-images.githubusercontent.com/67001905/235476574-c7751906-999b-4c1c-8bde-e732c73a9e9c.png)

```shell
$ git clone (복사한 Repository 주소)
```
✨(번외)아래는 참고용!! 원본 Repository의 main 브랜치를 최신 상태로 Update 할 수 있도록 upstream 세팅하여 받아오는 방법!!✨
```shell
$ git remote add upstream https://github.com/rktdnjs/Starbucks_Gift
-> 해당 커맨드를 실행 시 upstream이라는 이름으로 원본 Repository가 저장됩니다.
-> main branch의 README 등이 변할 수 있으니 Update 하고 싶다면 위 코드로 설정한 upstream에서 받아오면 좋아요!!
$ git pull upstream main
-> upstream으로 지정된 원격저장소에서 main 브랜치를 당겨옴(업데이트함)
-> 해당 커맨드를 사용할 때는 main 브랜치에서 실행해주세요!!
```

4. 작업 환경 세팅이 전부 끝났으면 자신의 깃허브 아이디 브랜치 생성 & 브랜치 이동 후 신나게 클론 코딩 진행!

```shell
$ git branch (자신의 깃허브 ID)
$ git switch (방금 만든 브랜치이름)
$ git branch // 얘는 브랜치 머머 있는지 체크용
$ git branch -d (브랜치 이름) // 만든 브랜치를 삭제하고 싶을 때 사용
```

5. 해당 주차 클론 코딩을 완강하고 코딩이 끝났으면 fork해왔던 자신의 Repository로 `commit - push` 이후 / 원본 Repository로 `Pull Request`

```
Base Repository : rktdnjs/Starbucks_Gift | base : (자신의 깃허브 ID) & Head Repository : (자신의 깃허브ID)/Starbucks_Gift | compare : (자신의 깃허브 ID)
Pull request 양식 : 이름(깃허브 아이디) : 미션 제출합니다.
```

```
*근데 자신의 깃허브 ID로 브랜치를 생성하여 작업하지 않고, 만약 그대로 로컬 환경 main 브랜치에서 작업하여 내용들을 push 후 원본 Repository로 PR을 할 때*
Base Repository : rktdnjs/Starbucks_Gift | base : (자신의 깃허브 ID) & Head Repository : (자신의 깃허브ID)/Starbucks_Gift | compare : main 이렇게 해주시면 되겠습니다(바로 위 상황 한정)
❗ 주의할 점은 PR을 걸 때 원본 Repository의 (자신 깃허브 ID브랜치) 에다가 해야 한다는 점 ❗
```
