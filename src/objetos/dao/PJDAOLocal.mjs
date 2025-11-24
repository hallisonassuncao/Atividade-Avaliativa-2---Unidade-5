import PJ from "../pessoas/PJ.mjs";

export default class PJDAO {
  constructor() {
    this.chave = "pessoasJuridicas";
  }

  toPlain(pj) {
    const ie = pj.getIE();

    return {
      nome: pj.getNome(),
      email: pj.getEmail(),
      cnpj: pj.getCNPJ(),

      endereco: pj.getEndereco()
        ? {
            cep: pj.getEndereco().getCep(),
            logradouro: pj.getEndereco().getLogradouro(),
            bairro: pj.getEndereco().getBairro(),
            cidade: pj.getEndereco().getCidade(),
            uf: pj.getEndereco().getUf(),
            regiao: pj.getEndereco().getRegiao(),
          }
        : null,

      telefones: (pj.getTelefones() || []).map((t) => ({
        ddd: t.getDdd(),
        numero: t.getNumero(),
      })),

      // === Inscrição Estadual (incluindo dataRegistro) ===
      ie: ie
        ? {
            numero: ie.getNumero(),
            estado: ie.getEstado(),
            dataRegistro: ie.getData(), // <<<<<<<<<<<< NOVO
          }
        : null,
    };
  }

  listar() {
    const dados = localStorage.getItem(this.chave);
    if (!dados) return [];

    const lista = JSON.parse(dados);

    // restaura datas como string
    return lista.map((p) => ({
      ...p,
      ie: p.ie
        ? {
            ...p.ie,
            dataRegistro: p.ie.dataRegistro || null,
          }
        : null,
    }));
  }

  salvar(pj) {
    const lista = this.listar();
    const obj = this.toPlain(pj);
    lista.push(obj);
    localStorage.setItem(this.chave, JSON.stringify(lista));
  }

  atualizar(cnpj, novoPJ) {
    const lista = this.listar();
    const idx = lista.findIndex((p) => p.cnpj === cnpj);
    if (idx >= 0) {
      lista[idx] = this.toPlain(novoPJ);
      localStorage.setItem(this.chave, JSON.stringify(lista));
    } else {
      console.warn("PJ não encontrado para atualização:", cnpj);
    }
  }

  excluir(cnpj) {
    const novaLista = this.listar().filter((p) => p.cnpj !== cnpj);
    localStorage.setItem(this.chave, JSON.stringify(novaLista));
  }

  limpar() {
    localStorage.removeItem(this.chave);
  }
}
