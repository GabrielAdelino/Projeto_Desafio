import { Button, Checkbox, Form, Input, Radio, Select, Switch, Upload } from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { criarUser, listarUser, Usuario } from "@/services/api";

const Card2: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [epis, setEpis] = useState([{ id: 1 }]); // Estado para armazenar os EPIs
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [atividades, setAtividades] = useState([{ id: 1 }]); // Estado para armazenar as atividades
  const { Option } = Select;
  const [form] = Form.useForm();

  // Funções de controle do formulário
  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const handleAdicionarEpi = () => {
    setEpis([...epis, { id: epis.length + 1 }]);
  };

  const handleExcluirEpi = (id: number) => {
    setEpis(epis.filter((epi) => epi.id !== id));
  };

  const handleAdicionarAtividade = () => {
    setAtividades([...atividades, { id: atividades.length + 1 }]);
  };

  const handleExcluirAtividade = (id: number) => {
    setAtividades(atividades.filter((atividade) => atividade.id !== id));
  };

  const goBack = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const usuariosObtidos = await listarUser();
        setUsuarios(usuariosObtidos);
      } catch (error) {
        console.error("Erro ao obter usuários:", error);
      }
    };
    fetchUsuarios();
  }, []);

  const handleSubmit = async (values: any) => {
    try {
      const novoUsuario = await criarUser(values);
      console.log("Usuário criado:", novoUsuario);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };

  return (
    <div>
      <Form
      className="teste-input"
        form={form}
        initialValues={{ ativo: false }}
        onFinish={handleSubmit}
      >
        <div className="card-formulario2">
          <div className="titulo">
            <ArrowLeftOutlined onClick={goBack} className="back-button" />
            Adicionar Funcionário
          </div>

          <div className="funcionario-ativo">
            <p className="p-funcionario">O trabalhador está ativo ou inativo?</p>
            <Form.Item
              className="activated"
              name="ativo"
              valuePropName="checked"
            >
              <Switch
                checkedChildren="Ativo"
                unCheckedChildren="Inativo"
              />
            </Form.Item>
          </div>

          <div className="info-funcionario">
            <div className="div1">
              <div className="teste">
                <p className="p-info">Nome</p>
                <Form.Item
                  name="nome"
                  className="input-form"
                  rules={[{ required: true, message: "Por favor, insira o nome!" }]}
                >
                  <Input placeholder="Nome" />
                </Form.Item>
              </div>

              <div className="teste">
                <p className="p-info">Sexo</p>
                <Form.Item
                  name="genero"
                  rules={[{ required: true, message: "Por favor, selecione o gênero!" }]}
                >
                  <Radio.Group>
                    <Radio className="select-s" value="female">
                      Feminino
                    </Radio>
                    <Radio className="select-s" value="male">
                      Masculino
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>

            <div className="div1">
              <div className="teste">
                <p className="p-info">CPF</p>
                <Form.Item
                  name="cpf"
                  className="input-form"
                  rules={[{ required: true, message: "Por favor, insira o CPF!" }]}
                >
                  <Input placeholder="CPF" />
                </Form.Item>
              </div>

              <div className="teste">
                <p className="p-info">Data de Nascimento</p>
                <Form.Item
                  name="dataNascimento"
                  className="input-form"
                  rules={[{ required: true, message: "Por favor, insira a data de nascimento!" }]}
                >
                  <Input placeholder="Data de Nascimento" />
                </Form.Item>
              </div>
            </div>

            <div className="div1">
              <div className="teste">
                <p className="p-info">RG</p>
                <Form.Item
                  name="rg"
                  className="input-form"
                  rules={[{ required: true, message: "Por favor, insira o RG!" }]}
                >
                  <Input placeholder="RG" />
                </Form.Item>
              </div>

              <div className="teste">
                <p className="p-info">Cargo</p>
                <Form.Item
                  name="cargo"
                  className="input-form"
                  rules={[{ required: true, message: "Por favor, insira o cargo!" }]}
                >
                  <Input placeholder="Cargo" />
                </Form.Item>
              </div>
            </div>
          </div>

          <div className="exib-card">
            {atividades.map((atividade, index) => (
              <div className="check-epi" key={atividade.id}>
                <div className="title-epi">
                  <p style={{ fontWeight: "bold" }}>Quais EPIs o trabalhador usa na atividade?</p>
                  <div className="epi2">
                    <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
                    <p>O Trabalhador não usa EPI</p>
                  </div>
                </div>

                {!isChecked && (
                  <div className="card-atividade">
                    <div className="atv-drop">
                      <p className="select-ativ">Selecione a atividade</p>
                      <Select
                        defaultValue="Atividade 1"
                        style={{ width: "100%", borderRadius: "10px" }}
                      >
                        <Option value="atividade1">Atividade 1</Option>
                        <Option value="atividade2">Atividade 2</Option>
                        <Option value="atividade3">Atividade 3</Option>
                      </Select>
                    </div>

                    {epis.map((epi, epiIndex) => (
                      <div className="epi-ca" key={epi.id}>
                        <div className="epi-select">
                          <p className="p-info2">Selecione o EPI:</p>
                          <Select
                            defaultValue="Selecione"
                            style={{
                              flex: 1,
                              width: 200,
                              borderRadius: "10px",
                            }}
                          >
                            <Option value="epi1">Calçado de segurança</Option>
                            <Option value="epi2">Capacete obra</Option>
                            <Option value="epi3">Óculos protetor</Option>
                          </Select>
                        </div>
                        <div className="epi-input">
                          <p className="p-info">Informe o número do CA:</p>
                          <Input placeholder="Seu CA" className="input-form2" />
                          {epiIndex === 0 ? (
                            <Button className="btn-epi" onClick={handleAdicionarEpi}>
                              Adicionar EPI
                            </Button>
                          ) : (
                            <Button
                              className="btn-epi"
                              onClick={() => handleExcluirEpi(epi.id)}
                            >
                              Excluir EPI
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}

                    {index === 0 ? (
                      <Button className="btn-add-atv" onClick={handleAdicionarAtividade}>
                        Adicionar outra atividade
                      </Button>
                    ) : (
                      <Button className="btn-add-atv" onClick={() => handleExcluirAtividade(atividade.id)}>
                        Excluir atividade
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="add-document">
            <div className="document-sections">
              <p>Adicione Atestado de Saúde (opcional):</p>
              <div className="add-arquivo">
                <Upload>
                  <Button icon={<UploadOutlined />}>Selecionar arquivo</Button>
                </Upload>
              </div>
            </div>
          </div>
          <div>
            <Button className="btn-salvar" type="primary" htmlType="submit">
              Salvar
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Card2;
