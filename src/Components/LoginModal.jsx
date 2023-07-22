import { AdminContext } from "../App";
import { auth } from "../database/firebase";
import OlimpoTextInput from "../ui/OlimpoTextInput";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Modal from "react-modal";
import Swal from "sweetalert2";

function LoginModal() {
  const {
    modalIsOpen,
    closeModal,
    setAdmin,
    admin,
    email,
    setEmail,
  } = useContext(AdminContext);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signInWithEmailAndPassword, user, , error] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(email, password)
      .then(() => {
        setAdmin(!admin);
        Swal.fire({
          title: "Logado",
          confirmButtonColor: "#006e39",
        });
        closeModal();
      })
  }

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Erro ao fazer login, Verique email e senha.",
        confirmButtonColor: "#006e39",
      });
    }
  }, [error]);

  const loginForm = (
    <form className="flex flex-col gap-2">
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
        <Button
          className="w-full bg-itbs-default hover:bg-itbs-hover dark:bg-itbs-default dark:hover:bg-itbs-hover"
          onClick={handleSignIn}
          disabled={loading}
        >
          {loading ? "Acessando..." : "Entrar"}
        </Button>
        <Button className="w-full" color="light" onClick={closeModal}>
          Cancelar
        </Button>
      </div>
    </form>
  );

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="bg-white dark:bg-itbs-modern-200 rounded-lg h-max inset-1/2 outline-none overflow-auto p-6 absolute -translate-x-1/2 -translate-y-1/2 w-1/3"
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0 backdrop-blur-sm"
    >
      <div className="text-4xl">
        <h1 className="dark:text-white">Login</h1>
      </div>

      {admin ? (
        <div className="mt-2">
          <p className="dark:text-white">Logado como <strong>{email}</strong></p>
        </div>
      ) : (
        <div className="my-4">{loginForm}</div>
      )}
    </Modal>
  );
}

export default LoginModal;
