import { Checkbox, Form, Radio, Select, Switch } from "antd";
import { useState } from "react";

const Card2: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const {Option} = Select;

  const handleSwitchChange = (checked: boolean) => {
    setIsButtonDisabled(!checked);
  };

  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const handleChange = (value: string) => {
    console.log(`Selecionado: ${value}`); {/*Lógica componente EPI */}
  };

  return (
    <div>
      <div className="card-formulario2">
        <div className="titulo">Adicionar Funcionário</div>

        <div className="funcionario-ativo">
          <p className="p-funcionario">O trabalhador está ativo ou inativo?</p>
          <Form className="activated" name="switch" initialValues={{ ativo: false }}>
            <Form.Item name="ativo" valuePropName="checked">
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
              <input className="input-form" placeholder="Nome" />
            </div>

            <div className="teste">
              <p className="p-info">Sexo</p>
              <Radio.Group>
                <Radio className="select-s" value="female">
                  Feminino
                </Radio>
                <Radio className="select-s" value="male">
                  Masculino
                </Radio>
              </Radio.Group>
            </div>
          </div>

          <div className="div1">
            <div className="teste">
              <p className="p-info">CPF</p>
              <input className="input-form" placeholder="CPF" />
            </div>

            <div className="teste">
              <p className="p-info"> Data de Nascimento</p>
              <input className="input-form" placeholder="Data de Nascimento" />
            </div>
          </div>

          <div className="div1">
            <div className="teste">
              <p className="p-info"> RG</p>
              <input className="input-form" placeholder="Seu RG" />
            </div>

            <div className="teste">
              <p className="p-info">Cargo</p>
              <input className="input-form" placeholder="Cargo" />
            </div>
          </div>
        </div>

        <div className="exib-card">
          <div className="check-epi">
            <div className="title-epi">
            <p>Quais EPIs o trabalhador usa na atividade?</p>
                    <div className="epi2">
                    <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
                        <p>
                         O Trabalhador não usa EPI{" "}
                        {isChecked ? "marcado" : "desmarcado"}.
                    </p>
                </div>
            </div>
            {/*Trecho componente */}
                <div className="card-atividade">
                    <div className="atv-drop">
                    <p className="teste123">Selecione a atividade</p>
                    <Select 
                            defaultValue="Atividade 1"
                            style={{ width: '100%' }}
                            onChange={handleChange}
                            >
                            <Option value="atividade1">Atividade 1</Option>
                            <Option value="atividade2">Atividade 2</Option>
                            <Option value="atividade3">Atividade 3</Option>
                    </Select>
                    </div>

                    <div className="epi-ca">
                        <div className="epi-select">
                        <p className="p-info">Selecione o EPI:</p>
                        <Select
                            defaultValue="Selecione"
                            style={{ width: 200 }}
                            >
                            <Option value="epi1">Calçado de segurança</Option>
                            <Option value="epi2">Capacete obra</Option>
                            <Option value="epi3">óculos protetor</Option>
                        </Select>
                        </div>

                        <div className="epi-input">
                            <p className="p-info">Informe o número do CA:</p>
                            <input className="input-form" placeholder="Seu CA" />
                        </div>

                        <button className="btn-epi">
                            Adicionar EPI
                        </button>
                    </div>
                </div>
            {/*Fim trecho componente */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
