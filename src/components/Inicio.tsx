import "./Inicio.css";

import { Swiper, SwiperSlide } from "swiper/react"



function Inicio() {

    const data = [
        { id: '1', image: 'https://lets.events/blog/wp-content/uploads/2023/03/eventos-de-moda.jpg'},
        { id: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQes94kBp5FNgPUsNHHzOblE4g4on-dgTO98Q&s'},
        { id: '3', image: 'https://st.depositphotos.com/1389715/2129/i/450/depositphotos_21297327-stock-photo-modern-and-fashion-clothes-store.jpg'},
        { id: '4', image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
    ]

    const data2 = [
        { id: '1', image: 'https://images.tcdn.com.br/img/img_prod/873120/kit_2_calcas_cargo_masculina_sem_punho_escolha_as_cores_1793_1_82b11e478bec9c3d9963adea7c5b9a82.jpg'},
        { id: '2', image: 'https://images.tcdn.com.br/img/img_prod/873120/kit_2_calcas_cargo_masculina_com_punho_escolha_as_cores_1581_1_a04b8bd0f2b58663e5297a44f60cd1dc.jpg'},
        { id: '3', image: 'https://lojabluk.vteximg.com.br/arquivos/ids/166490-800-1000/calca-jeans-skinny-com-botoes-na-perna-azul-cj82980621-01.jpg?v=637727787998500000'},
        { id: '4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXGMJV7Nz34uy7dqTW1jmmu52Yn-FYaWUqQ&s'}
    ]








    return (
        <div>
            <nav>
                <div className="nav1">
                    <p>Frete Grátis acima de R$ 250,00</p>
                </div>
                <div className="nav2">
                    <div className="logo1"></div>
                    <ul>
                        <li>Meus Pedidos</li>
                        <li>Nossa Loja</li>
                        <li>Atendimento</li>
                        <li>Cartões e Serviços</li>
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
                                <p>Entre ou cadastre-se</p>
                            </li>
                            <li>
                                <p>Meu Carrinhor</p>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="nav4">
                    <ul>
                        <li>Feminino</li>
                        <li>Masculino</li>
                        <li>Infantil</li>
                        <li>Lingerie</li>
                        <li>Jeans</li>
                        <li>Plus Size</li>
                        <li>Casa</li>
                        <li>Ofertas</li>
                    </ul>
                </div>
            </nav>
            <section className="section1">
                <div className="carrosel">
                    <Swiper
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        autoplay={{delay:5000}}
                    >
                        { data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img 
                                    src={item.image}
                                    alt="Slider"
                                    className="imgSlider"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            <div className="boxImg1">
                <ul>
                    <li>Frete Grátis acima de R$250</li>
                    <li>Aceitamos todos os Cartões</li>
                    <li>Contato</li>
                    <li>Compra segura</li>
                </ul>
            </div>
            </section>
                    
            <section className="section2">
                <h2>Promoções Imperdíveis!</h2>
                
                <div className="carrosel2">
                    <Swiper
                        slidesPerView={2}
                        pagination={{clickable: true}}
                    
                    >
                        {data2.map((item2) => (
                            <SwiperSlide key={item2.id}>
                                <img
                                    src={item2.image}
                                    alt="Modas"
                                    className="ibagems"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <section className="imgLong">

            </section>
            <footer className="fim">
                <div className="divs">
                    <div>
                        <ul>
                            <li>INSTITUCIONAL</li>
                            <li>Receba novidades</li>
                            <li>Prazos e Formas de Entrega</li>
                            <li>Quem somos</li>
                            <li>Formas de Pagamento</li>
                            <li>Trocas e Devoluções</li>
                            <li>Nosso Whatsapp</li>
                            <li>Nossa Loja</li>
                            <li>Funcioamento</li>
                            <li>Política e Privacidade</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>ATENDIMENTO</li>
                            <li>email@gmail.com</li>
                            <li>Fale conosco
                                (86) 999898-7878
                            </li>
                        </ul>

                        <ul>
                            <li>REDES SOCIAIS</li>
                            <li>Inst\g</li>
                        </ul>
                    </div>
                </div>

                <div className="fimFooter">
                    <h4>DESENVOLVIMENTO RMDEV</h4>

                    <h4>FORMAS DE PAGAMENTO</h4>
                    <ul>
                        <li><img src="" alt="" /></li>
                        <li><img src="" alt="" /></li>
                        <li><img src="" alt="" /></li>
                        <li><img src="" alt="" /></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Inicio;