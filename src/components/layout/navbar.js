import { Link } from "react-router-dom";
import Container from "./container";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";


function Navbar(){
    return (
        <div>
        <nav className={styles.navbar}>
        <Container>
          <Link to="/">
            <img src={logo} alt="costs"></img>
          </Link>
           <ul className={styles.list}>
            <li className={styles.item}><Link to="/Home">Home</Link></li>
            <li className={styles.item}><Link to="/Contato">Contato</Link></li>
            <li className={styles.item}><Link to="/Empresa">Empresa</Link></li>
            <li className={styles.item}><Link to="/projects">Projetos</Link></li>
           </ul>
          </Container>
        </nav>
        </div>
    );
}

export default Navbar