import { Link } from "react-router-dom";
import './header.css';

function Header(){
    return(
        <header>
            <h2>Projeto Filmes</h2>

            <div className="menu">
                <Link to='/'>Home</Link>
                <Link to='/favoritos'>Meus Filmes</Link>
            </div>
        </header>
    )
}

export default Header;