"use client";
import { useEffect, useState } from "react";
import TodoList from "@/components/TodoList";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Todo List Page",
//   description: "This is the todo list page",
// };

export default function AboutPaage() {
  const router = useRouter();

  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(null);

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (!user) router.push("/login");
  // }, []);

  const removeItem = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
    setTodo("");
    // const newArray = data.filter((_, i) => i !== index);
    // setData(newArray);
  };

  const editItem = (item) => {
    setTodo(item);
  };

  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-black text-lg text-lime-600">
              {!edit ? "Add Item" : "Edit Item"}
            </h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 bg-gray-800"
                placeholder="Add Todo"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
              />
              <button
                className="flex-no-shrink p-2 border-2 rounded text-green-600 border-green-600 hover:text-white hover:bg-green-600"
                onClick={() => {
                  if (!edit) {
                    setData((prevData) => [...prevData, todo]);
                  } else {
                    data[index] = todo;
                    setEdit(false);
                  }
                  setTodo("");
                }}
              >
                {!edit ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {data?.length ? (
        <TodoList
          todos={data}
          removeItem={removeItem}
          editItem={editItem}
          setEdit={setEdit}
          setIndex={setIndex}
        />
      ) : null}
    </div>
  );
}
