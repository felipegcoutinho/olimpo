import {AdminContext} from "../App";
import {auth} from "../database/firebase";
import OlimpoTextInput from "../ui/OlimpoTextInput";
import {Button} from "flowbite-react";
import React, {useEffect, useState} from "react";
import {useContext} from "react";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import Modal from "react-modal";
import Swal from "sweetalert2";

function LoginModal() {
  const {modalIsOpen, closeModal, setAdmin, admin, email, setEmail} = useContext(AdminContext);
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Erro ao fazer login, Verique email e senha.",
        confirmButtonColor: "#006e39",
      });
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      setAdmin(!admin);
      Swal.fire({
        title: "Logado",
        confirmButtonColor: "#006e39",
      });
      closeModal();
    }
  }, [user]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="bg-white dark:bg-itbs-modern-200 rounded-lg h-5/6 inset-1/2 outline-none overflow-auto p-4 pb-1 absolute -translate-x-1/2 -translate-y-1/2 w-1/3 "
      overlayClassName="bg-zinc-400 bg-opacity-75 fixed inset-0 backdrop-blur-sm">
      <div className="text-4xl">
        <h1>Login</h1>
      </div>

      <form className="flex flex-col">
        {admin ? (
          <div>
            <h4>Logado como {email}</h4>
          </div>
        ) : (
          <>
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
            <Button color="success" onClick={handleSignIn}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
            <Button color="light" onClick={closeModal}>
              Cancelar
            </Button>
          </>
        )}
      </form>
    </Modal>
  );
}

export default LoginModal;
