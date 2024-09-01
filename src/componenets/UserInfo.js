import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";

import "./UserInfo.css";

const error = {
  variant: "error",
  autoHideDuration: 5000,
};

export default function UserInfo() {
  const [user, setUser] = useState(undefined);

  const id = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate= useNavigate();

  function handleClick(){
    navigate("/");
  }

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id.userID}`
        );
        if (response.status === 200) {
          setUser(response.data);
        }
      };
      fetchUser();
    } catch (err) {
      enqueueSnackbar("Something went wrong :(", error);
    }
  }, []);

  return (
    <div className="userInfo">
      <img src="../defaultUser.png" alt="Default user" />
      {user !== undefined && (
        <div className="info">
          <div className="key">Name: </div> <div>{user.name}</div>
          <div className="key">User ID: </div> <div>{user.id}</div>
          <div className="key">Email: </div> <div>{user.email}</div>
          <div className="key">Username: </div> <div>{user.username}</div>
          <div className="key">Address: </div>
          <div>
            {user.address.street} street, {user.address.suite},{" "}
            {user.address.city} city, {user.address.zipcode}
          </div>
          <div className="key">Phone number: </div> <div>{user.phone}</div>
          <div className="key">Portfolio: </div> <div>{user.website}</div>
          <div className="key">Company: </div> <div>{user.company.name}</div>
          <button onClick={handleClick}>Back to home</button>
        </div>

      )}
    </div>
  );
}
