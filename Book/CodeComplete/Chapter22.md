# 22장 개발자 테스트

**목차**

- **22.1 소프트웨어 품질에서 개발자 테스트의 역할**
- **22.2 개발자 테스트에 대한 바람직한 접근 방법**
- **22.3 여러 가지 교모한 테스트 방법**
- **22.4 전형적인 오류**
- **22.5 테스트 지원 도구**
- **22.6 테스트를 향상시키는 방법**
- **22.7 테스트 기록을 보존하는 방법**

몇 가지 테스트의 종류에 대해 알아보고 이번 장을 시작하자.

- 단위 테스트: 한 명의 개발자나 팀이 작성한 루틴 또는 클래스를 실행하는 테스트
- 컴포넌트 테스트: 여러 명의 개발자나 팀이 만든 클래스, 피키지, 컴포넌트 등을 실행하는 테스트
- 통합 테스트: 두 개 이상의 루틴 또는 클래스, 패키지, 컴포넌트 등이 만들어졌을 때, 이를 결합해서 실행하는 테스트
- 회귀 테스트: 이전에 실행했던 테스트를 다시 실행하는 것(현재 프로그램이 변경되었을 때 주로 사용)
- 시스템 테스트: 최종 환경에서 실행하는 테스트

## 22.1 소프트웨어 품질에서 개발자 테스트의 역할

사실 테스트보다 소프트웨어의 품질을 낮은 비용으로 더 많이 향상시킬 수 있는 방법을 우리는 이전 장에서 배웠다. 정밀 검토가 그 대표적인 예이다. 하지만 많은 개발 팀에서는 이를 도입하기보다 테스트를 유일한 품질 개발 방법으로 사용하고 있다. 실제로 테스트는 전체 결함의 60% 정도를 찾아내는 것에 불과하다.

테스트의 목적은 결함을 찾아내는 것이다. 이는 구현 활동과 완전히 다른 형태이고, 소프트웨어를 파괴하는 작업이다. 또한, 테스트는 직접적으로 소프트웨어의 품질을 향상시켜주지는 않는다. 그럼 이러한 테스트를 왜 해야 하는가?? 우리는 테스트를 통해 결함을 발견하고, 테스트 코드를 작성하는 과정을 통해서 부수적으로 설계에 대한 이해를 얻을 수 있고, 최대한 빠르게 결함이나 오류 발생 가능성을 발견해 전체적인 비용을 절감할 수 있다.

## 22.2 개발자 테스트에 대한 바람직한 접근 방법

테스트를 계획하고 설계하는 것은 가능한 최대한 빠른 시점에 하는 것이 좋다. 요구 사항 단계에 테스트를 계획하게 되면, 요구 사항의 문제점을 발생할 수 있고, 프로그램의 설계 과정에 대한 방향을 잡을 수 있을 것이다.

테스트 코드를 먼저 작성하고, 이후 코드를 작성하는 것이 코드에 결함이 삽입되는 시간과 결함이 발견되고 제거되는 시간의 차이를 최소화 할 것이다. 이는 비용절감으로 이어지게 될 것이다.

**테스트를 먼저 작성하면 얻을 수 있는 이점**

- 코드를 작성한 이후 테스트 케이스를 작성하는 것과, 테스트 케이스를 먼저 작성하는 것 사이의 노력의 크기는 거의 비슷하다.
- 결함을 미리 발견하고 더 쉽게 수정할 수 있다.
- 코드를 작성하기 전에 요구사항과 설계에 대해서 적어도 좀 더 생각하게 된며 이는 좋은 코드로 이어진다.
- 코드 작성 전 요구사항의 문제점을 미리 노출한다.
- 처음과 나중 두 번에 거쳐 테스트를 진행할 수 있다.

## 22.3 여러 가지 교모한 테스트 방법

테스트를 할 때는 나쁜 데이터와 좋은 데이터 모두를 가지고 테스트 해야 한다. 나쁜 데이터랑 데이터가 아예 없거나 적은 데이터, 너무 많은 데이터, 유효하지 않은 데이터가 있다. 좋은 데이터는 허용 되는 최소, 또는 최대한의 구성으로 이루어진 데이터다.

## 22.4 전형적인 오류

통계적으로 1000 줄 당 10개의 결함이 있다고 해서 이것이 100줄 당 1개의 결함이 있다는 것을 보장하진 않는다. 오류의 80%는 프로젝트 클래스나 루틴의 20%에서 발견되고, 오류의 50%는 프로젝트 클래스의 5%에서 발견된다.

## 22.5 테스트 지원 도구

- 개별 클래스를 테스트하는 비게 구축
- 차이 분석 도구 (git diff와 같은 종류)
- 테스트 데이터 생성기
- 커버리지 모니터
- 데이터 기록/로깅
- 심볼릭 디버거
- 시스템 교란기
- 오류 데이터베이스

## 22.6 테스트를 향상시키는 방법

테스트를 향상시키는 방법은 간단하다. 테스트를 설계나 구현과 같은 수준으로 생각하고 진행하는 것이다. 테스트 케이스도 좋은 설계를 바탕으로 작성하면 이후 재사용 가능하고, 더 많은 결함을 찾는 테스트를 진행할 수 있을 것이다.

## 22.7 테스트 기록을 보존하는 방법

**수집해야 할 데이터 종류**

- 결함에 대한 관리상의 설명(보고된 날짜, 보고한 사람, 제목 또는 설명, 빌드 번호, 수정된 날짜)
- 문제에 대한 자세한 설명
- 문제를 반복하기 위해 거치는 단계
- 문제에 대해 제안된 해결책
- 관련된 결함
- 문제의 심각성
- 결함의 원인
- 코드 작성 결함의 하위 분류
- 수정 때문에 변경된 클래스와 루틴
- 결함에 의해서 영향을 받는 코드의 줄 번호
- 결함을 찾는 데 걸린 시간
- 결함을 수정하는 데 걸린 시간

위의 내용은 기업 또는 팀 프로젝트에 적용하는 것 뿐 아니라 개인 테스트 기록으로도 작성할 수 있다. 개인 테스트 기록을 남기면 이후 같은 문제가 발생했을 때 해결법을 더 쉽게 찾는데 도움을 줄 것이다.

<hr>

그동안 TDD가 좋다는 것은 많이 들었지만 어떻게 좋은지에 대해 몰랐고, 호기심이 생기지도 않았는데 이번 장을 읽으면서 TDD에 대해 공부해보고 싶은 마음이 들었다. 이 책을 읽은 후에는 TDD에 대해 공부해보고, 어떻게 적용할 수 있을지에 대해 생각해보는 시간을 가져야겠다.

또한 아는 만큼 보인다고, 학부 과정에서 테스트 강의를 들은 것이 이 장을 보는데 많은 도움이 되었다. 조금씩 아는 부분을 넓혀가며 다방면의 내용을 이해할 수 있는 개발자가 되고 싶다.

이번에 진행하는 프로젝트에 테스트 케이스를 먼저 작성하는 것을 반영해보고 싶다. 나 혼자만이라도 테스트 케이스를 미리 작성해보는 시간을 갖고, 이후 코드를 구현하도록 해야겠다. 또한 개인 테스트 기록을 남겨 이후에 참고할 수 있도록 해야겠다.