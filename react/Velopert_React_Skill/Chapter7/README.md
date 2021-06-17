# 라이프사이클 메서드

모든 리액트 컴포넌트는 라이프사이클을 갖습니다. 페이지에 렌더링 되기 전부터 페이지에서 사라질 때까지가 컴포넌트의 라이프사이클입니다.

각 단계별로 특정 작업을 할 수 있도록 해주는 라이프사이클 메서드라는 것이 존재하고 총 9개가 있습니다. 라이프사이클 메서드는 클래스형 컴포넌트에서만 사용 가능하고, 함수형에서는 사용 불가능합니다. 함수형에서는 훅을 사용해 라이프사이클 메서드와 비슷한 기능을 처리할 수 있습니다.

라이프사이클 메서드 중 **Will** 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행되는 메서드이고, **Did** 접두사가 붙은 메서드는 작업을 작동한 후에 실행되는 메서드입니다. 또 라이프사이클은 마운트, 업데이트, 언마운트 세 가지 카테고리로 나뉘어집니다.

* 마운트: 페이지에 컴포넌트가 나타남
* 업데이트: 컴포넌트 정보를 업데이트(리렌더링)
* 언마운트: 페이지에서 컴포넌트가 사라짐



# 마운트 동작 순서

마운트될 때 호출하는 메서드 순서는 아래와 같습니다.

1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

getDerivedStateFromProps 는 props로 받은 값을 state에 넣을 때 사용하는 메서드입니다.



# 업데이트 동작 순서

컴포넌트가 업데이트 되는 상황은 총 네가지 입니다.

* props가 바뀔 때
* state가 바뀔 때
* 부모 컴포넌트가 리렌더링 될 때
* this.forceUpdate로 강제 렌더링을 트리거할 때



업데이트할 때 메서드 호출 순서는 아래와 같습니다.

1. getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

2번의 sholdComponentUpdate가 true를 반환 할 경우 3번 이후 단계를 수행하고, false를 반환할 경우 작업을 끝냅니다.

4번 getSnapshotBeforeUpdate를 통해 RealDOM에 변화가 발생할 경우 5번을 수행합니다.

forceUpdate를 할 경우 3번 render 부터 수행합니다.



# 언마운트 동작 순서

언마운트 시 호출되는 메서드는 한 가지 뿐입니다.

1. componentWillUnmount

페이지에서 컴포넌트가 사라지기 전에 componentWillUnmount를 호출합니다.

