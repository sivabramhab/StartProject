import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import Card from "./components/ExpenseItem/Cards";
import NewExpense from "./components/ExpenseItem/NewExpense/NewExpense";
import InputExp from "./components/Practise/InputExp";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: "goal"+updatedGoals.length });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (<CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />);
  }

  const expenses = [
    { title: "car Insurance", amount: 294.67, date: new Date() },
    { title: "car Insurance", amount: 294.67, date: new Date() },
    { title: "car Insurance", amount: 294.67, date: new Date() },
    { title: "car Insurance", amount: 294.67, date: new Date() },
  ];

  return (
    <Card>
      {/* <NewExpense /> */}
      <InputExp />
      {/* <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section> */}
      {/* <ExpenseItem {...expenses} />
      <ExpenseItem {...expenses} /> */}
      
    </Card>
  );
};

export default App;
