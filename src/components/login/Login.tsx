
import { useState } from "react";
import "../Inicio.css";
import "./Login.css";
import axios from "axios";


function Login() {

    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const [senha2, setSenha2] = useState("");
    const [email2, setEmail2] = useState("");
    const [error2, setError2] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/auth/login", {
                email,
                senha,
            });
            const { token } = response.data;

            localStorage.setItem("authToken",token);
            console.log("Login bem-sucedido! Token: ", token);

            setEmail("");
            setSenha("");
            setError("");
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || "Login falhou. Verifique suas credenciais.");
            } else {
                setError("Erro desconhecido. Tente novamente mais tarde.");
            }
            
            console.error(err);
        }
    };

    const handleCadastro =  async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response2 = await axios.post("http://localhost:8080/auth/register", {
                email: email2,
                senha: senha2,
            });
            const { token } = response2.data;

            localStorage.setItem("authToken",token);
            console.log("Cadastro realizado com Sucesso! Token: ", token);

            setEmail2("");
            setSenha2("");
            setError2("");
        } catch(err: unknown) {
            if (axios.isAxiosError(err)) {
                setError2(err.response?.data?.message || "cadastro falhou. Tente novamente.");
            } else {
                setError2("Erro desconhecido. Tente novamente mais tarde.");
            }
        }
    }





    return (
        <div>
            <nav className="nave">
                <img src="" alt="" />
            </nav>

            <section className="section01">
                <div className="boxs">
                    <div className="box1">
                        <form onSubmit={handleLogin}>
                            <h2>Já sou cliente</h2>
                            <input type="email" name="txtEmail" id="txtEmail" 
                                placeholder="Digite seu Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input type="password" name="txtSenha" id="txtSenha" 
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                            <h5>Esqueci minha senha</h5>
                            {error && <p style={{color: "red"}}>{error}</p>}
                            <input type="submit" value="Acessar Conta" />
                        </form>
                    </div>

                    <div className="box2">
                        <form onSubmit={handleCadastro}>
                            <h2>Criar Conta</h2>
                            <input type="email" name="txtEmail2" id="txtEmail2" 
                                placeholder="Informe seu e-mail"
                                value={email2}
                                onChange={(e) => setEmail2(e.target.value)}
                                required
                            />
                            <input type="password" name="txtSenha2" id="txtSenha2" 
                                placeholder="Criar senha"
                                value={senha2}
                                onChange={(e) => setSenha2(e.target.value)}
                                required
                            />
                            {error2 && <p style={{color: "red"}}>{error2}</p>}
                            <input type="submit" value="Criar Conta" />
                        </form>
                    </div>

                </div>
                <div className="redes">
                    <h5>Acesse sua conta Tô na moda através de suas redes sociais.</h5>
                    <div className="btnRedes">
                        <button>Conectar com Facebook</button>
                        <button>Fazer login com o Google</button>
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
    );
};

export default Login;