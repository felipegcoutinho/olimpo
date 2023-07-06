import React from "react";

function InfoModal() {
  return (
    <div className="bg-orange-100 rounded-md text-orange-600 text-base p-2 leading-relaxed my-2">
      <p>
        Caso o equipamento <strong>não possua</strong> a função, preencha o campo com "-".
      </p>
      <p>
        Se a informação <strong>não tiver sido encontrada</strong>, preencha o campo com "N/A".
      </p>
    </div>
  );
}

export default InfoModal;
