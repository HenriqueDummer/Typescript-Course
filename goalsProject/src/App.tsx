import { useState } from "react";
import goalsImg from "./assets/goals.jpg";

import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title ,
        description: summary,
        id: Math.random(),
      };

      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number){
    setGoals(prevGoals => {
      const newGoals = prevGoals.filter(goal => goal.id !== id)

      return newGoals
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
