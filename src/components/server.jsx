import React from "react";
import {TodoButton} from '../components/client'
export function TodoItem({ id, title,des, isComplete }) {
  return (
    <div className="flex m-auto w-4/5 my-1 justify-between rounded-lg p-3 bg-indigo-200">
      <div>
        <div className=" font-serif text-2xl">{title}</div>
        <div className="font-serif text-lg">{des}</div>
        </div>
        <div className="flex justify-center items-center">
          <TodoButton id={id} isComplete={isComplete} />
        </div>
      </div>
  );
}

export default TodoItem;
