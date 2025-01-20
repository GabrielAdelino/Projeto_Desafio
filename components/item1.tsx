import { Form, Switch } from "antd";
import CardFuncionario from "./cardFuncionario";
import { useState } from "react";
import Card2 from "./card2";
import { useNavigate } from "react-router-dom";

const Item1 = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [showCard2, setShowCard2] = useState(false);
    const navigate = useNavigate();
    
    const handleSwitchChange = (checked: boolean) => {
        setIsButtonDisabled(!checked);
    };

    const handleNestStep = () => {
        if (showCard2) {
            console.log("Redirecionando para /passo2");
            // Se o Card2 está sendo exibido, redirecione para o próximo passo
            navigate("/passo2");
        } else {
            console.log("Exibindo Card2");
            // Caso contrário, exibe o Card2
            setShowCard2(true);
        }
    };
    return (
        <div className="outside-form">
        <div className="principal-form">
        <div className="card">
            <div>
                        <p className="text-card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            In suscipit suscipit porttitor. Suspendisse ex lorem,
                            rhoncus nec ante eu, venenatis aliquam turpis. Nulla
                            facilisi. Curabitur nec mattis dolor. Nulla finibus
                            bibendum ligula tempus vehicula. Ut at tristique libero,
                            nec efficitur dui. Aliquam erat volutpat. Fusce quam sem,
                            tempus nec justo eget, luctus scelerisque velit. Nam
                            sollicitudin purus urna, vitae ornare neque tincidunt vel.
                            Proin ac lacinia erat, et commodo felis. Phasellus tempor
                            tellus eu vulputate tempus.
                        </p>
                    </div>
                    <div className="img-vector">
                        <img src={"/assets/Vector.png"} alt="Image" style={{ backgroundColor: '#fff'}}/>
                    </div>
              </div>
              {showCard2 ? (
                <Card2/>
              ) : (
           <div className="card-formulario">
                         <div className="titulo">Funcionário(s)</div>
                            <button className="add-funcionario" onClick={handleNestStep}>
                                + Adicionar Funcionário
                            </button>
                            <div className="buttons">
                                <button className="btn1">
                                Ver apenas os ativos
                                </button>

                                <button className="btn2">
                                Limpar filtros
                                </button>

                                <div className="ativos">Ativos 2/3</div>{/*Implementar lógica de quantidade de usuários ativos*/}
                            </div>
                    <div className="exib-card">
                    <CardFuncionario/>
                    <CardFuncionario/>
                    <CardFuncionario/>
                    <CardFuncionario/>
                    </div>
                    <div className="switch-check">
                       <p className="text">A etapa está concluída?</p>

                       <Form
                                name="switch"
                                initialValues={{ativo: false}}
                            >
                                <Form.Item
                                    name="ativo"
                                    valuePropName="checked"
                                >
                                    <Switch
                                        defaultChecked={false}
                                        onChange={handleSwitchChange}
                                        checkedChildren="Sim"
                                        unCheckedChildren="Não"
                                    />
                                </Form.Item>
                            </Form>
                    </div>
            </div>
            )}
        </div>
        <div className="prox-passo">
                        <button 
                        className={`proximo-btn ${isButtonDisabled ? 'disabled' : ''}`}
                        onClick={handleNestStep}
                        disabled={isButtonDisabled}>
                            Próximo passo
                        </button>
                    </div>
    </div>
    );
};

export default Item1;
