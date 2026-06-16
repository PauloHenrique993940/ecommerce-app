import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ShoppingOutlined,
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import style from './header.module.scss';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={style.container}>
            <Link to="/">
                <strong>E-commerce</strong>
            </Link>

            <button
                className={style.menuButton}
                onClick={() => setMenuOpen(true)}
            >
                <MenuOutlined />
            </button>

            <nav className={`${style.menu} ${menuOpen ? style.active : ''}`}>
                <button
                    className={style.closeButton}
                    onClick={() => setMenuOpen(false)}
                >
                    <CloseOutlined />
                </button>

                <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                </Link>

                <Link to="/cart" onClick={() => setMenuOpen(false)}>
                    Carrinho <ShoppingOutlined />
                </Link>

                <Link to="/products" onClick={() => setMenuOpen(false)}>
                    Products
                </Link>

                <Link to="/success" onClick={() => setMenuOpen(false)}>
                    Success
                </Link>
            </nav>
        </header>
    );
}

export default Header;
