# 26장 코드 튜닝 기법

**목차**

* **26.1 논리 구조**
* **26.2 반복문**
* **26.3 데이터 변환**
* **26.4 표현식**
* **26.5 루틴**
* **26.6 저급 언어를 이용한 재구성**
* **26.7 변경이 많을수록 상태는 그대로**



이번 장에서는 이전 장에서 설명했던 코드 튜닝 방법에 대해 쓰여있으나, 반드시 명심해야 할 점은 코드를 튜닝함에 있어서, 성능 테스트는 필수라는 점이다. 당연히 성능이 좋아질 것이라 예상한 코드가, 성능도 떨어지고 가독성도 떨어지는 코드가 될 수도 있기 때문이다. 특히, 코드 튜닝은 가독성을 크게 떨어뜨리기 때문에, 이후 유지보수가 어려워진다. 좋은 코드를 버리고, 성능을 높일 필요가 충분한지 우선 확인하는 과정이 필수이다.



## 26.1 논리 구조

프로그래밍 언어에 따라 `if-then-else`와 `switch`문의 성능에 차이가 있다. 이를 고려해 어떤 것이 더 빠른지 테스트해보고 사용해야 한다. 복잡한 표현식을 미리 테이블로 만들어 참조형식으로 사용하면 성능을 향상시킬 수 있는 가능성이 있다.



## 26.2 반복문

중첩 반복문의 경우 반복가 많은 것을 안쪽에 넣는 것이 속도를 높일 수 있는 방법 중 하나다. 또한 알고리즘 문제를 푸는 기법 중 하나인 dynamic 프로그래밍(한번 처리한 값을 저장하는 배열을 두어, 이후에는 다시 계산하지 않고 해당 값을 참조하는 전략)을 사용하면 메모리의 크기는 증가하지만, 시간을 절약할 수 있다.



## 26.3 데이터 변환

부동 소수점 대신 정수를 사용하는 것이 시간 절약에 도움을 줄 것이다. 좋은 캐싱은 프로그래밍의 실행 시간을 크게 절약시켜줄 수 있다.



## 26.4 표현식

테이블 참조형식으로 바꾸는 것과 같은 맥락이 주요 포인트다. 이미 정해진 값을 상수로 선언하고, 해당 상수를 참조해 사용하는 것이 프로그램의 실행 시간을 줄일 수 있는 방법이다.



## 26.5 루틴

> 코드 튜닝에서 가장 강력한 도구 중 하나는 훌륭한 루틴 분해다. 작고 잘 정의된 루틴은 여러 곳에서 독립적으로 수행할 작업을 대신해주기 때문에 공간을 절약하게 해준다.



## 26.6 저급 언어를 이용한 재구성

저급 언어로 최적화하는 방법

1. 고급 언어로 응용 프로그램을 100% 작성한다.
2. 응용 프로그램을 완전히 테스타혹 정확한지 검증한다.
3. 그 다음에 성능 개선이 필요하다면 응용 프로그램을 분석해 문제가 발생하는 지점을 파악한다. 일반적으로 프로그램의 약 5%에 해당하는 부분이 실행 시간의 50%를 차지하므로 프로그램의 작은 부분이 문제가 발생하는 부분임을 파악할 수 있다.
4. 전체적인 성능을 개선하기 위해 작은 부분을 저급 언어로 재작성한다.



## 26.7 변경이 많을수록 상태는 그대로

> 코드 튜닝은 항상 복잡성과 가독성, 단순성, 유지보수성, 그리고 다른 측면에서 성능을 개선하기 위한 노력과의 트레이드오프를 수반한다. 코드 튜닝을 하면 모든 코드를 다시 분석해야 하므로 유지보수의 부담이 커진다.



<hr>

이번 장을 읽으면서 코드 튜닝을 정말 신중하게 사용해야 하고, 테스트를 반드시 해야한다는 것을 알게 되었다. 그리고 코드 튜닝이 무엇인지도 알게 되었다. 기본적으로 코드 튜닝은 코드의 가독성과 유지보수성을 떨어뜨리므로, 테스트를 통한 효과상승이 크지 않을 경우 나는 코드 튜닝을 하지 않을 것 같다. 그래도 어셈블리 수준의 언어를 알고 이를 손볼 수 있는 수준의 개발자가 되려고 노력할 것이다.
