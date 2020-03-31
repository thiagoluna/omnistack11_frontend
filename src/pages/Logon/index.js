import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
//Importar icons do npm install react-icons do pacote feathericons.com
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

//importar imagem
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        //Consumi API
        try {
            const response = await api.post('sessions', { id });

            //manter id e nome da ong logada na sessão
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            //Redirecionar para a pagina principal
            history.push('/profile');
        } catch (err) {
            alert('Falha no login. Tente novamente.');
        }
    }  

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" /> 

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>   
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>     
    );
}