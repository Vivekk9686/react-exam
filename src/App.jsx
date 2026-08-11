import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddStudent />
            </PrivateRoute>
          }
        />

        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditStudent />
            </PrivateRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;