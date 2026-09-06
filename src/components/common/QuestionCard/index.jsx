import { OptionItem, QuestionCardContainer, QuestionStatement } from "./styles";

const QuestionCard = ({ questionData, selectedOption, setSelectedOption }) => {
  return (
    <QuestionCardContainer>
      <QuestionStatement>{questionData.question}</QuestionStatement>
      <ul>
        {questionData.options.map((option, index) => {
          const isUserSelectedOption = option === selectedOption;

          return (
            <OptionItem
              key={index}
              $isUserSelectedOption={isUserSelectedOption}
            >
              <label style={{ width: "100%", cursor: "pointer" }}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <input
                    type="radio"
                    name={`question-${questionData.id}`}
                    value={option}
                    checked={isUserSelectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                  />
                  {option}
                </div>
              </label>
            </OptionItem>
          );
        })}
      </ul>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
