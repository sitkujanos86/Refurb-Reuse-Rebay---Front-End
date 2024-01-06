import "../Styles/Navbar.css"
import { Link } from "react-router-dom";


function Navbar () {
    return (
        <nav>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/About">
            <button>About US</button>
          </Link>
          <Link to="/AddItem">
            <button>Add Item</button>
          </Link>
          <Link to="/Cart">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8zHL36gU-i3jQlw8gN1pv3sIoFAVoEERtA&usqp=CAU" alt="Cart" />
          </Link>
        </nav>
      );
}
 export default Navbar;