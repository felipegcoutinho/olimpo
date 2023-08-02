import { app, db } from "./firebase";
import { getDatabase, get, set, ref, push, remove } from "firebase/database";
import Swal from "sweetalert2";

export function CrudFirebase() {
  /* Buscar Produto */
  const fetchDevices = async (path, setDevices) => {
    const db = getDatabase(app);
    const apRef = ref(db, path);
    const snapshot = await get(apRef);
    const data = [];
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      data.push({
        id: childSnapshot.key,
        ...childData,
      });
    });
    setDevices(data);
  };

  /* Adicionar Produto */
  const addDevices = async (path, fetchDevices, closeModal, setUpdatedProduct, updatedProduct) => {
    const apRef = ref(db, path);
    const newAPRef = push(apRef);
    await set(newAPRef, updatedProduct);
    Swal.fire({
      title: "Adicionado!",
      confirmButtonColor: "#006e39",
    });
    setUpdatedProduct({});
    fetchDevices();
    closeModal();
  };

  /* Deletar Produto */
  const deleteDevices = async (id, path) => {
    const db = getDatabase(app);
    const apRef = ref(db, `${path}/${id}`);
    Swal.fire({
      title: "Você tem certeza?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006e39",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar",
    }).then((result) => {
      if (result.isConfirmed) {
        remove(apRef);
        Swal.fire("Equipamento deletado!");
        window.location.reload();
      }
    });
  };

  /* Atualizar  Produto */
  const updateDevices = async (path, setUpdatedProduct, updatedProduct, closeModal) => {
    const apRef = ref(db, `${path}/${updatedProduct.id}`);
    await set(apRef, updatedProduct);
    setUpdatedProduct({});
    Swal.fire({
      title: "Atualizado!",
      confirmButtonColor: "#006e39",
    });
    closeModal();
  };

  return { fetchDevices, addDevices, deleteDevices, updateDevices };
}

export default CrudFirebase;
