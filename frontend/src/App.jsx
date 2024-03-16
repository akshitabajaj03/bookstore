import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditBook from "./pages/EditBook";
import ShowBook from "./pages/ShowBook";
import Toaster from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContextProvider>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }}>
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Home /> : <Navigate to="/auth/register" />}
          />
          <Route path="/auth/register" element={<Register />} />
          <Route
            path="/auth/login"
            element={<Login setLoggedIn={setLoggedIn} />}
          />
          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </Toaster>
    </UserContextProvider>
  );
};

export default App;
