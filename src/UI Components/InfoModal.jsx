import React from "react";

function InfoModal() {
  return (
    <div className="bg-orange-100 rounded-lg text-orange-600 text-sm leading-5 p-3 my-2">
      <h4>Caso o produto não possua a função, preencha o campo com "-".</h4>
      <h4>Se a informação do produto não houver sido encontrada, preencha o campo com "N/A".</h4>
    </div>
  );
}

export default InfoModal;
