import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
      <div>
        <ul>
          <li>
            <NavLink to={"/"} className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/post"} className={({isActive}) => isActive ? "active" : ""}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/post/detail"} className={({isActive}) => isActive ? "active" : ""}>Blog</NavLink>
          </li>
        </ul>
      </div>
    )
  }
  
  export default Navbar;
  