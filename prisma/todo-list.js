import prisma from "./prisma";

export const todoList = async () => {
  try {
    const list = await prisma.todoList.findMany();
    return list;
  } catch (error) {
    console.error("error", error?.message);
  }
};

export const addTodo = async (todo) => {
  console.log("todo", todo);
  try {
    const newTodo = await prisma.todolist.create({
      data: { todo },
    });
    return newTodo;
  } catch (error) {
    console.error("error", error?.message);
  }
};
