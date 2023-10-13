const TodoList = ({ todos = [], removeItem, editItem, setEdit, setIndex }) => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-black text-lg text-lime-600">Todo List</h1>
        </div>
        <div>
          {todos?.map((item, index) => (
            <div className="flex mb-4 items-center" key={index}>
              <p className="w-full text-black">{item}</p>
              <button
                className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600"
                onClick={() => {
                  editItem(item);
                  setEdit(true);
                  setIndex(index);
                }}
              >
                Edit
              </button>
              <button
                className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
