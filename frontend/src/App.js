import "./App.css";
import Signup from './components/Signup';
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Policy from "./components/Policy";
import Addpolicy from "./components/Addpolicy";
import EditPolicy from "./components/Editpolicy";
import Dashboard from "./components/Dashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/login", element: <Login /> },
  { path: "/policy", element: <Policy /> },
  { path: "/addpolicy", element: <Addpolicy /> },
  { path: "/editpolicy", element: <EditPolicy /> },
]);

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
