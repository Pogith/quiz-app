import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import IncorrectAnswerNote from "./pages/IncorrectAnswerNote/IncorrectAnswerNote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route
          path="/incorrect-answer-note"
          element={<IncorrectAnswerNote />}
        />
        <Route path="/*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
