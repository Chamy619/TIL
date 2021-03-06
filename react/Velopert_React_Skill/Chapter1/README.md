# 리액트 시작

과거 자바스크립트는 웹에서 간단한 연산을 사용하거나 시각적 효과를 주는 단순한 스크립트 언어였지만, 현재 웹 애플리케이션에서 핵심적인 역할을 하고 있습니다. 자신의 영역을 넘어서서 화면에 보여지는 프론트 뿐 아니라 서버도 자바스크립트로 만들 수 있고, 더 나아가서 현재 많은 사람들이 사용하고 있는 슬랙, VSCode와 같은 데스크탑 앱을 만드는데도 자바스크립트가 사용되고 있습니다.

자바스크립트 엔진이 발전하면서 자바스크립트로 큰 규모의 애플리케이션을 만들 수 있게 되었지만, 자바스크립트만 가지고 대규모 애플리케이션을 관리하기는 쉽지 않습니다. 애플리케이션 관리를 조금 더 쉽게 하기 위해 프레임워크가 생겨났고, 대표적인 프레임워크들로 Angular, Backbone.js, Vue.js 등이 있습니다. 이 프레임워크들은 주로 MVC 또는 MVVM 아키텍처를 사용합니다. 모델을 조회하거나 수정한 결과를 컨트롤러가 뷰에 반영하는 것이 일반적입니다.

페이스북 개발팀에서 대규모 애플리케이션을 구조화하고 관리하기 위해 선택한 해결 방법은 MVC 모델이 아니었습니다. 변경된 점을 뷰에 반영하는 것이 아니라, 변경 사항이 있다면, 기존 뷰를 날리고 새로운 뷰를 렌더링 하는 것이 기본 방침인 리액트를 페이스북이 발표합니다.



# 리액트의 이해

리액트는 자바스크립트 라이브러리입니다. 자바스크립트 프레임워크인 Angular와 다른 점은 개발에 필요한 모든 요소들을 리액트는 제공하지 않는다는 점입니다. 또 리액트는 오직 V(View)만 신경 쓰는 라이브러리입니다.

리액트는 render 함수를 사용해 렌더링을 실행합니다. render 함수는 뷰가 어떻게 생겼는지에 대한 객체를 반환합니다. 이 때, 각 컴포넌트는 하위 컴포넌트를 가질 수 있기 때문에 재귀적으로 render 함수가 실행됩니다. 이 작업이 끝나면 만들어진 객체를 바탕으로 HTML 형식의 문자열을 만들고, 이를 DOM에 주입해 화면에 보여줍니다. 이 과정이 초기 렌더링 과정입니다.

컴포넌트 내부의 변경 사항을 사용자 화면에 보여줄 때는 **조화 과정(reconcilation)**을 거칩니다. 이 작업도 render 함수가 맡아서 진행을 합니다. 기존의 DOM 트리가 어떻게 생겼는지는 여기에 영향을 주지 않습니다. 초기 렌더링 과정을 거쳐서 새로운 DOM 트리를 생성하고, 이를 기존 DOM 트리와 비교해서 바뀐 부분을 교체해 실제 DOM 트리를 업데이트합니다. 두 번째 render 함수의 실행 결과는 사실 Virtual Dom에 반영이 됩니다. 그리고 이 Virtual DOM과 Real DOM을 리액트에서는 최소한의 연산으로 비교하고, Real DOM 트리를 업데이트 합니다.



# DOM은 느린가?

사실 DOM은 느리지 않습니다. 일반 자바스크립트 객체의 연산과 거의 동일합니다. 하지만 **DOM에 변화가 일어나면 웹 브라우저가 CSS를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트하게 되고, 이 과정에서 시간이 많이 소비됩니다.**



# 리액트의 해결법

리액트는 위의 문제를 최소한의 연산으로 DOM을 바꾸자는 방식으로 접근했습니다. 데이터의 변화가 생기면 먼저 Virual DOM에 리렌더링 하고, 이를 Real DOM과 비교해 바뀐 부분만 Real DOM에 적용하도록 했습니다.



# Virtual DOM이 항상 더 좋은가?

항상이라는 말이 붙어서 아니겠다 라고 생각할 것 입니다. 당연히 아닙니다. 리액트 메뉴얼에 다음과 같은 문장이 있습니다.

> 우리는 다음 문제를 해결하려고 리액트를 만들었습니다.
>
> **지속적으로 데이터가 변화하는 대규모 애플리케이션 구축하기**

변화가 없는 정적인 페이지에서 리액트를 사용하는 것은 오히려 더 안좋은 성능을 보여줄 수 있습니다. 그리고 자바스크립트만으로 코드 최적화를 하면 리액트 보다 더 좋은 성능을 보여줄 수도 있습니다. 리액트는 DOM의 변화가 자주 일어나는 곳에서 효과적으로 동작합니다.



