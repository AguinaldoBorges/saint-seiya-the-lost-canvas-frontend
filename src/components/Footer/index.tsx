import InputSearch from '../Menu'
import './style.css'
import bwLogo from '../../assets/bw-logo.png'


type Props = {}

export default function Footer({ }: Props) {
    return (
        <section id='footer' className='container-fluid bg-dark'>
            <div className="row p4">
                <div className='col col-4 txt-light'>
                    <img src={bwLogo} alt="logo" className='logo-top' />
                </div>
                <div className='col col-4 txt-light'>
                    Copyright 2024 - Aguinaldo Borges - Todos os direitos Reservados
                </div>
            </div>
        </section>
    )
};