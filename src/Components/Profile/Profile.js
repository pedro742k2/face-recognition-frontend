import "./Profile.css";
import { useState } from "react";
import ServerApi from "../../Services/ServerApi";

const Profile = ({ toggleModal, user, loadUsers }) => {
  // Update user in the database
  const updateUser = () => {
    if (
      user.name !== userFields.name ||
      user.email !== userFields.email ||
      user.birthday !== userFields.birthday ||
      user.avatar_url !== userFields.avatar_url
    ) {
      const confirmUser = window.confirm(
        `Dear user.\n\nYou're about to update your profile to:\n\nName: ${userFields.name}\nEmail: ${userFields.email}\nBirthday: ${userFields.birthday}\nAvatar URL: ${userFields.avatar_url}`
      );

      if (confirmUser) {
        fetch(`${ServerApi}/profile/${user.id}`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: window.sessionStorage.getItem("token"),
            user_id: user.id,
          },
          body: JSON.stringify({
            formInput: userFields,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.code) {
              loadUsers({
                ...user,
                ...userFields,
              });
            }

            alert(data.msg);
          })
          .catch((error) => alert("We're sorry.\nSomething went wrong."));
      }
    } else {
      alert("Nothing to update.");
    }
  };

  // Update user fields on React state
  const updateUserFields = (event) => {
    const { value } = event.target;

    switch (event.target.className) {
      case "user-name":
        setUserFields({
          ...userFields,
          name: value,
        });
        break;
      case "user-email":
        setUserFields({
          ...userFields,
          email: value,
        });
        break;
      case "user-birthday":
        setUserFields({
          ...userFields,
          birthday: value,
        });
        break;
      case "user-avatar":
        setUserFields({
          ...userFields,
          avatar_url: value,
        });
        break;
      default:
        console.warn("Tried to update a field that doesn't exist.");
    }
  };

  const [userFields, setUserFields] = useState({
    name: user.name,
    email: user.email,
    birthday: user.birthday,
    avatar_url: user.avatar_url,
  });

  return (
    <div className="profile-modal">
      <article className="modal-container">
        <main className="modal-info-main">
          <div className="close-modal-x" onClick={() => toggleModal()}>
            &times;
          </div>
          <img
            src={user.avatar_url?.trim() || `https://robohash.org/${user.id}`}
            className="modal-profile-img"
            alt="avatar"
          />
          <h1>{user.name}</h1>
          <h4>Images submited: {user.entries}</h4>
          <p>Member since: {new Date(user.joined).toLocaleDateString()}</p>

          <hr />

          <h1>User information</h1>

          <div className="user-input-container">
            <span>Name</span>
            <input
              type="text"
              className="user-name"
              defaultValue={user.name || "Add your name"}
              onChange={updateUserFields}
            ></input>
          </div>

          <div className="user-input-container">
            <span>Email</span>
            <input
              type="text"
              className="user-email"
              defaultValue={user.email || "Add your email"}
              onChange={updateUserFields}
            ></input>
          </div>

          <div className="user-input-container">
            <span>Birthday</span>
            <input
              type="date"
              defaultValue={
                userFields.birthday
                  ? new Date(user.birthday).toISOString().split("T")[0]
                  : null
              }
              className="user-birthday"
              onChange={updateUserFields}
            ></input>
          </div>

          <div className="user-input-container">
            <span>Avatar URL</span>
            <input
              type="text"
              className="user-avatar"
              defaultValue={user.avatar_url?.trim() || "Add an avatar url"}
              onChange={updateUserFields}
            ></input>
          </div>
        </main>

        <div className="btns-container">
          <button id="modal-save" onClick={updateUser}>
            Save
          </button>

          <button id="modal-cancel" onClick={() => toggleModal()}>
            Close
          </button>
        </div>
      </article>
    </div>
  );
};

export default Profile;
