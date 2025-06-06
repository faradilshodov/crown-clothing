import { Outlet, Link } from 'react-router';
import  CrwnLogo from '../../assets/crown.svg?react';
import './navigation.styles.scss';
const Navigation = () => {

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;