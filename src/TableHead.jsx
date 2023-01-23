import React from "react";
import style from "../src/App.module.css";

export function AP() {
  return (
    <thead>
      <tr id={style.AP}>
        <th>Modelo</th>
        <th>Modulação</th>
        <th>Cobertura</th>
        <th>Raio</th>
        <th>Usuários simultâneos</th>
        <th>Datarate Máx. 2G</th>
        <th>Datarate Máx. 5G</th>
        <th>Qtde Portas</th>
        <th>PoE Ativo</th>
        <th>PoE Passivo</th>
        <th>ConnectFi</th>
        <th>Handover</th>
        <th>WiseFi</th>
        <th>Potência de TX 2G</th>
        <th>Potência de TX 5G</th>
        <th>Página</th>
      </tr>
    </thead>
  );
}

export function RADIO() {
  return (
    <thead>
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
        <th>Garantia</th>
        <th>Página</th>
      </tr>
    </thead>
  );
}

export function CONVERSOR() {
  return (
    <thead>
      <tr>
        <th>Modelo</th>
        <th>Conector</th>
        <th>WDM</th>
        <th>Distância</th>
        <th>Modulação</th>
        <th>Fibra</th>
        <th>Potência Sinal Max | Min</th>
        <th>Sensibilidade Max | Min</th>
        <th>Garantia</th>
        <th>Página</th>
      </tr>
    </thead>
  );
}

export function GBIC() {
  return (
    <>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Conector</th>
          <th>Modulo</th>
          <th>WDM</th>
          <th>Distância</th>
          <th>Modulação</th>
          <th>Fibra</th>
          <th>Potência Sinal Max | Min</th>
          <th>Sensibilidade Max | Min</th>
          <th>Garantia</th>
          <th>Página</th>
        </tr>
      </thead>
    </>
  );
}

export function SWITCH() {
  return (
    <>
      <thead>
        <tr>
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
        </tr>
      </thead>
    </>
  );
}

export function ONU() {
  return (
    <>
      <thead>
        <tr id={style.ONU}>
          <th>Modelo</th>
          <th>Modulação</th>
          <th>FXS</th>
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
        </tr>
      </thead>
    </>
  );
}

export function ROTEADOR() {
  return (
    <>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Cobertura</th>
          <th>Raio</th>
          <th>Usuários Máximos</th>
          <th>Plano Recomendado</th>
          <th>Modulação</th>
          <th>Qtde Portas</th>
          <th>Datarate Máx. 2G</th>
          <th>Datarate Máx. 5G</th>
          <th>Ganho da antena</th>
          <th>IPV6</th>
          <th>Repetidor</th>
          <th>Roteador AP</th>
          <th>Cliente Wireless</th>
          <th>Modo AP</th>
          <th>Garantia</th>
          <th>Página</th>
        </tr>
      </thead>
    </>
  );
}
