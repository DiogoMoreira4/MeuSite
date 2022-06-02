import Link from 'next/link';
import { NavLinkContainer } from './styles';
import { useRouter } from 'next/router';

interface props{
    title: string;
    path: string;
}

export default function NavLink( {title, path}: props){
    
    const router = useRouter();
 
    const isActive = router.pathname == path;

    return(
        <NavLinkContainer isActive={isActive}>
            <Link href={path}>
                <a>{title}</a>
            </Link>
        </NavLinkContainer>
    );
}