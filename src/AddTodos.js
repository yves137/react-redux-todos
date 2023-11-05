import { useEffect, useState } from "react";
import { addTodos } from "./features/ft_todo";
import { useDispatch } from "react-redux";

export function AddTodos() {
  const dispatch = useDispatch();
  const [activity, setActivity] = useState("");

  function saveTodos() {
    dispatch(addTodos(activity));
    setActivity("");
  }

  useEffect(() => {
    document.getElementById("todo").focus();
  }, []);

  return (
    <div className="flex w-[50rem] px-7 py-4 rounded-full shadow-lg bg-[#221536] shadow-[#7B6894] gap-4">
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          saveTodos();
        }}
      >
        <input
          type="text"
          id="todo"
          value={activity}
          placeholder="Add todo..."
          className="outline-none w-full font-light text-2xl px-5 bg-inherit"
          onChange={(e) => setActivity(e.target.value)}
        />
      </form>
      <button className="rounded-full" onClick={saveTodos}>
        <img src="plus.svg" alt="1" className="w-10" />
      </button>
    </div>
  );
}
