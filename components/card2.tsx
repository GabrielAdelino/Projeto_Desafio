import { Form, Radio, Switch } from "antd";
import CardFuncionario from "./cardFuncionario";
import { useState } from "react";


const Card2 = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    
    const handleSwitchChange = (checked: boolean) => {
        setIsButtonDisabled(!checked);
    };
    return <div>
                <div className="card-formulario2">
                         <div className="titulo">Adicionar Funcionário</div>
                            <div className="funcionario-ativo">
                                <p className="p-funcionario">O trabalhador esta ativo ou inativo?</p>
                                <Form className="activated"
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
                                        checkedChildren="Ativo"
                                        unCheckedChildren="Inativo"
                                    />
                                </Form.Item>
                            </Form>
                            </div>
                            <div className="info-funcionario">

                                <div className="div1">
                                    <div className="teste">
                                        <p className="p-info">Nome</p>
                                            <input className="input-form" placeholder=" Nome">
                                            </input>
                                    </div>

                                <div className="teste">
                                        <p className="p-info">Sexo</p>
                                        <Radio.Group>
                                        <Radio className="select-s" value="female">Feminino</Radio>
                                        <Radio className="select-s" value="male">Masculino</Radio>
                                        </Radio.Group>
                                </div>

                                </div>
                                
                                <div className="div2">
                                        <div className="teste">
                                            <p className="p-info">CPF</p>
                                            <input className="input-form" placeholder=" CPF">
                                            </input>
                                        </div>

                                    <div className="teste">
                                        <p className="p-info">Data de Nascimento</p>
                                            <input className="input-form" placeholder=" Data de Nascimento">
                                            </input>
                                    </div>

                                </div>

                                <div className="div2">
                                    <div className="teste">
                                        <p className="p-info">RG</p>
                                        <input className="input-form" placeholder=" Seu RG">
                                        </input>
                                    </div>

                                    <div className="teste">
                                        <p className="p-info">Cargo</p>
                                        <input className="input-form" placeholder=" Data de Nascimento">
                                        </input>
                                    </div>
                                </div>
                            </div>
                    <div className="exib-card">
                    </div>
            </div>
        </div>;
};

export default Card2;
