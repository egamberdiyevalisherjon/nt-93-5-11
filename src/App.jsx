import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
// import TodoForm from "./Pages/TodoForm";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
const TodoForm = lazy(() => import("./Pages/TodoForm"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-todo" element={<TodoForm />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
