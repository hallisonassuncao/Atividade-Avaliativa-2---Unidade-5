import Telefone from "./Telefone.mjs";
import Endereco from "./Endereco.mjs";

export default class Pessoa {
  #nome;
  #email;
  #endereco;
  #telefones = [];
  #data; // <<< CAMPO PRIVADO DA DATA

  setNome(nome) {
    if (nome) {
      this.#nome = nome;
      return true;
    }
    return false;
  }

  getNome() {
    return this.#nome;
  }

  setEmail(email) {
    if (email) {
      this.#email = email;
      return true;
    }
    return false;
  }

  getEmail() {
    return this.#email;
  }

  setEndereco(endereco) {
    if (endereco instanceof Endereco) {
      this.#endereco = endereco;
      endereco.addPessoa?.(this);
      return true;
    }
    return false;
  }

  getEndereco() {
    return this.#endereco;
  }

  addTelefone(telefone) {
    if (telefone instanceof Telefone) {
      this.#telefones.push(telefone);
      telefone.addPessoa?.(this);
      return true;
    }
    return false;
  }

  getTelefones() {
    return this.#telefones;
  }

  // ============================
  //   >>> MANIPULAÇÃO DA DATA <<
  // ============================

  setData(data) {
    if (data) {
      this.#data = data; // aceita string ou objeto dayjs
      return true;
    }
    return false;
  }

  getData() {
    return this.#data;
  }
}
