import { useState } from "react";
import "./Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || mensagem === "") {
      toast.error("Preencha todos os campos 🤯");
      return;
    }

    const templateParams = {
      from_name: name,
      message: mensagem,
      email: email,
    };

    emailjs
      .send(
        "service_j9m7u8h",
        "template_whq0kvk",
        templateParams,
        "uAYPKVz8WpKz7AzO6"
      )
      .then(
        () => {
          toast.success("Mensagem enviada 👌");
          setName("");
          setEmail("");
          setMensagem("");
        },
        (err) => {
          toast.error("Tente Novamente 🤯");
        }
      );
  };

  return (
    <form className="contact_form" onSubmit={sendMessage}>
      <div className="contact_form_field">
        <label htmlFor="nome" className="contact_form_label">
          Nome
        </label>
        <input
          placeholder="Insira Seu Nome"
          required
          type="text"
          className="contact_form_input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="contact_form_field">
        <label htmlFor="email" className="contact_form_label">
          E-mail
        </label>

        <input
          placeholder="Insira Seu E-mail"
          required
          type="text"
          className="contact_form_input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="contact_form_field">
        <label htmlFor="mensagem" className="contact_form_label">
          Mensagem
        </label>
        <textarea
          placeholder="Insira Sua Mensagem"
          required
          cols="30"
          rows="10"
          type="text"
          className="contact_form_input"
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
        />
      </div>
      <button className="btn btn-medium">Enviar</button>
      <ToastContainer />
    </form>
  );
};

export default Form;
