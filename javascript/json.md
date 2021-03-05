# Json

### HTTP

HyperText Transfer Protocol

### AJAX

Asynchronous Javascript And XML
웹 페이지와 서버가 비동기적으로 데이터를 주고 받음

### XML

HTML과 같은 Mark up language
태그로 데이터를 표현할 수 있음
현재는 XML보다 JSON을 더 많ㅇ ㅣ사용

### JSON

JavaScript Object Notation
ES3의 object에 큰 영감을 받아 만들어진 데이터 포맷
Javascript의 object처럼 key와 value로 이루어져 있음
**프로그래밍 언어와 플랫폼에 독립적** -> 모든 언어에서 사용될 수 있음
Sender는 object를 serialize하고 receiver는 Object를 deserialize함

### Object To JSON

stringify는 스트링형 json으로 만들어 줌

```
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => console.log(`this.${name} can jump!`)
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']) // name만 json으로 변환
```

메소드는 json에 포함되지 않음
stringify에 매개변수로 key 값을 가진 array를 추가하면 해당 array에 있는 값들만 json으로 변환

### JSON to Object

parse는 json을 실제 object로 만들어 줌

```
const obj = JSON.parse(json);
console.log(obj);
```

**메소드는 json을 만들 때 만들어지지 않으므로 parse로도 살릴 수 없음** -> 새로 만들어줘야 함

<hr>

### 추가 정보

- JSON Diff 페이지를 사용하면 보낸 json과 받은 json을 비교할 수 있음
- JSON Beautifier 페이지를 사용하면 정돈되지 않은 json을 정돈해 줌
- JSON Parser 페이지를 사용하면 json으로 부터 object가 어떻게 표기되는지 확인할 수 있음
- JSON Validator 페이지를 사용하면 json 파일이 유효한지 확인할 수 있음
