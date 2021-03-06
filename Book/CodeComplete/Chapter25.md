# 25장 코드 튜닝 전략

**목차**

- **25.1 성능이랑?**
- **25.2 코드 튜닝 소개**
- **25.3 느리고 비대한 부분**
- **25.4 측정**
- **25.5 반복**
- **25.6 코드 튜닝 단계 요약**

코드 튜닝은 좋은 코드와는 거리가 멀 수도 있다. 하지만 성능을 개선하기 위해서 할 수 있는 여러 선택지 중 하나다.

## 25.1 성능이란?

좋은 코드와 사용자의 만족도는 상관 관계가 거의 없다. 사용자는 이 제품이 얼마나 좋은 코드 및 모듈화로 작성되었는지 궁금하지 않고, 원하는 동작이 깔끔하고 빠르게 작동하는지에 관심을 둔다. 사용자가 느끼는 성능은 개발자가 생각하는 품질과는 다른 경우가 많다.

## 25.2 코드 튜닝 소개

> 코드 튜닝은 성능을 향상시키는 가장 효과적인 방법이 아니다. 프로그램 아키텍처, 클래스 설계, 알고리즘 선택이 일반적으로 더 극적이 향상을 가져온다. 또한 코드 튜닝이 성능을 향상히키는 가장 쉬운 방법도 아니다.

코드 튜닝을 통해 작성한 효율적인 코드가 항상 좋은 코드는 아니다.

## 25.3 느리고 비대한 부분

대부분의 프로그램에서 효율성을 떨어뜨리거나, 속도를 떨어뜨리는 부분은 한 곳에 집중되어 있을 수 있다.

**비효울성의 공통적인 원인**

- 입력/출력 연산
- 페이징
- 시스템 호출
- 인터프리트 언어
- 오류

## 25.4 측정

프로그램 실행 속도는 컴파일러에 따라 크게 달라진다. 경험이 프로그램의 실행 속도를 측정하는 도구가 될 수 없는 이유 중 하나다. 과거에는 이랬던 것이 현재에는 아닌 경우가 너무 많다. 그렇기 때문에 코드 튜닝을 했다면, 해당 코드가 실제로 효율적으로 바뀌었는지 꼭 측정을 해야한다.

## 25.5 반복

> 성능 병목을 파악하고 나면 코드 튜닝을 통해 얼마나 많이 성능을 향상시킬 수 있는지에 대해 놀랄 것이다. 한 가지 기법으로 10배가 향상되는 경우는 거의 없겠지만, 사실상 기법을 결합할 수 있으니 한 가지 기법이 효과가 있어도 꾸준히 다른 방법을 시도해 본다.

## 25.6 코드 튜닝 단계 요약

1. 이해하고 변경하기 쉬운 잘 설계된 코드를 사용하여 소프트웨어를 개발한다.
2. 성능이 좋지 않다면
   a. 나중에 "마지막으로 좋았던 상태"로 돌아올 수 있도록 작동하는 버전의 코드를 저장한다.
   b. 과열지점을 찾기 위해서 시스템을 측정한다.
   c. 성능이 취약한 것이 부적절한 설계 때문인지, 데이터형이나 알고리즘 때문인지를 판단하고 코드 튜닝이 적절한지 판단한다. 코드 튜닝이 적절하지 않다면 1단계로 돌아간다.
   d. c 단계에서 규명된 병목을 튜닝한다.
   e. 한 번에 하나씩 성능을 측정한다.
   f. 코드의 성능이 향상되지 않았다면 a 단계에서 저장했던 코드로 되돌아간다.(전형적인 튜닝 시도의 절반 이상은 성능에 큰 영향을 미치지 못하거나 오히려 성능을 떨어뜨릴 것이다.)
3. 2단계를 반복한다.
