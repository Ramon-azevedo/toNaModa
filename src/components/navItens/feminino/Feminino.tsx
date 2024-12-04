import "../navItens.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Feminino01 {
    id: number;
    imagem: string;
    nome: string;
    preco: string;
    vezesCartao: string;
}

function Feminino() {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("/Feminino");
    }

    const handleClick2 = () => {
        navigate("/Masculino");
    }

    const handleClick3 = () => {
        navigate("/Infantil");
    }

    const handleClick4 = () => {
        navigate("/Lingerie");
    }

    const handleClick5 = () => {
        navigate("/Jeans");
    }

    const handleClick6 = () => {
        navigate("/PlusSize");
    }


    const handleClick8 = () => {
        navigate("/Ofertas");
    }

    const [feminino, setFeminino] = useState<Feminino01[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get("http://localhost:8080/feminino/getFeminino")
            .then((response) => {
                setFeminino(response.data);
            })
            .catch((err) => {
                setError("Erro ao carregar a moda feminina.");
                console.error(err);
            })
    },[]);


    return (
        <div>
            <nav>
            <div className="nav1">
                    <p>Frete Grátis acima de R$ 250,00</p>
                </div>
                <div className="nav2">
                    <div className="logo1"></div>
                    <ul>
                        <li><a href="">Meus Pedidos</a></li>
                        <li><a href="">Nossa Loja</a></li>
                        <li><a href="">Atendimento</a></li>
                        <li><a href="">Cartões e Serviços</a></li>
                    </ul>
                </div>
                <div className="nav3">
                    <div>
                        <ul>
                            <li><img src="" alt="" /></li>
                            <li>
                                <form>
                                    <div className="pesq">
                                        <input type="text" name="" id="" />
                                        <span>
                                            <button style={{ cursor: "pointer" }}>
                                            <span>
                                                <svg
                                                width="20" /* Ajuste o tamanho conforme necessário */
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                                    stroke="black" /* Cor da borda */
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21 21L16.65 16.65"
                                                    stroke="black" /* Cor da borda */
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                </svg>
                                            </span>
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </li>
                            <li>
                                <p><a href="">Entre ou cadastre-se</a></p>
                            </li>
                            <li>
                                <p><a href="">Meu Carrinho</a></p>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="nav4">
                    <nav>
                        <ul>
                            <li><button onClick={handleClick1}>Feminino</button></li>
                            <li><button onClick={handleClick2}>Masculino</button></li>
                            <li><button onClick={handleClick3}>Infantil</button></li>
                            <li><button onClick={handleClick4}>Lingerie</button></li>
                            <li><button onClick={handleClick5}>Jeans</button></li>
                            <li><button onClick={handleClick6}>Plus Size</button></li>
                            <li><button onClick={handleClick8}>Ofertas</button></li>
                        </ul>
                    </nav>
                </div>
            </nav>


            <section className="section1">
                <div>
                    <h2>Feminino</h2>
                    <div className="subItens">
                        {error ? (
                            <p>{error}</p>
                        ) : (
                            feminino.map((fem) => (
                                <ul key={fem.id} className="itens">
                                    <li>
                                        {/* Aqui passamos o ID como parâmetro na URL */}
                                        <Link to={`/product/${fem.id}`}>
                                            <img src={fem.imagem} alt={fem.nome} className="img" />
                                        </Link>
                                    </li>
                                    <li>{fem.nome}</li>
                                    <li>{fem.preco}</li>
                                    <li>{fem.vezesCartao}</li>
                                </ul>
                            ))
                        )}
                    </div>
                </div>
            </section>
            <footer className="fim">
                <div className="divs">
                    <div>
                        <ul>
                            <li><h3>INSTITUCIONAL</h3></li>
                            <li><a href="">Receba novidades</a></li><br />
                            <li><a href="">Prazos e Formas de Entrega</a></li><br />
                            <li><a href="">Quem somos</a></li><br />
                            <li><a href="">Formas de Pagamento</a></li><br />
                            <li><a href="">Trocas e Devoluções</a></li><br />
                            <li><a href="">Nosso Whatsapp</a></li><br />
                            <li><a href="">Nossa Loja</a></li><br />
                            <li><a href="">Funcionamento</a></li><br />
                            <li><a href="">Política e Privacidade</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><h3>ATENDIMENTO</h3></li>
                            <li><a href="mailto:email@gmail.com">email@gmail.com</a></li><br />
                            <li><h3>Fale conosco</h3>
                                <a href="">(86) 999898-7878</a>
                            </li>
                        </ul>

                        <ul>
                            <li><h3>REDES SOCIAIS</h3></li>
                            <li><a href="">@tonamodapiripiri</a></li>
                        </ul>
                    </div>
                </div>

                <div className="fimFooter">
                    <h4>DESENVOLVIMENTO RMDEV</h4>

                    <h4>FORMAS DE PAGAMENTO</h4>
                    <ul className="cartoes">
                        <li><img src="https://chamatec.com/wp-content/uploads/2019/07/bandeiras_cartoes1-e1521122234702-768x114.png" alt="logos" /></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}


export default Feminino;
