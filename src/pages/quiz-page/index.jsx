import { useState } from "react";
import HeroSection from "../../components/common/HeroSection";
import QuestionCard from "../../components/common/QuestionCard";
import quizData from "../../Data/quizData/quizData.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SectionTitle, FeedbackWrapper, BadgeElement } from "./styles.js";
import CustomButton from "../../components/common/CustomButton/index.jsx";

const QuizPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [submittedAnswers, setSubmittedAnswers] = useState(null);

  const onSubmit = (data) => {
    setSubmittedAnswers(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onError = (errors) => {
    alert("Please answer all questions before submitting.");
  };

  let score = 0;
  if (submittedAnswers) {
    quizData.forEach((question) => {
      if (submittedAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });
  }
  const handleTryAgain = () => {
    setSubmittedAnswers(null);
    reset();
  };

  let scoreStatus = "poor";
  let feedbackTitle = "Keep Practicing!";

  if (score === quizData.length) {
    scoreStatus = "perfect";
    feedbackTitle = "Perfect Score!";
  } else if (score >= quizData.length / 2) {
    scoreStatus = "good";
    feedbackTitle = "Good Effort!";
  }

  let status = "not submitted";
  let badgeTitle = `${quizData.length} Questions`;

  if (submittedAnswers) {
    badgeTitle = `Score: ${score} / ${quizData.length}`;

    if (score === quizData.length) {
      status = "perfect";
    } else if (score >= quizData.length / 2) {
      status = "good";
    } else {
      status = "poor";
    }
  }

  const Badge = <BadgeElement status={status}>{badgeTitle}</BadgeElement>;

  return (
    <div>
      <HeroSection
        title="Test Your Knowledge"
        subtitle="Answer the questions below and click Submit to check your score."
        badge={Badge}
      />
      <div style={{ backgroundColor: `var(--color-gray-bg)`, margin: `0` }}>
        <div className="container d-flex flex-column align-items-center justify-content-center py-5">
          <SectionTitle>Choose the Correct Answer</SectionTitle>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="container d-flex flex-column align-items-center justify-content-center"
          >
            {quizData.map((question, index) => (
              <QuestionCard
                key={index}
                questionData={question}
                registerFn={register}
                submittedAnswer={
                  submittedAnswers ? submittedAnswers[question.id] : undefined
                }
              />
            ))}
            {!submittedAnswers && (
              <div>
                <CustomButton
                  content="Submit Quiz"
                  id="submit-quiz-button"
                  bgColor="var(--color-green)"
                  color="var(--color-white)"
                  bgColorHover="var(--color-green-hover)"
                  borderRadius="0.375rem"
                  border="none"
                  py="12px"
                  px="40px"
                  style={{ minWidth: "150px" }}
                />
              </div>
            )}
          </form>
          {submittedAnswers && (
            <>
              <FeedbackWrapper
                $status={scoreStatus}
                className="container d-flex flex-column align-items-center justify-content-center"
              >
                <h2 style={{ fontSize: "24px" }}>{feedbackTitle}</h2>
                <p style={{ marginBottom: "0" }}>
                  You answered {score} out of {quizData.length} questions
                  correctly.
                </p>
              </FeedbackWrapper>
              <div className="d-flex gap-3">
                <CustomButton
                  content="Try Again"
                  id="try-again-button"
                  bgColor="var(--color-green)"
                  color="var(--color-white)"
                  bgColorHover="var(--color-green-hover)"
                  borderRadius="var(--radius)"
                  py="12px"
                  px="40px"
                  style={{ minWidth: "150px" }}
                  onClick={handleTryAgain}
                />
                <CustomButton
                  content="Back to FAQ"
                  id="back-to-faq-button"
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
