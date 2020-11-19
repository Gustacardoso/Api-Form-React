import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {isAdmin, deleteToken} from '../Auth';

function Nav() {

    const history = useHistory();

    const logout = () => {
        deleteToken();
        history.push('/users/login');
        window.location.reload(true);
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">sobre</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Produtos e serviços</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contato</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactsView">Lista de Contatos</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                {
                    isAdmin() ? //retorno para coisa verdadeiras
                      <li className = "nav-item">
                          <Link  onClick={logout} className="nav-link">
                              Logout
                          </Link>
                          </li>   
                    : 
                     <li className = "nav-item">
                        <Link className="nav-link" to="/users/login">Login</Link>
                         </li>
                }
            </ul>
        </nav>
    )
}

export default Nav;