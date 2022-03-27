import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./ProfileIcon.css";

const ProfileIcon = ({ onRouteChange, toggleModal, user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="icon-container">
      <div className="d-flex justify-content-center">
        <Dropdown
          isOpen={dropdownOpen}
          toggle={() => setDropdownOpen(!dropdownOpen)}
        >
          <DropdownToggle
            data-toggle="dropdown"
            aria-expanded={dropdownOpen}
            tag="span"
          >
            <img
              src={user.avatar_url?.trim() || `https://robohash.org/${user.id}`}
              className="navigation-profile-img"
              alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            className="animate__animated animate__zoomIn"
            style={{
              marginTop: "30px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              animationDuration: "0.20s",
            }}
          >
            <DropdownItem onClick={() => toggleModal()}>
              View profile
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                window.sessionStorage.removeItem("token");
                onRouteChange("signin");
              }}
            >
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default ProfileIcon;
