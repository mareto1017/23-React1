# 23-React1
# 박상진

## 5/04 10주차
---------------------------
### 리스트와 키란 무엇인가?
> 리스트는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것  
> 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미  

###


### 기본적인 리스트 컴포넌트
> 이 컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링해 줍니다.  
```jsx
function NumberList(props) {
  const { numbers } = props;

  const listItems = numbers.map((number) => 
    <li>{number}<li>
  );

  return (
      <ul>{listItems}</ul>
  );
}
```
```js
const numbers = [1,2, 3, 4, 5];
ReactDom.rendr(
  <NumberList numbers={numbers} />
  document.getElementById('root');
);
```


### 리스트와 키에 대해 알아보기
> 리스트에서 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열"  
> 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용  
> 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨  


### 폼이란 무엇인가?
> 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됨  
```html
<form>
  <label>
      이름 :
      <input type="text" name="name"/>
  </label>
  <button type="submit">제출</button>
</form>
```

### 제어 컴포넌트
> 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트  
> 다음 코드는 사용자의 이름을 입력받는 html폼을 리액트 제어 컴포넌트로 만든것  
```jsx
function NameForm(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 이름: ' + value);
    event.preventDefult();
  }

  return (
    <form>
      <label onSubmit={handleSubmit}>
          이름 :
          <input type="text" value={value} onChange={handleChange}/>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```

### textarea태그
> html에서는 <textarea>의 children으로 텍스트가 들어가는 형태  
```html
<textarea>
  안녕하세요, 여기에 이렇게 텍스트가 들어갑니다
</textarea>
```
> 리액트에서는 state를 통해 태그의 value라는 attribute를 변경하여 텍스트를 표시  
```jsx
function RequestForm(props) {
  const [value, setValue] = useState('요청사항을 입력하세요');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('입력한 요청사항: ' + value);
    event.preventDefult();
  }

  return (
    <form>
      <label onSubmit={handleSubmit}>
          요청사항 :
          <textarea value={value} onChange={handleChange}/>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}
```

### select 태그
> select 태그도 textare와 동일합니다.

### File input 태그
> File input 태그는 그 값이 읽기 전용이기 때문에 비제어 컴포넌트가 됨  
```jsx
<input tupe="file" />
```




## 4/27 9주차
--------------------------
### 이벤트 처리하기
> DOM에서 클릭 이벤트를 처리하는 예제 코드  
```jsx
    <button onClick="activate()">
        Activate
    </button>
```
> React에서 클릭이벤트 처리하는 예제 코드  
```jsx
   <button onClick={activate}>
       Activate
   </button>
```

> 둘의 차이점은 1. 이벤트 이름이 onClick에서 onClick으로 변경  
> 2. 전달하려는 함수는 함수열에서 함수 그대로 전달  
> 이벤트가 발생 했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러" 라고 함  
> 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너" 라고도 함  


### 이벤트 핸들러 추가 방법
> 버튼을 클릭하면 handleCick() 함수 호출하도록 되어 있음   
> bind를 사용하지 않으면 this.handleCick은 글로벌 스코프에서 호출되어, undefined로 사용 못 함     
> bind를 사용하지 않으려면 화살표함수를 사용해도 됨  
> 하지만 클래스 컴포넌트는 이제 거의 사용하지 않음  
> 함수형에서 이벤트 핸들러를 정화하는 방법은 2가지  
> 방법 1. 함수 안에 함수로 정의  
```jsx
    function handleCick(){
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }
```
> 함수형에서는 tHis를 사용하지 않고 onClick에서 바로 HandleClick을 넘김  


