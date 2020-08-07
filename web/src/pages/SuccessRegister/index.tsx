import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg'

import './style.css'


function SuccessRegister() {
    return (
        <div id="success-register">
            <main>
                <img src={successIcon} alt="" />
                <strong>Cadastro salvo!</strong>
                <p>
                    Tudo certo, seu cadastro está na nossa lista de professores.
                    <br />
                    Agora é só ficar de olho no seu WhatsApp.
                </p>

                <Link to="/study">
                    Acessar lista
                </Link>
            </main>
        </div>
    )
}

export default SuccessRegister;