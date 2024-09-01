import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./componenets/Header";
import Users from "./componenets/Users";
import NewUser from "./componenets/NewUser";
import View from './componenets/View'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header path='/'/>
              <Users />
            </>
          }
        />
        <Route
          path="/user/:userID"
          element={
            <>
              <Header path='/'/>
              <View />
            </>
          }
        />
        <Route
          path="/newuser"
          element={
            <>
              <Header path='/newuser'/>
              <NewUser />
            </>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <>
              <Header path='/newuser'/>
              <NewUser />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
