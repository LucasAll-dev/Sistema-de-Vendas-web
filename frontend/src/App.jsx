import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Vendas from "./pages/vendas/Vendas"
import Home from "./pages/home/Home"
import Menu from './components/Menu';

function App () {
    return (
        <>
        <Header></Header>
        <Main>
        <Router>
              <Menu>
                <div id='container-dinamico'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/vendas" element={<Vendas/>} />
                    </Routes>
                </div>
                </Menu>
        </Router>
            </Main>
        </>
    );
};

export default App;