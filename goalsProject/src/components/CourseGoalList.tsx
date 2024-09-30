import React, { FC } from "react";

import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as CourseGoalType } from "../App.tsx";

const CourseGoalList: FC<{
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
}> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals &&
        goals.map((goal) => (
          <li>
            <CourseGoal
              key={goal.id}
              id={goal.id}
              title={goal.title}
              onDelete={onDeleteGoal}
              description={goal.description}
            />
          </li>
        ))}
    </ul>
  );
};

export default CourseGoalList;
