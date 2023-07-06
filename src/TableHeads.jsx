import React, {useContext} from "react";
import {AdminContext} from "./App";

export default function AP_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-slate-800 uppercase whitespace-nowrap border border-slate-100 bg-slate-200 text-center">
      <tr>
        <th className="py-6"></th>
        <th className="px-4">Modelo</th>
        <th className="px-2">Modulação</th>
        <th className="px-2">Cobertura</th>
        <th className="px-4">Raio</th>
        <th className="px-2">Usuários Máx.</th>
        <th className="px-4">Datarate Máx. 2G</th>
        <th className="px-4">Datarate Máx. 5G</th>
        <th className="px-4">Qtde Portas</th>
        <th className="px-4">Tensão</th>
        <th className="px-4">Tipo PoE</th>
        <th className="px-4">Handover</th>
        <th className="px-4">Inmaster</th>
        <th className="px-4">Garantia</th>
        <th className="px-4">Página</th>
        {admin && <th className="px-4 py-2">Ações</th>}
      </tr>
    </thead>
  );
}

export function Radio_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-b border-[#E6ECEE] bg-slate-200 text-center">
      <tr>
        <th className="py-6"></th>
        <th className="px-4 text-left">Modelo</th>
        <th>Indicado</th>
        <th>Modulação</th>
        <th>Ganho</th>
        <th>Potência de TX</th>
        <th>Encam. de Pacotes</th>
        <th>Throughput Efetivo</th>
        <th>Throughput Nominal</th>
        <th>Abertura</th>
        <th>Distância Máx</th>
        <th>Wireless</th>
        <th>Alimentação</th>
        <th>Garantia</th>
        <th>Página</th>
        {admin && <th className="px-4">Ações</th>}
      </tr>
    </thead>
  );
}

export function Roteador_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-[#E6ECEE] bg-slate-200 text-center">
      <tr>
        <th className="py-6"></th>
        <th className="text-left px-10">Modelo</th>
        <th className="">Modulação</th>
        <th className="px-4">Cobertura</th>
        <th className="">Raio</th>
        <th className="">Usuários Máx.</th>
        <th className="">Plano Recomendado</th>
        <th className="">Qtde Portas</th>
        <th className="">Datarate Máx. 2G</th>
        <th className="">Datarate Máx. 5G</th>
        <th className="">Tensão</th>
        <th className="">Repetidor</th>
        <th className="">Roteador AP</th>
        <th className="">Cliente Wireless</th>
        <th className="">Modo AP</th>
        <th>Garantia</th>
        <th>Página</th>
        {admin && <th>Ações</th>}
      </tr>
    </thead>
  );
}

export function Switch_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-b border-[#E6ECEE] bg-slate-200 text-center">
      <tr>
        <th className="py-6"></th>
        <th className="text-left px-4">Modelo</th>
        <th className="text-left">Modulação</th>
        <th>Qtde Portas</th>
        <th>Gerenciável</th>
        <th>Alimenta via PoE</th>
        <th>Encam. de Pacotes</th>
        <th>Backplane</th>
        <th>Possui SFP</th>
        <th>PoE Extender</th>
        <th>PoE/Porta</th>
        <th>PoE/Total</th>
        <th>Qos</th>
        <th>Garantia</th>
        <th>Página</th>
        {admin && <th>Ações</th>}
      </tr>
    </thead>
  );
}

export function Conversor_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-[#E6ECEE] bg-slate-200 text-center">
      <tr>
        <th className="py-6"></th>

        <th className="px-4">Modelo</th>
        <th>Modulação</th>
        <th>Conector</th>
        <th>WDM</th>
        <th>Distância</th>
        <th>Tipo da Fibra</th>
        <th>Potência Sinal Max | Min</th>
        <th>Sensibilidade Max | Min</th>
        <th>Comprimento Sinal RX</th>
        <th>Comprimento Sinal TX</th>
        <th>Garantia</th>
        <th>Página</th>
        {admin && <th>Ações</th>}
      </tr>
    </thead>
  );
}

export function Sfp_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-b border-[#E6ECEE] bg-slate-200">
      <tr>
        <th className="py-6"></th>

        <th className="px-4 py-3">Modelo</th>
        <th>Modulação</th>
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
        <th>Página</th>
        {admin && <th>Ações</th>}
      </tr>
    </thead>
  );
}

export function Onu_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead className="text-xs text-gray-800 uppercase whitespace-nowrap border-b border-[#E6ECEE] bg-slate-200">
      <tr>
        <th className="py-6"></th>

        <th className="px-4 py-3">Modelo</th>
        <th>Modulação</th>
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
        <th>Página</th>
        {admin && <th>Ações</th>}
      </tr>
    </thead>
  );
}
