import "./Contact.css";

import Form from "../../components/Form/Form";

const Contact = () => {
  return (
    <section id="contato" className="section_contact">
      <div className="main-container">
        <h2 className="h2_style">
          <span className="h2_style_span">Contato</span>
          <span className="h2_style_span_sub">
            Fique à vontade para entrar em contato comigo.
          </span>
        </h2>
        <div className="form_principal">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
