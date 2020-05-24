import React from 'react';

export default class extends React.Component {
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="/">Paola &amp; Daniel</a>
                <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu" />
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item"><a href="#home-section" className="nav-link"><span>Inicio</span></a></li>
                        <li className="nav-item"><a href="#nuestra-boda" className="nav-link"><span>Nuestra boda</span></a></li>
                        <li className="nav-item"><a href="#lovestory-section" className="nav-link"><span>Historia</span></a></li>
                        <li className="nav-item"><a href="#confirmar" className="nav-link"><span>CONFIRMAR ASISTENCIA</span></a></li>
                        <li className="nav-item"><a href="#gallery-section" className="nav-link"><span>Galería</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>);
    }
}