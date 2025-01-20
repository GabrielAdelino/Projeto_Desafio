import { Select } from "antd";

const cardEpi = () => {

    const { Option } = Select;

    return (
        <div className="epi-ca">
                <div className="epi-select">
                  <p className="p-info2">Selecione o EPI:</p>
                  <Select
                    defaultValue="Selecione"
                    style={{ flex: 1, width: 200, borderRadius: "10px", marginBottom: "0px" }}
                  >
                    <Option value="epi1">Calçado de segurança</Option>
                    <Option value="epi2">Capacete obra</Option>
                    <Option value="epi3">óculos protetor</Option>
                  </Select>
                </div>

                <div className="epi-input">
                  <p className="p-info">Informe o número do CA:</p>
                  <input className="input-form2" placeholder=" Seu CA" />

                  <button className="btn-epi">Excluir EPI</button>
                </div>
              </div>
    );
};

export default cardEpi;