import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav>
            <Link to="/">Capa</Link>
            <p></p>
            <Link to="Contato">Contato</Link>
        </nav>
    );
};

export default NavBar;