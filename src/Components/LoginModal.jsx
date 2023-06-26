import React, {useEffect, useState} from "react";
import {useContext} from "react";
import Modal from "react-modal";
import {AdminContext} from "../App";
import style from "../css/App.module.css";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "../database/firebase";
import Swal from "sweetalert2";
import {Button, TextInput} from "flowbite-react";

function LoginModal() {
  const {modalIsOpen, closeModal, setAdmin, admin} = useContext(AdminContext);
  const [email, setEmail] = useState("");
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
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modalLogin} overlayClassName={style.modal_overlay}>
      <div className={style.h1Login}>
        <h1>Login</h1>
      </div>

      <div className={style.formContainer}>
        <form className={style.formContainer}>
          {admin ? (
            <div className={style.h1Login}>
              <h4>Logado como {email}</h4>
            </div>
          ) : (
            <>
              <label htmlFor="email">E-mail</label>
              <TextInput
                type="text"
                name="email"
                id="email"
                placeholder="altair@olimpo.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Senha</label>
              <TextInput
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button color="success" className={style.btnLogar} onClick={handleSignIn}>
                {loading ? "Entrando..." : "Entrar"}
              </Button>
              <Button color="light" className={style.btn_addUpdCancel} onClick={closeModal}>
                Cancelar
              </Button>
            </>
          )}
        </form>
      </div>
    </Modal>
  );
}

export default LoginModal;
