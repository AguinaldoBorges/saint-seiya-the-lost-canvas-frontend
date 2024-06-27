import Menu from '../Menu'
import './style.css'
import logo from '../../assets/logo.webp'


type Props = {}

export default function Header({ }: Props) {
    return (
        <section id='header' className='container-fluid bg-dark'>
            <div className="row  p2">

                <div className='col col-1'>
                    <img src={logo} alt="logo" className='logo-top' />
                </div>

                <div className='col col-1'>
                    <Menu />
                </div>
            </div>
        </section>
    )
};