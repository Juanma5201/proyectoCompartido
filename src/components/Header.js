import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary py-4">
      <Container>
        <div className="d-flex justify-content-between">
          <h2>Aprendiendo Router</h2>
          <nav>
            <ul>
              <li>
                <Link to="/" className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/users" className="text-light">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-light">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
