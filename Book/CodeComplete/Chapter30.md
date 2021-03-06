# 30장 프로그래밍 도구

**목차**

* **30.1 설계 도구**
* **30.2 소스코드 도구**
* **30.3 실행 가능한 코드 도구**
* **30.4 도구 지향적인 환경**
* **30.5 자신만의 프로그래밍 도구 개발**
* **30.6 도구에 대한 환상**



> 최신 프로그래밍 도구는 개발 시간을 줄여준다. 최첨단 도구를 사용하고 그 도구에 익숙해지면 생산성을 50% 이상 향상시킬 수 있다. 또한 프로그래밍 도구는 프로그래밍에 필요한 지루하고 세세한 작업을 줄여준다.



## 30.1 설계 도구

설계 도구는 대부분 그래픽 도구들이다. 클래스 다이어그램이나 시퀀스 다이어그램을 그리게 도와준다. 일반 그래픽 도구와 차별되는 점은 정렬을 하거나, 한 클래스를 삭제할 경우 연결된 선들이 지워지는 기능이 있는 것이다. 나도 소프트웨어 공학 개론 강의를 들으면서 "starUML"이라는 도구를 사용해 클래스 다이어그램을 그려본 적이 있는데, 그 당시에는 설계의 중요성을 몰랐지만 지금은 사용하면 도움이 많이 될 것 같다.



## 30.2 소스코드 도구

소스코드 도구에는 통합 개발 환경(IDE), 다중 파일 문자열 검색 및 바꾸기, 차이 비교 도구, 병합 도구, 소스 코드 정돈 도구, 인터페이스 문서화 도구, 템플릿과 같은 것들이 있는데, 놀랍게도 "VSCode"에서 모든 것을 제공하고 있다(익스텐션을 설치할 경우).

눈에 띄었던 점은 리팩터링 도구가 있다는 것이었다. 함수의 이름을 변경하면 모든 파일의 함수 이름을 변경해주는게 있다고 하는데 한 번 찾아봐야겠다.



## 30.3 실행 코드 도구

**코드 생성**

* 컴파일러와 링커
* 빌드 도구
* 코드 라이브러리
* 코드 생성 마법사
* 설정과 설치
* 전처리기



**디버깅**

* 테스트
* 코드 튜닝



## 30.4 도구 지향적인 환경

> UNIX 환경은 grep, diff, sort, make, crypt, tar, lint, ctags, sed, awk, vi와 같이 서로 함께 잘 작동하는 재밌는 이름의 작은 도구를 모아 놓은 것으로 유명하다. UNIX와 밀접하게 연관된 C와 C++ 언어도 같은 철학을 담고 있다. 표준 C++ 라이브러리는 함께 잘 작동하기 때문에 큰 함수로 쉽게 구성할 수 있는 작은 함수로 이루어져 있다.



## 30.5 자신만의 프로그래밍 도구 개발

> 작업 시간이 5시간 주어지고 다음 중 한 가지를 선택해야 한다고 하자.
>
> * 5시간 동안 마음 편히 일한다.
> * 4시간 45분 동안 일을 처리하는 도구를 열심히 작성한 다음 15분 안에 그 일을 처리한다.
>
> 대부분의 훌륭한 개발자는 100만 번에 한번쯤 첫 번째 방법을 선택하고 거의 모든 경우에는 두 번째 방법을 선택할 것이다.



## 30.6 프로그래밍 도구에 대한 환상

아무리 좋은 프로그래밍 도구가 개발되더라도, 프로그래밍을 없앨 수는 없다.