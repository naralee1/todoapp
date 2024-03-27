import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Wrapper />
    </div>
  );
}

export default App;

// 컴포넌트 구성
// App
// |-Wrapper
//  |--TodoHeader
//  |--TodoAdd
//  |--TodoList
//   |---TodoItem

// 개선사항
// 1.입력상자를 버튼클릭하면 보이게
// 2.체크박스이용->선택삭제/전체삭제
// 3.완료목록 분리하기
// 4.중요도분류

//-편집버튼클릭=>편집모드
//1.span태그, 편집버튼은 숨기고, input태그, 적용버튼이보임
//2.편집모드에서 입력받은 텍스트 저장할 변수
//3. 적용버튼을 클릭하면 id를 비교해서 task의 내용을 새로운 input텍스트로 교체
