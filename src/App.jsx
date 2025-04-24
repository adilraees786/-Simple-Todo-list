import React from "react";
import { TbEdit } from "react-icons/tb";
import { MdDelete, MdCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import todostore from "./Zustand/TodoStore";



 const TodoApp = ()=> {
  const {
    tasks,
    input,
    editId,
    editText,
    setInput,
    setEditText,
    addTask,
    deleteTask,
    startEditing,
   cancelEdit,
    saveEdit,

  } = todostore();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-600 p-4">
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Add task here..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm"

            >
              {editId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 mr-2 border border-gray-300 rounded px-2 py-1"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdit(task.id)}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FaCheck className="h-6 w-6" />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <MdCancel className="h-6 w-6" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className="flex-1">{task.text}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(task)}
                      className="text-yellow-500 hover:text-yellow-700"
                    >
                      <TbEdit className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <MdDelete className="h-6 w-6" />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;



























// import React, {useState } from "react";
// import { TbEdit } from "react-icons/tb";
// import { MdDelete, MdCancel } from "react-icons/md";
// import { FaCheck } from "react-icons/fa";

// export default function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");

//   const addTask = () => {
//     if (input === "") return;
//     setTasks([...tasks, { id: Date.now(), text: input }]);
//     setInput("");
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") addTask();
//   };

//   const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const startEditing = (task) => {
//     setEditId(task.id);
//     setEditText(task.text);
//   };

//   const cancelEdit = () => {
//     setEditId(null);
//     setEditText("");
//   };

//   const saveEdit = (id) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, text: editText } : task
//       )
//     );
//     cancelEdit();
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-600 p-4">
//       <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

//         <div className="flex gap-2 mb-4">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyPress}
//             placeholder="Add task here..."
//             className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={addTask}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="space-y-2">
//           {tasks.map((task) => (
//             <li
//               key={task.id}
//               className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
//             >
//               {editId === task.id ? (
//                 <>
//                   <input
//                     type="text"
//                     value={editText}
//                     onChange={(e) => setEditText(e.target.value)}
//                     className="flex-1 mr-2 border border-gray-300 rounded px-2 py-1"
//                   />
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => saveEdit(task.id)}
//                       className="text-green-600 hover:text-green-800"
//                     >
//                       <FaCheck className="h-6 w-6" />
//                     </button>
//                     <button
//                       onClick={cancelEdit}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <MdCancel className="h-6 w-6" />
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <span className="flex-1">{task.text}</span>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => startEditing(task)}
//                       className="text-yellow-500 hover:text-yellow-700"
//                     >
//                       <TbEdit className="h-6 w-6" />
//                     </button>
//                     <button
//                       onClick={() => deleteTask(task.id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <MdDelete className="h-6 w-6" />
//                     </button>
//                   </div>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
