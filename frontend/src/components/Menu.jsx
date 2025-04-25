import { Link } from "react-router-dom";
import '.././App.css'

function Menu () {
    const itens = [
        {id: 1, paginas: "/", h2: "Home"},
        {id: 2, paginas: "/vendas", h2: "Vendas"},
        {id: 3, paginas: "/estoque", h2: "Estoque"},
        {id: 4, paginas: "/relatorios", h2: "Relatorios"},
        {id: 5, paginas: "/sair", h2: "Sair"}
    ];
    return (
        <div id="container-menu">
            {itens.map((itens =>(
                <Link className="link-menu" to={itens.paginas}>
                    <div key={itens.id} className="info-menu">    
                        {itens.h2}
                    </div>
                </Link>
            )))}
        </div>
    );
}

export default Menu;