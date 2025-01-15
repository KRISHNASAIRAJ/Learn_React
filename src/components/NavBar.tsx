import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    // <div className="container float-right justify-content-right">
    <div className="container float-right justify-content-end">
      <NavLink
        to="/"
        className={(props: { isActive: boolean }) =>
          `btn bg-transparent text-white ${
            props.isActive ? "active-button" : ""
          }`
        }
      >
        HOME
      </NavLink>

      <NavLink
        to="/rewards"
        className={(props: { isActive: boolean }) =>
          `btn bg-transparent text-white ${
            props.isActive ? "active-button" : ""
          }`
        }
      >
        REWARDS
      </NavLink>

      <NavLink
        to="/credit-cards"
        className={(props: { isActive: boolean }) =>
          `btn bg-transparent text-white ${
            props.isActive ? "active-button" : ""
          }`
        }
      >
        CREDIT CARDS
      </NavLink>

      <NavLink
        to="/banks"
        className={(props: { isActive: boolean }) =>
          `btn bg-transparent text-white ${
            props.isActive ? "active-button" : ""
          }`
        }
      >
        BANKS
      </NavLink>
    </div>
  );
}

export default NavBar;
