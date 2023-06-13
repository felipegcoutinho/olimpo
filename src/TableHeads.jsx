import React, {useContext} from "react";
import style from "./css/App.module.css";
import {AdminContext} from "./App";

export default function AP_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead class="text-xs text-white text-center uppercase bg-slate-900 h-10">
      <th>Modelo</th>
      <th>Modulação</th>
      <th>Cobertura</th>
      <th>Raio</th>
      <th>Usuários simultâneos</th>
      <th>Datarate Máx. 2G</th>
      <th>Datarate Máx. 5G</th>
      <th>Qtde Portas</th>
      <th>Tipo PoE</th>
      <th>Tensão</th>
      <th>ConnectFi</th>
      <th>Handover</th>
      <th>WiseFi</th>
      <th>Potência TX 2G</th>
      <th>Potência TX 5G</th>
      <th>Garantia</th>
      <th>Página</th>
      {admin && <th>Ações</th>}
    </thead>
  );
}

export function Radio_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead class="text-xs text-white text-center uppercase bg-slate-900 h-10">
      <tr id={style.RADIO}>
        <th>Modelo</th>
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
        {admin && <th>Ações</th>}
      </tr>
    </thead>
  );
}

export function Roteador_Thead() {
  const {admin} = useContext(AdminContext);
  return (
    <thead>
      <tr id={style.ROTEADOR}>
        <th>Modelo</th>
        <th>Modulação</th>
        <th>Cobertura</th>
        <th>Raio</th>
        <th>Usuários Máximos</th>
        <th>Plano Recomendado</th>
        <th>Qtde Portas</th>
        <th>Datarate Máx. 2G</th>
        <th>Datarate Máx. 5G</th>
        <th>Tensão</th>
        <th>IPV6</th>
        <th>Repetidor</th>
        <th>Roteador AP</th>
        <th>Cliente Wireless</th>
        <th>Modo AP</th>
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
    <thead>
      <tr id={style.SWITCH}>
        <th>Modelo</th>
        <th>Modulação</th>
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
    <thead>
      <tr id={style.CONVERSOR}>
        <th>Modelo</th>
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
    <thead>
      <tr id={style.GBIC}>
        <th>Modelo</th>
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
    <thead>
      <tr id={style.ONU}>
        <th>Modelo</th>
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
