import React, { useState } from "react";
import { useForm } from "react-hook-form";

// const TodoForm = () => {
//   const [values, setValues] = useState({ title: "", body: "" });

//   function handleInputChange(e) {
//     setValues((ov) => ({ ...ov, [e.target.name]: e.target.value }));
//   }

//   console.log("render");

//   async function handleAddTodo(e) {
//     e.preventDefault();

//     console.log(values);
//   }

//   return (
//     <div className="container my-5 py-5">
//       <form onSubmit={handleAddTodo} className="border p-5">
//         <h1>Add todo</h1>
//         <div>
//           <label className="form-label" htmlFor="todo-title">
//             Title
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             id="todo-title"
//             name="title"
//             value={values.title}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label className="form-label" htmlFor="todo-body">
//             Body
//           </label>
//           <input
//             className="form-control"
//             type="text"
//             id="todo-body"
//             name="body"
//             value={values.body}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button className="btn btn-success w-100 mt-5">Add</button>
//       </form>
//     </div>
//   );
// };

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
    getValues,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      title: "default title",
      body: "default body",
    },
  });

  async function handleAddTodo(values) {}

  return (
    <div className="container my-5 py-5">
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log(getValues());
        }}
      >
        Check
      </button>
      <form onSubmit={handleSubmit(handleAddTodo)} className="border p-5">
        <h1>Add todo</h1>
        <div>
          <label className="form-label" htmlFor="todo-title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="todo-title"
            {...register("title", {
              required: "Title is required!",
              minLength: {
                value: 6,
                message: "Title must be at least 6 character long!",
              },
              maxLength: {
                value: 12,
                message: "Title must be at most 12 character long!",
              },
            })}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="form-label" htmlFor="todo-body">
            Body
          </label>
          <input
            className="form-control"
            type="text"
            id="todo-body"
            {...register("body", { required: "Body is required!" })}
          />
          {errors.body && <p className="text-danger">{errors.body.message}</p>}
        </div>
        <button className="btn btn-success w-100 mt-5">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
