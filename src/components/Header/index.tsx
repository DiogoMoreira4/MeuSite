import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
    return(
        <Container>
            <ul>
                <NavLink title="Home" path="/" />
                <NavLink title="Sobre Mim" path="/sobre" />
            </ul>
        </Container>
    );
};

export default Header;

