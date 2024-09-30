import React, { FC, FormEvent, useRef } from "react";

const NewGoal: FC<{onAddGoal: (title: string, summary: string) => void}> = ({onAddGoal}) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredTitle = titleRef.current!.value
    const enteredSummary = summaryRef.current!.value

    onAddGoal(enteredTitle, enteredSummary)

    titleRef.current!.value = ""
    summaryRef.current!.value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="title">Your goal</label>
        <input ref={titleRef} type="text" id="title" name="title" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input ref={summaryRef} type="text" id="summary" name="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
