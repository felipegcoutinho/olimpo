import React, {useContext} from "react";
import {AdminContext} from "./App";

export default function AP_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-slate-800 uppercase whitespace-nowrap border border-slate-100 bg-slate-200">
      <tr>
        <th className="py-4 text-center">Modelo</th>
        <th>Interface</th>
        <th>Cobertura</th>
        <th className="pr-6">Raio</th>
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
      </tr>
    </thead>
  );
}

export function Radio_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase border-b border-[#E6ECEE] bg-slate-200">
      <tr>
        <th className="py-4 px-4 text-center">Modelo</th>
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
      </tr>
    </thead>
  );
}

export function Switch_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap  border-[#E6ECEE] bg-slate-200">
      <tr>
        <th className="py-4 px-4">Modelo</th>
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
      </tr>
    </thead>
  );
}

export function Roteador_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-[#E6ECEE] bg-slate-200">
      <tr>
        <th className="py-4 px-16">Modelo</th>
        <th>Interface</th>
        <th>Cobertura</th>
        <th className="pr-6">Raio</th>
        <th className="pr-6">
          Usuários <br></br> Máx.
        </th>
        <th>
          Plano <br></br> Recomendado
        </th>
        <th>Qtde Portas</th>
        <th>
          Datarate <br></br>Máx. 2G
        </th>
        <th>
          Datarate <br></br>Máx. 5G
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
        <th>Modo AP</th>
        <th className="text-center">Garantia</th>
        <th className="text-center">Página</th>
        {admin && <th className="text-center">Ações</th>}
      </tr>
    </thead>
  );
}

export function Conversor_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-[#E6ECEE] bg-slate-200 text-center">
      <tr>
        <th className="py-4 px-4">Modelo</th>
        <th>Interface</th>
        <th>Conector</th>
        <th>WDM</th>
        <th>Distância</th>
        <th>Tipo da Fibra</th>
        <th>Potência Sinal Max | Min</th>
        <th>Sensibilidade Max | Min</th>
        <th>Comprimento Sinal RX</th>
        <th>Comprimento Sinal TX</th>
        <th>Garantia</th>
        <th className="text-center">Página</th>
        {admin && <th className="text-center">Ações</th>}
      </tr>
    </thead>
  );
}

export function Sfp_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-b border-[#E6ECEE] bg-slate-200">
      <tr>
        <th className="py-4 px-4">Modelo</th>
        <th>Interface</th>
        <th>Conector</th>
        <th>Tipo do Módulo</th>
        <th>WDM</th>
        <th>Distância</th>
        <th>Fibra</th>
        <th>Potência Sinal Max | Min</th>
        <th>Sensibilidade Max | Min</th>
        <th>Comprimento Sinal RX</th>
        <th>Comprimento Sinal TX</th>
        <th>Garantia</th>
        <th className="text-center">Página</th>
        {admin && <th className="text-center">Ações</th>}
      </tr>
    </thead>
  );
}

export function Onu_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-b border-[#E6ECEE] bg-slate-200">
      <tr>
        <th className="py-4 px-4">Modelo</th>
        <th>Interface</th>
        <th>Qtde FXS</th>
        <th>Qtde RJ45</th>
        <th>Tipo</th>
        <th>Sensibilidade Max | Min</th>
        <th>Cobertura</th>
        <th>Usuários simultâneos</th>
        <th>Datarate Máx. 2G</th>
        <th>Datarate Máx. 5G</th>
        <th>SSID</th>
        <th>TR069</th>
        <th>Customize</th>
        <th>Remotize</th>
        <th>Garantia</th>
        <th className="text-center">Página</th>
        {admin && <th className="text-center">Ações</th>}
      </tr>
    </thead>
  );
}