### Arguments 전달하기
> 함수를 정의할 때는 파라미터(Parameter) 혹은 매개변수  
> 함수를 사용할 때는 아귀먼트(Argument) 혹은 인자  
> 이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많음  
> <button onClick={(event) => this.deleteItem(id, event)}> 삭제하기</button>  
> <button onClick={this.deleteItem.bind(this, id)}> 삭제하기</button>  
> 위 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를 다른 하나는 bind를 이용  
> event라는 매개변수는 리액트의 이벤트 객체를 의미  
>두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event 전달  
>첫 번째코드는 명시적으로 event를 매개변수로 넣어줌  
>두 번째코드는 id 이후 두번째 매개변수로 event가 자동 전달  


### 조건부 렌더링
> 조건 : 조건문의 조건  
``` jsx
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```
> props로 전달 받은 isLoggedln이 true이면 <UserGreeting />을, false면 <GuestGreeting />을 return 이와 같은 렌더링을 조건부 렌더링이라 한다.  

### 엘리먼트 변수
- 엘리먼트 변수 :  렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법  
```jsx
function LoginControl(porps){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick=() => {
    setIsLoggedIn(true);
  }

  const handleLogOutClick=() => {
    setIsLoggedIn(false);
  }

  let button;
  if(isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn = {isLoggedIn} />
      {button}
    </div>
  );
}

```

### 인라인 조건
> 필요한 곳에 조건문을 직접 넣어 사용하는 방법  
> 1. 인라인 if  
>> if문을 사직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용  
>> &&는 and연산자로 모든 조건이 참일때만 참이 된다  
>> 단축평가 : 첫 조건이 거짓이면 두번째 조건은 판단할 필요가 없다  

> 2. 인라인 if-else  
>> 삼항 연산자를 사용한다. [ 조건문 ? 참일 경우 : 거짓일 경우 ]  
>> 문자열이나 엘리먼트를 넣어서 사용할 수 있다.  
``` jsx
function UserStatus(props){
  return(
    <div>
      이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}<b> 상태입니다.
    </div>
  )
}
```

```jsx
function LoginControl(props){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick() => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }
  
  return (
    <div>
      <Greeting isLoggedIn = {isLoggedIn} />
      {isLoggedIn 
      ? <LogoutButton onClick = {handleLogoutClick} /> 
      : <LoginButton onClick = {handleLoginClick} />}
    </div>
  )
}

```

### 컴포넌트 렌더링 막기
> 컴포넌트 렌더링하고 싶지 않을 때에는 null을 리턴  
``` jsx
function MainPage(props) {
  const [showWarning, setShowWarning] = useState(false);

  const handledToggleClick = () => {
    setShowWarning(prevShowWarning => !prevShowWarning); 
  }

  return (
    <div>
      <WarningBanner warning = {showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? '감추기' : '보이기'}
      </button>
    </div>
  )
}
```

### 리스트와 키
> 리스트를 위해 사용하는 자료구조가 바로 배열   
> 배열은 자바스크립트의 변수나 객체를 하나의 변수로 묶어놓은 것   
> 아래는 자바스크립트의 배열을 보여주는 것   
```jsx
const number = [1,2,3,4,5];
```
> 키는 모두 각자 고유하다는 것
> 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미





## 4/13 7주차
--------------------------
### 훅이란?
> 클래스형 컴포넌트에서는 생성자에서 state를 정의하고  setState()함수를 통해 state를 업데이트함  
> 예전에 사용되던 함수형 컴포넌트는 별도로 state를 정의하거나 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었음  
> 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅  
> 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 됨  
> hook이란 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록만든 함수를 의미  
> 훅의 이름은 use로 시작  
> 사용자 정의 훅을 만들 수 있으며 이 경우에 이름은 자유롭게 가능하나 use로 시작할 것을 권장(그냥 use로 시작하기)  

### useState
> useState는 함수형 컴포넌트에서 state를 사용하기 위한 hook  
> cosnt [변수명, set함수명] = useState(초기값);  
> 첫번째 항목은 state의 이름(변수명)  
> 두번째 항목은 state의 set함수, 즉 state를 업데이트하는 함수  
> 함수를 호출할때 초기값을 설정  
> 함수의 리턴값은 배열의 형태  

