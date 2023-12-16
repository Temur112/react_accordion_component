import {useState } from "react";


const  questions = [
    {
      "question": "What is the largest organ in the human body?",
      "answer": "Skin"
    },
    {
      "question": "Who discovered penicillin?",
      "answer": "Alexander Fleming"
    },
    {
      "question": "What is the world's longest river?",
      "answer": "Amazon River"
    },
    {
      "question": "Which famous physicist wrote the book 'A Brief History of Time'?",
      "answer": "Stephen Hawking"
    },
    {
      "question": "Who painted the 'Starry Night'?",
      "answer": "Vincent van Gogh"
    },
    {
      "question": "What is the smallest country in the world?",
      "answer": "Vatican City"
    },
    {
      "question": "Who is the author of 'The Great Gatsby'?",
      "answer": "F. Scott Fitzgerald"
    },
    {
      "question": "What is the process by which plants make their food called?",
      "answer": "Photosynthesis"
    },
    {
      "question": "Which planet is often referred to as the 'Morning Star' or 'Evening Star'?",
      "answer": "Venus"
    },
    {
      "question": "What is the unit of measurement for electrical resistance?",
      "answer": "Ohm"
    }
  ]



export default function App() {
  return (
    <div className="app"><Questions/></div>
  );
}

function Questions(){

  const [currOne, setCurrentOne] = useState(null);

  return<div className='questions'>
    <div className='questions__container'>
      {questions.map((q, i)=><Question current = {currOne} onOpen ={setCurrentOne} text={q.question} number={i+1} key={q.answer}> {q.answer}</Question>)}
    </div>
  </div>
}

function Question({text, number, current, onOpen, children,}){

  // const[isOpen, setIsOpen] = useState(false);
  const isOpen = current === number;

  function handleAnswer(){
    onOpen(isOpen?null:number);
  }

  return <div className={`question ${isOpen ? 'active':''}`} onClick={handleAnswer}>
    <div className="question__header"><p className="question__text">{number>9?number:'0'+(number)} {text} </p><p className="toggle">{isOpen?"-":"+"}</p></div>
    {isOpen ? <p className="question__answer">{children}</p>:""}
  </div>
}


