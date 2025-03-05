import { Link } from "react-router-dom";
import '.././App.css'

function Menu () {
    const itens = [
        {id: 1, paginas: "/", h2: "pagina home"},
        {id: 2, paginas: "/vendas", h2: "Vendas"},
    ];
    return (
        <div id="container-menu">
            {itens.map((itens =>(
                <div key={itens.id} className="info-menu">
                    <Link to={itens.paginas}>{itens.h2}</Link>
                </div>
            )))}
        </div>
    );
}

export default Menu;