import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./componenets/Header";
import Users from "./componenets/Users";
import View from "./componenets/View";
import UserForm from "./componenets/UserForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Users />
            </>
          }
        />
        <Route
          path="/user/new"
          element={
            <>
              <Header path="true" />
              <UserForm />
            </>
          }
        />
        <Route
          path="/user/:userID"
          element={
            <>
              <Header />
              <View />
            </>
          }
        />
        <Route
          path="/user/:userId/edit"
          element={
            <>
              <Header />
              <UserForm />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
