//import Login from "./components/props/Login.jsx"
//import Login from "./components/state/Login.jsx"
//import Login from "./components/CSS/Login.jsx"
//import Login from "./components/tailwind/Login.jsx"
//import PessoaFisica from "./components/cadastro/PessoaFisica.jsx";
//import PessoaJuridica from "./components/cadastro/PessoaJuridica.jsx";
//import Login from "./components/antd/Login.jsx"
//import PessoaFisica from "./components/cadastro/PessoaFisica.jsx";
//import PessoaFisica from "./components/antd/PessoaFisica.jsx";
//import PessoaFisica from "./components/cadastro/PessoaFisica";
//import PessoaForm from "./components/cadastrapessoa/PessoaForm.jsx"
//import PessoaForm from "./components/cadastrapessoa/PessoaFormOO.jsx"
//import PessoaForm from "./components/cadastrapessoa/PessoaFormOO.jsx"

import React from 'react';

// Rotas
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutesV2.jsx';

// Ant Design — configurações de idioma
import { ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

// DayJS — idioma e formatação de datas
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

export default function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}
