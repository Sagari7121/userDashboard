import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./componenets/Header";
import Users from "./componenets/Users";
import NewUser from "./componenets/NewUser";
import View from "./componenets/View";

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
              <NewUser />
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
              <NewUser />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