### useEffect
> useState와 함께 가장 많이 사용하는 hook  
> 사이드이펙트를 수행하기 위한 것  
> 여기서 이펙트는 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 작업을 의미
> 이 작업을 이펙트라 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며 렌더링중에는 작업이 완료될 수 없기 때문, 렌더링이 끝난 후에 실행되어야 하는 작업들  
> 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공  
> 결국 sideEffect는 렌더링외에 실행해야하는 부수적인 코드를 말함  
> 네트워크 리퀘스트,  DOM수동조작, 로깅등 정리(clean-up)가 필요없는 경우들  
> useEffect(이펙트 함수,  의존성 배열)  
> 첫 번째 파라미터는 이펙트 함수가 들어가고 두 번째 파라미터는 의존성 배열이 들어감  
> 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됨  
> 이펙트 함수는 처음 렌더링이 된 이후. 그리고 재 렌더링 이후에 실행  
> 만약 이펙트 함수가 마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을넣으면 됨, 이 경우 props나 state에 있는 어떤 값에도 의존하지 않기 때문에 여러번 실행되지 않음  

### useMemo
> useMemo() 훅은 Memoized value를 리턴하는 훅  
> 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있음  
> 이 훅은 렌더링이 일어나는 동안 실행  
> 따라서 렌더링이 일어나는 동안 실행되서는 안되는 작업을 넣으면 안됨  
> 예를 들면 useEffect 사이드이펙트 같은 것들  
> 의존성 배열을 넣지않을 경우, 렌더링이 일어날때마다 매번 함수가 실행  
> 따라서 의존성 배열을 넣지 않는 것은 의미가 없음  
> 만약 빈배열을 넣게된다면 컴포넌트 마운트 시에만 함수가 실행  

### useCallback
> useCallback() 훅은 useMeom()와 유사한 역할을 함  
> 차이점은 값이 아닌 함수로 반환한다는 점  
> 의존성 배열을 파라미터로 받는 것은 동일  
> 파라미터로 받은 함수를 콜백이라고 부름  
> useMemo와 마찬가지로 의존성 배열 중 하나라도 변경된다면 콜백함수를 반환  

### useRef
> useRef() 훅은 레퍼런스를 사용하기 위한 훅  
> 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미  
> 레퍼런스 객체를 반환  
> 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미  
> const refContainer = useRef(초기값);  
> 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됨  
> 컴포넌트가 마운트 해제 전까지 계속 유지된다는 의미  

### 훅의 규칙
> 첫번째 규칙 : 무조건 최상의 레벨에서만 호출해야 함, 여기서 최상위는 컴포넌트의 최상위 레벨을 의미  
> 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됨  
> 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되야됨  
> 두번째 규칙 : 리액트 함수 컴포넌트에서만 호출해야함  
> 따라서 자바스크립트 함수에서 훅을 호출하면안됨  
> 혹은 리액트 함수 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있음  

### 커스텀 훅 추출하기
> 두 개의 자바스크립트 함수에서 하나의 로직을 공유하도록하고 싶을때 새로운 함수를 하나 만드는 방법을 사용  
> 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한  방법을 사용 가능  
> 이름을 use로 시작하고 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 됨  


## 4/06 6주차
--------------------------
### 컴포넌트 추출
> 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수 있음  
> 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것  
> 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋음  

### State
>State란?  
>> State는 리액트 컴포넌트의 상태를 의미  
>> 상태의 의미는정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미  
>> 정확히는 컴포넌트의 변경가능한 데이터를 의미  
>>  State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된값만 state에 포함시켜야함    

>State의 특징
>> 리액트만의 특별한 형태가 아닌 단지 자바스크립트의 객체  
>> State는 변경은 가능하다고 했지만 직접 수정해서는 안됨  
>> State를 변경하고자 하면 setstate()함수를 사용해야함  

