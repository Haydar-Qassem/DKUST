import { OptionItem, QuestionCardContainer, QuestionStatement } from "./styles";

const QuestionCard = ({ questionData, registerFn, submittedAnswer }) => {
  const isSubmitted = submittedAnswer !== undefined;
  return (
    <QuestionCardContainer>
      <QuestionStatement>{questionData.question}</QuestionStatement>
      <ul>
        {questionData.options.map((option, index) => {
          const isCorrectOption = option === questionData.correctAnswer;
          const isUserSelectedOption = option === submittedAnswer;

          let feedbackLabel = "";
          if (isSubmitted) {
            if (isCorrectOption) {
              feedbackLabel = "Correct";
            }
          }
          return (
            <OptionItem
              key={index}
              $isSubmitted={isSubmitted}
              $isCorrectOption={isCorrectOption}
              $isUserSelectedOption={isUserSelectedOption}
            >
              <label>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input
                    type="radio"
                    name={questionData.id}
                    value={option}
                    disabled={isSubmitted}
                    {...registerFn(questionData.id, {
                      required: "Please select an answer",
                    })}
                  />
                  {option}
                </div>
                <span style={{ fontSize: "0.750rem" }}>{feedbackLabel}</span>
              </label>
            </OptionItem>
          );
        })}
      </ul>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
