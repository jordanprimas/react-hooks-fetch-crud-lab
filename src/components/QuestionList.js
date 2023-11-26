import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionData, onDeleteQuestion, onUpdateAnswer }) {
  const questionElementList = questionData.map((question) => (
    <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onUpdateAnswer={onUpdateAnswer} />
  ))
    

  return (
    <section>
      <h1>Quiz Questions</h1>
        {questionElementList}
    </section>
  );
}

export default QuestionList;
