import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Vendas from "./../pages/vendas/Vendas"
import Home from "./../pages/home/Home"
import Estoque from "./../pages/estoque/Estoque"
import Relatorios from "./../pages/relatorios/Relatorios"

import Menu from './Menu';

function Main () {
    return (
        <>
            <main className="container-main">
                <Router>
                    <Menu />
                    <div id='container-dinamico'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/vendas" element={<Vendas />} />
                            <Route path="/estoque" element={<Estoque />} />
                            <Route path="/relatorios" element={<Relatorios />} />
                        </Routes>
                    </div>
                </Router>
            </main>
        </>
    );
};

export default Main;