import {AdminContext} from "./App";
import React, {useContext} from "react";

function Header({children}) {
  return (
    <thead className="text-xs text-slate-700 bg-slate-200 h-14 dark:bg-slate-800 dark:text-slate-200">
      <tr>{children}</tr>
    </thead>
  );
}

function TableHead() {
  const {admin} = useContext(AdminContext);

  const AP_Header = (
    <Header>
      <th className="text-center">Modelo</th>
      <th className="pr-2">Interface</th>
      <th>
        Cobertura <br></br> Aproximada
      </th>
      <th>
        Raio <br></br> Aproximado
      </th>
      <th>
        Usuários <br></br> Máx.
      </th>
      <th className="pr-2">
        Datarate <br></br>Máx. 2G
      </th>
      <th className="pr-2">
        Datarate <br></br>Máx. 5G
      </th>
      <th>Padrão</th>
      <th>Qtde Portas</th>
      <th>Tensão</th>
      <th>Tipo PoE</th>
      <th>Handover</th>
      <th>Inmaster</th>
      <th>Garantia</th>
      <th className="text-center">Página</th>
      {admin && <th className="text-center">Ações</th>}
    </Header>
  );

  const Radio_Header = (
    <Header>
      <th className="text-center">Modelo</th>
      <th>Interface</th>
      <th>Indicado</th>
      <th>
        Ganho de <br></br> Antena
      </th>
      <th>
        Potência <br></br>de Transmissão
      </th>
      <th>
        Taxa de Encam. <br></br>de Pacotes
      </th>
      <th>
        Throughput <br></br> Efetivo | Nominal
      </th>
      <th>Abertura</th>
      <th>
        Distância Máx. <br></br> Recomendada
      </th>
      <th>Wireless</th>
      <th>Alimentação</th>
      <th>Garantia</th>
      <th className="text-center">Página</th>
      {admin && <th className="text-center">Ações</th>}
    </Header>
  );

  const Roteador_Header = (
    <Header>
      <th className="text-center">Modelo</th>
      <th>Interface</th>
      <th>Cobertura</th>
      <th className="pr-6">Raio</th>
      <th className="pr-6">
        Usuários <br></br> Máx.
      </th>
      <th>
        Plano <br></br> Recomendado
      </th>
      <th>
        Datarate <br></br> Máx. 2G
      </th>
      <th>
        Datarate <br></br> Máx. 5G
      </th>
      <th>Alimentação</th>
      <th>
        Modo <br></br> Repetidor
      </th>
      <th>
        Modo <br></br> Roteador AP
      </th>
      <th>
        Cliente <br></br> Wireless
      </th>
      <th>
        Modo <br></br> AP
      </th>
      <th className="text-center">Garantia</th>
      <th className="text-center">Página</th>
      {admin && <th className="text-center">Ações</th>}
    </Header>
  );

  const Switch_Header = (
    <Header>
      <th className="text-center">Modelo</th>
      <th className="text-left">Interface</th>
      <th>Qtde Portas</th>
      <th>Gerenciável</th>
      <th>
        Alimenta via <br></br> PoE Ativo
      </th>
      <th>
        Taxa de Encam. <br></br> de Pacotes
      </th>
      <th>Backplane</th>
      <th>Possui SFP</th>
      <th>PoE Extender</th>
      <th>PoE Por Porta</th>
      <th>PoE Total</th>
      <th>Qos</th>
      <th className="text-center">Garantia</th>
      <th className="text-center">Página</th>
      {admin && <th className="text-center">Ações</th>}
    </Header>
  );

  const Conversor_Header = (
    <Header>
      <th className="text-center">Modelo</th>
      <th>Interface</th>
      <th className="px-2 underline">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.intelbras.com/pt-br/redes/passivos-opticos/conector-de-campo">
          Conector
        </a>
      </th>
      <th className="px-4">WDM</th>
      <th>
        Distância <br></br> Recomendada
      </th>
      <th>
        Fibra <br></br> Recomendada
      </th>
      <th>
        Potência Tx <br></br> Max | Min
      </th>
      <th>
        Sensibilidade <br></br> Max | Min
      </th>
      <th>
        Comprimento <br></br> Sinal RX
      </th>
      <th>
        Comprimento <br></br> Sinal TX
      </th>
      <th>Garantia</th>
      <th className="text-center">Página</th>
      {admin && <th className="text-center">Ações</th>}
    </Header>
  );

  const Sfp_Header = (
    <Header>
      <th className="text-center">Modelo</th>
      <th className="px-2">Interface</th>
      <th>Conector</th>
      <th className="px-4">WDM</th>
      <th>
        Padrão <br></br> do Módulo
      </th>
      <th>
        Distância <br></br> Recomendada
      </th>
      <th>
        Fibra <br></br> Recomendada
      </th>
      <th>
        Potência Tx <br></br> Max | Min
      </th>
      <th>
        Sensibilidade <br></br> Max | Min
      </th>
      <th>
        Comprimento <br></br> Sinal RX
      </th>
      <th>
        Comprimento <br></br> Sinal TX
      </th>
      <th>Garantia</th>
      <th className="text-center">Página</th>
      {admin && <th className="text-center">Ações</th>}
    </Header>
  );

  const Onu_Header = (
    <Header>
      <th className="text-center">Modelo</th>
      <th>Interface</th>
      <th>Qtde FXS</th>
      <th>Qtde RJ45</th>
      <th>
        Sensibilidade <br></br> Max | Min
      </th>
      <th>Cobertura</th>
      <th>
        Usuários <br></br> Máx.
      </th>
      <th>
        Datarate <br></br> Máx. 2G
      </th>
      <th>
        Datarate <br></br> Máx. 5G
      </th>
      <th className="px-4">SSID</th>
      <th className="px-4">TR069</th>
      <th>Customize</th>
      <th>Remotize</th>
      <th>Garantia</th>
      <th className="text-center">Página</th>
      {admin && <th className="text-center">Ações</th>}
    </Header>
  );

  return {
    AP_Header,
    Radio_Header,
    Roteador_Header,
    Switch_Header,
    Conversor_Header,
    Sfp_Header,
    Onu_Header,
  };
}

export default TableHead;
