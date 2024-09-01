import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

import "./UserCard.css";

const error = {
  variant: "error",
  autoHideDuration: 5000,
};

const success = {
  variant: "success",
  autoHideDuration: 5000,
};
export default function UserCard({ user, handleDelete }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  function handleEdit() {
    navigate(`/user/${user.id}/edit`, { state: { user: user } });
  }
  
  async function handleDelete() {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${user.id}`
      );
      if (response.status === 200) {
        enqueueSnackbar("Deleted successfully!", success);
      }
    } catch (err) {
      enqueueSnackbar('Something went wrong... Please try again.', error);
    }
  }
  return (
    <div className="card">
      <img src="./default.jpg" alt="Default profile"/>
      <p className="id">ID: {user.id}</p>
      <p className="name">{user.name.toUpperCase()}</p>
      <p className="username">UserName: {user.username}</p>
      <p className="email">Email: {user.email.toLowerCase()}</p>
      <div className="btn">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete()}>
          Delete
        </button>
        <Link to={'../user/' + user.id} className="view">View</Link>
      </div>
    </div>
  );
}
