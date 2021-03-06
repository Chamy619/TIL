# 32장 스스로를 설명하는 코드

**목차**

* **32.1 외부 문서**
* **32.2 문서화를 위한 프로그래밍 스타일**
* **32.3 주석을 작성할 것인가? 작성하지 않을 것인가?**
* **32.4 효과적인 주석을 위한 핵심 사항**
* **32.5 주석 스타일**
* **32.6 IEEE 표준**



이번 장에서는 좋은 주석은 어떤 것인지에 대해 다룬다. 나는 주석은 무조건 좋은 것이라 생각했는데 역시 나의 짧은 생각이었다. 주석이 불필요하다는 주장 역시 흥미로웠고, 나는 그동안 코드를 반복하는 주석을 단 것이 아닌지에 대해 생각해보게 되었다.



## 32.1 외부 문서

* 단위 개발 일지(Unit Development Folders): 개발자가 구현 중에 사용했던 기록이 담겨있는 비공식적인 문서
* 상세 설계 문서: 하위 수준의 설계 문서로 클래스 수준 또는 루틴 수준의 설계 시 결정 사항과 고려했던 대안, 그리고 최종 접근 방법을 선택한 이유를 기술



## 32.2 문서화를 위한 프로그래밍 스타일

> 잘 작성한 코드에 주석이 있으면 가독성은 더욱 좋아진다.

주석을 잘 다는 것도 좋지만, 그보다 선행되어야 할 것은 코드를 잘 작성하는 것이다.



## 32.3 주석을 작성할 것인가? 작성하지 않을 것인가?

단순히 코드 내용을 반복하는 주석이거나, 제대로 된 설명을 하지 않는 주석일 경우 과감하게 빼는 것이 좋다. 코드를 요약해주거나, 코드만으로 알 수 없는 내용을 설명하는 주석이 효과적인 주석이다.



## 32.4 효과적인 주석을 위한 핵심 사항

**주석의 종류**

1. 코드 반복
2. 코드 설명
3. 코드 표시 기능
4. 코드 요약
5. 코드의 의도를 설명
6. 코드 자체로는 표현할 수 없는 정보



위의 주석 중 1번 주석은 정말 필요하지 않다. 주석을 읽는 시간과 작성하는 시간 모두 아깝다. 코드만으로 알 수 없거나, 코드의 핵심 내용 및 의도를 요약해주는 주석을 작성하면 가독성을 크게 향상시킬 수 있다.



**효율적인 주석 작성 가이드라인**

* 변경하기 어렵지 않은 스타일을 사용하라.
* 주석 작성 시간을 줄이기 위하여 의사코드 프로그래밍 프로세스를 사용하라.
* 주석을 개발 스타일에 포함시켜라.



## 32.5 주석 스타일

개별 줄의 끝에 주석을 작성하는 것은 좋지 않은 스타일이다. 디자인도 별로고, 유지보수도 어렵다. 한 줄짜리 줄 끝 주석은 변수를 선언하고 초기화하는 부분이 아니면 되도록 피하고, 단락에 주석을 작성하는 것이 좋다.



## 32.6 IEEE 표준

> 소스코드 수준을 벗어난 문서화에 대해서는 IEEE 소프트웨어 공학 표준 위원회가 훌륭한 정보를 제공한다.

