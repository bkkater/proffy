import React, { FC } from 'react';

import './style.css'

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface PageHeaderProps {
    title: string;
    description?: string;
    page: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <div className="top-bar-content">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                    <p>{props.page}</p>
                    <img src={logoImg} alt="Logo" />
                </div>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}

                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;