### 생명주기
> 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료시점을 나타내는 것  
> constructor가 실행되면서 컴포넌트가 생성  
> 생성 직후 conponentDidMount() 함수가 호출  
> 컴포넌트가 소멸하기 전까지 여러 번 랜더링  
> 랜더링은 props, setState(). forceUpdate()에 의해 상태가 변경되면 이루어짐  
> 랜더링이 끝나면 conponentDinUpdate() 함수가 호출  
> 마지막으로 컴포넌트가 언마운트되면 conponentWillUnmoun() 함수가 호출  





## 3/30 5주차
--------------------------
### 엘리먼트 렌더링
> 엘리먼트의 정의  
>> 엘리먼트는 리액트 앱을 구성하는 요소  

> 엘리먼트의 생김새  
>> 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재  
>> 컴포넌트, 속성 및 내부의 모든 chideren을 포함하는 일반 js객체  
>> 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있음  

> 엘리먼트의 특징  
>> 가장 큰 특징은 불변성, 즉 한 번 생성된 엘리먼트의 children이나 속성을 바꿀수 없음  

### 컴포넌트
> 컴포넌트에 대해 알아보기  
>> 컴포넌트 구조라는것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성, 다시 이런 컴포넌트 들이 모여 전체 페이지를 구상  
>> 컴포넌트 재사용이 가능, 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 주릴 수 있음  
>> 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면이 유사  
>> 입력은 props가 담당하고 출력은 리액트 엘리먼트의 형태로 출력  
>> 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서 객체 지향의 개념과 비슷  

> 컴포넌트의 종류  
>> 리액트의 초기 버전을 사용할 때는 클래스형 컴포넌트 주로 사용  
>> 이후 hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용, 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문  

> 컴포넌트 이름 짓기  
>> 이름은 항상 대문자로 시작  
>> 컴포넌트 파일 이름과 컴포넌트 이름은 같게  


### Props
> props의 개념  
>> props는 property의 준말  
>> 컴포넌트의 속성  
>> 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력  
>> props는 컴포넌트에 전달 할 다양한 정보를 담고있는 자바스크립트 객체  

> props의 특징  
>> 읽기 전용  
>> 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달해야함  




## 3/23 4주차
--------------------------
### JSX
> JSX란?  
> JSX의 역활  
>> JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환  
>> React가 Element함수를 사용할 수 있도록 변환  

> JSX의 장점    
>> 코드가 간결해짐    
>> 가독성이 향상 됨    
>> Injection Attack이라 불리는해킹 방법을 방어함으로써 보안에강함  

> JSX 사용법  
>> 모든 자바스크립트 문법을 지원함  
>> 자바스크립트 문법에 XML과 HTML을 섞어서 사용  
> >HTML이나 XML에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용


## 3/16 3주차
--------------------------
### 1. node.js 설치
### 2. 리액트 소개
>리액트의 정의 : 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리  
>리액트 개념 정리
>>복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 리액트  
>리액트의 장점  
>>1. 빠른 업데이트와 렌더링 속도  
>>2. 컴포넌트 기반 구조
>>3. 재사용성
>>4. 든든한 지원군 : 메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전중
>>5. 활발한 지식 공유 & 커뮤니티
>>6. 모바일 앱 개발가능  
>리액트의 단점
>>1. 방대한 학습량
>>2. 높은 상태 관리 복잡도

## 3/9 2주차
--------------------------

1. github repository 생성, repository에 push하는 방법
2. Html, css기본 설명
3. JavaScript   
  자료형 var let const
  
    var 중복 선언 가능, let 중복 선언 불가능, const 중복 선언 불가능
    
    const는 상수
    
    주로 let, const만 사용

  연산자
  
    증감연산자 a++(postifix방식), ++a(prefix방식)
    
    let a = 1, let b = '1'
    
    console.log(a == b) => true
    
    console.log(a === b) => false
