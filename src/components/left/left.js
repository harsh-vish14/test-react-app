import { RiSearch2Line } from "react-icons/ri";
import "./left.css";

function Left() {
  return (
    <div>
      <div id="left-top">
        <div class="left-profile">
          <img
            src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="25px"
            alt="profile-image"
          />
        </div>
        <div id="left-top-details">
          <div class="left-user-name">Harsh vish</div>
          <div class="left-user-id">@harsh-vish14</div>
        </div>
      </div>
      <div id="left-search">
        <div id="left-search-icon">
          <RiSearch2Line />
        </div>
        <div id="left-search-input">
          <input placeholder="Search here" type="text" />
        </div>
      </div>
      <div id="left-users-left">
        <div class="user">
          <div class="left-profile">
            <img
              src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="25px"
              alt="profile-image"
            />
          </div>
          <div>
          <div>Compozent</div>
          <div> lorem ipsum ipsum ipsum ipsum</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Left;
