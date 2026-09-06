import { useState } from "react";
import HeroSection from "../../components/common/HeroSection";
import QuestionCard from "../../components/common/QuestionCard";
import questionsArray from "../../Data/quizData/quizData.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SectionTitle, FeedbackWrapper, BadgeElement } from "./styles.js";
import CustomButton from "../../components/common/CustomButton/index.jsx";

const QuizPage = () => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNextQuestion = (e) => {
    e.preventDefault();

    if (!selectedOption) {
      alert("Please select an option before continuing.");
      return;
    }

    if (selectedOption === questionsArray[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questionsArray.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setShowResult(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleTryAgain = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setShowResult(false);
  };

  let scoreStatus = "not-yet-graded";
  let feedbackTitle = "Keep Practicing!";
  let badgeTitle = `${questionsArray.length} Questions`;

  if (showResult) {
    badgeTitle = `Score: ${score} / ${questionsArray.length}`;
    if (score === questionsArray.length) {
      scoreStatus = "perfect";
      feedbackTitle = "Perfect Score!";
    } else if (score >= questionsArray.length / 2) {
      scoreStatus = "good";
      feedbackTitle = "Good Effort!";
    }
  }

  const Badge = <BadgeElement status={scoreStatus}>{badgeTitle}</BadgeElement>;

  return (
    <div>
      <HeroSection
        title="Test Your Knowledge"
        subtitle="Answer the questions below and click Submit to check your score."
        badge={Badge}
        height="335px"
        background="linear-gradient(135deg, rgb(13, 27, 62) 0%, rgb(26, 58, 110) 50%, rgb(13, 27, 62) 100%)"
      />
      <div style={{ backgroundColor: `var(--color-gray-bg)`, margin: `0` }}>
        <div className="container d-flex flex-column align-items-center justify-content-center py-5">
          {!showResult ? (
            <>
              <SectionTitle>
                Question {currentQuestion + 1} of {questionsArray.length}
              </SectionTitle>
              <form
                onSubmit={handleNextQuestion}
                className="container d-flex flex-column align-items-center justify-content-center"
              >
                <QuestionCard
                  questionData={questionsArray[currentQuestion]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />

                <CustomButton
                  type="submit"
                  content={
                    currentQuestion + 1 === questionsArray.length
                      ? "Submit Quiz"
                      : "Next Question"
                  }
                  id="next-question-button"
                  bgColor="var(--color-green-600)"
                  color="var(--color-white)"
                  bgColorHover="var(--color-green-700)"
                  borderRadius="0.375rem"
                  border="none"
                  py="12px"
                  px="40px"
                  style={{ minWidth: "150px", marginTop: "20px" }}
                />
              </form>
            </>
          ) : (
            <>
              <FeedbackWrapper
                $status={scoreStatus}
                className="container d-flex flex-column align-items-center justify-content-center"
              >
                <h2 style={{ fontSize: "24px" }}>{feedbackTitle}</h2>
                <p style={{ marginBottom: "0" }}>
                  You answered {score} out of {questionsArray.length} questions
                  correctly.
                </p>
              </FeedbackWrapper>

              <div className="d-flex gap-3 mt-4">
                <CustomButton
                  content="Try Again"
                  id="try-again-button"
                  bgColor="var(--color-green-600)"
                  color="var(--color-white)"
                  bgColorHover="var(--color-green-700)"
                  borderRadius="var(--radius)"
                  py="12px"
                  px="40px"
                  style={{ minWidth: "150px" }}
                  onClick={handleTryAgain}
                />
                <CustomButton
                  content="Back to Home"
                  id="back-to-home-button"
                  bgColor="transparent"
                  color="var(--color-gray-700)"
                  borderRadius="var(--radius)"
                  py="12px"
                  px="40px"
                  style={{
                    minWidth: "150px",
                    border: "1px solid var(--color-gray-300)",
                  }}
                  onClick={() => navigate("/")}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
