import "./settings.css";
import {Sidebar} from "../../components";
import Button from "../../components/UI/Button/Button.jsx";
import {FaUserEdit} from "react-icons/fa";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <Button btnClass={"btn-light"} text={"Delete Account"}><a onClick={undefined}></a></Button>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"><FaUserEdit/></i>{" "}
            </label>
            <input
              id="fileInput"
              type="image"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Your name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="fname@yahoo.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
     
    </div>
  );
}
