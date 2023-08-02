import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import { AdminContext } from "../App";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../database/firebase";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";
import OlimpoTextInput from "../ui/OlimpoInput";

function LoginModal() {
  const { modalIsOpen, closeModal, setAdmin, admin } = useContext(AdminContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    localStorage.setItem("admin", true);
  }

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Erro ao fazer login, Verique email e senha.",
        confirmButtonColor: "#006e39",
      });
    } else if (user) {
      setAdmin(!admin);
      Swal.fire({
        title: "Logado",
        confirmButtonColor: "#006e39",
      });
      closeModal();
    }
  }, [error, user]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="bg-white dark:bg-itbs-modern-200 rounded-lg h-max inset-1/2 outline-none overflow-auto p-6 absolute -translate-x-1/2 -translate-y-1/2 w-1/3"
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0 backdrop-blur-sm"
    >
      <div>
        <form className="flex flex-col gap-2">
          <div className="text-4xl mb-4">
            <h1 className="dark:text-white">Login</h1>
          </div>
          <OlimpoTextInput
            label={"E-mail"}
            type="text"
            name="email"
            id="email"
            placeholder="altair@olimpo.com.br"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <OlimpoTextInput
            label={"Senha"}
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-between mt-4 gap-2">
            <button
              className="w-full bg-itbs-default rounded-md h-10 text-white hover:bg-itbs-hover dark:bg-itbs-default dark:hover:bg-itbs-hover"
              onClick={handleSignIn}
            >
              {loading ? "Acessando..." : "Entrar"}
            </button>
            <Button className="w-full" color="light" onClick={closeModal}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default LoginModal;
