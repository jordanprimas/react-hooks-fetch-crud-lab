import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionData, setQuestionData] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(res => res.json())
      .then(questions => setQuestionData(questions))
  }, [])


  function handleAddQuestion(newQuestion) {
    setQuestionData([...questionData, newQuestion])
  }

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questionData.filter(question => question.id !== deletedQuestion.id
    )
    setQuestionData(updatedQuestions)
  }

  function handleUpdatedAnswerChange(newAnswer) {
    console.log(newAnswer)
    const updatedQuestionList = questionData.map(question => {
      if (question.id === newAnswer.id) {
        return newAnswer 
      } else {
        return question
      }
    })
    setQuestionData(updatedQuestionList) 
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questionData={questionData} onDeleteQuestion={handleDeleteQuestion} onUpdateAnswer={handleUpdatedAnswerChange} />}
    </main>
  );
}

export default App;
