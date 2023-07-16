import { Link } from "react-router-dom";
import "./sidebar.css";
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={"https://themegoods-cdn-pzbycso8wng.stackpathdns.com/" +
              "grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"}
          alt={"Profile pic for "}

          /*For a specific user*/
        />
        <p>

          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FaFacebook className={"sidebarIcon"}/>
          <FaInstagram className={"sidebarIcon"}/>
          <FaTwitter className={"sidebarIcon"}/>
          <FaPinterest className={"sidebarIcon"}/>

        </div>
      </div>
    </div>
  );
}
