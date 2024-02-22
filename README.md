# Quiz App

- Quiz를 풀 수 있으며 결과 및 오답 노트를 확인할 수 있는 Quiz 애플리케이션입니다.

## Page

### Home

- 첫 화면으로 시작 페이지입니다.
- Start Quiz 버튼 클릭 시 Quiz 화면으로 이동하게 됩니다.

### Quiz

- 현재 20문항으로 설정되어 있으므로 20개의 Quiz를 풀어야합니다.
- 문항에 대한 4개 보기 중 1개를 선택할 수 있으며, 한번 선택한 문항은 변경 불가하며 Next 버튼이 나타납니다.
- 선택한 보기에 대한 답안이 맞는지 틀렸는지 바로 알 수 있습니다.
- 모든 문항을 다 풀면 사용자는 Result 버튼을 누르면 결과 정보를 볼 수 있습니다.

### Result

- 결과 정보에는 다음 4가지를 확인할 수 있습니다.
  - 퀴즈를 마칠 때까지 소요된 시간
  - 정답 개수
  - 오답 개수
  - 정 오답에 대한 비율 차트
- 오답 노트 버튼 및 Home 버튼을 누를 수 있습니다.

### IncorrectAnswerNote

- 오답 노트입니다.
- 틀린 Quiz에 대해 모두 나열되며 오답 및 정답을 모두 확인할 수 있습니다.
- Home 버튼을 통해 시작 화면으로 돌아갈 수 있습니다.

## Test Code

### 구조 설계

- 구조로 폴더 구조와 동일하게 목적과 용도에 따라 폴더를 나누고 테스트를 진행하였습니다.
  - components
  - pages
  - hook
  - store

## Components

<details>
  <summary>AnswerOptions</summary>
  <ul>
    <li> quiz 데이터의 문항들의 문구가 올바르게 렌더되는지 테스트</li>
    <li> 4가지가 올바르게 나열되는지 테스트</li>
    <li> 사용자 입장에서 click이 올바르게 동작하는지 테스트</li>
    <li> 오답 및 정답을 선택했을 때 classname이 올바르게 적용되는지 테스트</li>
  </ul>
</details>

<details>
  <summary>Button</summary>
  <ul>
    <li> 공용으로 사용하기 위해 만든 Button 컴포넌트의 props에 따른 렌더링 테스트</li>
    <li> size와 color prop에 따라 올바른 classname 되는지 테스트</li>
  </ul>
</details>

<details>
  <summary>EmptyQuizScreen</summary>
  <ul>
    <li> quiz가 없는 경우에 대응하기 위한 화면으로 올바르게 렌더되는지 테스트</li>
    <li> 버튼을 클릭했을 때, 원하는 path로 이동하는지 테스트</li>
  </ul>
</details>

<details>
  <summary>Error</summary>
  <ul>
    <li> error가 발생했을 때 대응하기 위한 화면으로 error에 따라 올바른 Text가 렌더되는지 테스트</li>
    <li> 버튼을 클릭했을 때, 원하는 path로 이동하는지 테스트</li>
  </ul>
</details>

## Pages

<details>
  <summary>Home, IncorrectAnswerNote, NotFound Page는 아래와 같은 목적으로 테스트를 진행하였습니다.</summary>
  <ul>
    <li> 올바른 화면이 렌더링 되는지 테스트</li>
    <li> 버튼을 클릭했을 때, 원하는 path로 이동하는지 테스트</li>
  </ul>
</details>

<details>
  <summary>Quiz</summary>
  <ul>
    <li> data의 유무 및 로딩 및 에러에 따른 화면 렌더링 테스트</li>
  </ul>
</details>

<details>
  <summary>Result</summary>
  <ul>
    <li> 결과 페이지에 기본적으로 나타나야 하는 텍스트 렌더링 테스트</li>
    <li> 2개의 버튼을 각각 클릭했을 때, 원하는 path로 이동하는지 테스트</li>
  </ul>
</details>

## Store

<details>
  <summary>quizSaga</summary>
  <ul>
    <li>saga에서 사용하는 generator 함수의 동작에 따른 결과값 비교 테스트</li>
  </ul>
</details>

<details>
  <summary>quizSlice</summary>
  <ul>
    <li>reducer action에 따른 redux state 업데이트 테스트</li>
  </ul>
</details>

## Hook

<details>
  <summary>useSetInterval</summary>
  <ul>
    <li>useSetInterval hook의 time이 올바르게 동작하고 변화되는지 테스트</li>
  </ul>
</details>
