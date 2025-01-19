import { Button, Checkbox, Form, Radio, Select, Switch, Upload } from "antd";
import {PaperClipOutlined, UploadOutlined} from '@ant-design/icons';
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
              <input className="input-form" placeholder=" Nome" />
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
              <input className="input-form" placeholder=" CPF" />
            </div>

            <div className="teste">
              <p className="p-info"> Data de Nascimento</p>
              <input className="input-form" placeholder=" Data de Nascimento" />
            </div>
          </div>

          <div className="div1">
            <div className="teste">
              <p className="p-info"> RG</p>
              <input className="input-form" placeholder=" Seu RG" />
            </div>

            <div className="teste">
              <p className="p-info">Cargo</p>
              <input className="input-form" placeholder=" Cargo" />
            </div>
          </div>
        </div>

        <div className="exib-card">
          <div className="check-epi">
            <div className="title-epi">
            <p style={{ fontWeight: "bold" }}>Quais EPIs o trabalhador usa na atividade?</p>
                    <div className="epi2">
                    <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
                        <p>
                         O Trabalhador não usa EPI{" "}
                        
                    </p>
                </div>
            </div>
            {/*Trecho componente */}
                <div className="card-atividade">
                    <div className="atv-drop">
                    <p className="select-ativ">Selecione a atividade</p>
                    <Select 
                            defaultValue="Atividade 1"
                            style={{ width: '100%', borderRadius: "10px", }}
                            onChange={handleChange}
                            >
                            <Option value="atividade1">Atividade 1</Option>
                            <Option value="atividade2">Atividade 2</Option>
                            <Option value="atividade3">Atividade 3</Option>
                    </Select>
                    </div>
                    {/*Início outro componente EPI Mnater este e so gerar mais um*/}
                    <div className="epi-ca">
                        <div className="epi-select">
                        <p className="p-info2">Selecione o EPI:</p>
                        <Select
                            defaultValue="Selecione"
                            style={{ flex: 1, width: 200, borderRadius: "10px", marginBottom: "0px",}}
                            >
                            <Option value="epi1">Calçado de segurança</Option>
                            <Option value="epi2">Capacete obra</Option>
                            <Option value="epi3">óculos protetor</Option>
                        </Select>
                        </div>

                        <div className="epi-input">
                            <p className="p-info">Informe o número do CA:</p>
                            <input className="input-form2" placeholder=" Seu CA" />

                            <button className="btn-epi">
                            Adicionar EPI
                          </button>
                        </div>

                        
                    </div>
                    {/*Fim componente EPI*/}
                </div>
            {/*Fim trecho componente */}

            <button className="btn-add-atv">Adicionar outra atividade</button>
          </div>
        </div>

        <div className="add-document">
            <div className="document-sections">
                <p>Adicone Atestado de Saúde (opcional):</p>
                <div className="add-arquivo">
                <Upload >
                      <Button icon={<UploadOutlined/>}>
                          Selecionar arquivo
                      </Button>
                </Upload>
                </div>
            </div>
        </div>
          <div>
          <button className="btn-salvar" /*onClick={form.submit} */>
              Salvar
          </button>
          </div>
      </div>
    </div>
  );
};

export default Card2;
