import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewUser.css";
import { useSnackbar } from "notistack";

const error = {
  variant: "error",
  autoHideDuration: 5000,
};

const success = {
  variant: "success",
  autoHideDuration: 5000,
};
export default function NewUser() {
  const navigate = useNavigate();
  const location = useLocation();

  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      id: event.target.id.value,
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
      address: {
        street: event.target.street.value,
        suite: event.target.suite.value,
        city: event.target.city.value,
        zipcode: event.target.zipcode.value,
      },
      phone: event.target.phone.value,
      website: event.target.website.value,
      company: {
        name: event.target.companyName.value,
        catchPhrase: event.target.description.value,
      },
    };
    if (location.state) {
      console.log(data);
      try {
        const response = await axios.patch(
          `https://jsonplaceholder.typicode.com/users/${location.state.user.id}`,
          { ...data },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        );
        if (response.status === 200) {
          enqueueSnackbar("Updated successfully!", success);
          navigate("/");
        }
      } catch (err) {
        enqueueSnackbar("Something went wrong. Please try again!", error);
      }
    } else {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users/",
          { ...data },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        );
        if(response.status===201){
          enqueueSnackbar("New user added successfully!", success);
          navigate('/');
        }
      } catch (err) {
        enqueueSnackbar(err.message, error);
      }
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>{location.state? 'Update profile' :'User Information'}</h2>

      <div className="control-row">
        <div className="control">
          <label>Email</label>
          <input
            id="email"
            type="email"
            name="email"
            defaultValue={location.state ? location.state.user.email : ""}
            required
          />
        </div>

        <div className="control">
          <label>User ID</label>
          <input
            id="id"
            type="text"
            name="id"
            defaultValue={location.state ? location.state.user.id : ""}
            required
          />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <label>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            defaultValue={location.state ? location.state.user.name : ""}
            required
          />
        </div>

        <div className="control">
          <label>Username</label>
          <input
            id="username"
            type="text"
            name="username"
            defaultValue={location.state ? location.state.user.username : ""}
            required
          />
        </div>
      </div>

      <div className="control-row">
        <div className="control">
          <label>Phone Number</label>
          <input
            id="phone"
            type="text"
            name="phone"
            defaultValue={location.state ? location.state.user.phone : ""}
            required
          />
        </div>
        <div className="control">
          <label>Portfolio</label>
          <input
            id="website"
            type="text"
            name="website"
            defaultValue={location.state ? location.state.user.website : ""}
            required
          />
        </div>
      </div>

      <hr />

      <div>
        <h3>Address</h3>

        <div className="control-row">
          <div className="control">
            <label>Street</label>
            <input
              type="text"
              id="street"
              name="street"
              defaultValue={
                location.state ? location.state.user.address.street : ""
              }
              required
            />
          </div>

          <div className="control">
            <label>Suite</label>
            <input
              type="text"
              id="suite"
              name="suite"
              defaultValue={
                location.state ? location.state.user.address.suite : ""
              }
              required
            />
          </div>
        </div>

        <div className="control-row">
          <div className="control">
            <label>Zipcode</label>
            <input
              type="text"
              id="zipcode"
              name="zipcode"
              defaultValue={
                location.state ? location.state.user.address.zipcode : ""
              }
              required
            />
          </div>

          <div className="control">
            <label>City</label>
            <input
              type="text"
              id="city"
              name="city"
              defaultValue={
                location.state ? location.state.user.address.city : ""
              }
              required
            />
          </div>
        </div>
      </div>

      <hr />

      <div>
        <h3>Company Details</h3>

        <div className="control-row">
          <div className="control">
            <label>Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              defaultValue={
                location.state ? location.state.user.company.name : ""
              }
              required
            />
          </div>

          <div className="control">
            <label>Description</label>
            <input
              type="text"
              id="description"
              name="description"
              defaultValue={
                location.state ? location.state.user.company.catchPhrase : ""
              }
              required
            />
          </div>
        </div>
      </div>

      <p className="form-actions">
        {!location.state && <button type="reset" className="button button-flat">
          Reset
        </button>}
        <button type="submit" className="button">
          {location.state ? "Edit" : "Submit"}
        </button>
      </p>
    </form>
  );
}
