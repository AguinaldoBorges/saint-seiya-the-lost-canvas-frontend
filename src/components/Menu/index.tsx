import { Link } from 'react-router-dom';
import './style.css'

type Props = {}

export default function Menu({ }: Props) {
    return (
        <nav id="menu">
            <ul className='menu'>
                <li className='menu-item'>
                <Link to="/" className='menu-item-link'>Home</Link>
                </li>
                <li className='menu-item'>
                <Link to="/chars" className='menu-item-link'>Chars</Link>
                </li>
            </ul>
        </nav>
    )
};