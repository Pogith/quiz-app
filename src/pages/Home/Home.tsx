import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigateQuestionPage = () => {
    navigate("/questions");
  };

  return <button onClick={handleNavigateQuestionPage}>Home</button>;
}

export default Home;
