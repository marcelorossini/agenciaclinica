/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Background,
  Lines,
  Grid,
  Navbar,
  NavbarItem,
  Logo,
  Footer,
  Button,
  TextModal,
  InformationTextModal,
} from "./style";

import { Button as ButtonModal } from "../../../styles/admin/index";
import { Wrapper } from "../../Helpers/style";
import { showModal, hideModal } from "../../Helpers/Modal";
import { alertDialog } from "../../Helpers/Alert";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { isMobile, isAndroid, isChrome } from "react-device-detect";
import Tilt from "react-parallax-tilt";

import {
  Form,
  Input,
  Label,
  GroupInput,
  Error,
} from "../../../styles/admin/index";

export default function Home() {
  const [paddingInHome, setPaddingInHome] = useState(false);
  const router = useRouter();

  const handlePreRegister = () => {
    showModal({
      title: "Pré-cadastro",
      component: <Modal />,
      maxWidth: "480px",
    });
  };

  useEffect(() => {
    if (isAndroid && isChrome) setPaddingInHome(true);
  }, [isAndroid, isChrome]);

  useEffect(() => {
    const { q } = router.query;
    if (q === "pre-cadastro") {
      handlePreRegister();
    }
  }, [router.query]);

  return (
    <Wrapper>
      <Grid paddingHome={paddingInHome}>
        <Navbar className="fontSizePrimary">
          <NavbarItem>
            <Link href="#servicos">serviços</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#clientes">clientes</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#contato">contato</Link>
          </NavbarItem>
        </Navbar>

        <Logo>
          <img src="/assets/logo.svg" alt="logo" />
        </Logo>

        <Button onClick={() => handlePreRegister()}>
          Faça aqui seu pré-cadastro {isMobile && <br />} para o lançamento!
        </Button>

        <Footer>
          <h1 className="fontSizeSecondary">Agência especializada {isMobile && <br/>} em profissionais da saúde</h1>
        </Footer>
      </Grid>
      <Background />
      <Lines>
        <Tilt
          tiltEnable={!isMobile}
          perspective={1000}
          gyroscope={true}
          trackOnWindow={true}
          transitionSpeed={1000}
        />
      </Lines>
    </Wrapper>
  );
}

function Modal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (data) => {
    try {
      await api.post(`/pre-registration`, data);
    } catch (error) {}
    hideModal();
    alertDialog({
      type: "Alert",
      title: "Prontinho!",
      message: "Aguarde nosso contato =)",
    });
  };

  return (
    <>
      <TextModal>
        Se inscreva para receber seu orçamento sem compromisso e ganhe{" "}
        <b>10% de desconto + uma mentoria exclusiva</b>, caso queira turbinar
        suas redes sociais com a gente. As vagas são limitadas, então corre!
      </TextModal>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <GroupInput>
          <Label>Nome:</Label>
          <Input height="38px" {...register("name", { required: true })} />
          {errors.name && <Error secondary>Por favor preencha o Nome.</Error>}
        </GroupInput>
        <GroupInput>
          <Label>Whatsapp:</Label>
          <Input height="38px" {...register("whatsapp", { required: true })} />
          {errors.whatsapp && (
            <Error secondary>Por favor preencha o Whatsapp.</Error>
          )}
        </GroupInput>
        <GroupInput>
          <Label>Email:</Label>
          <Input height="38px" {...register("email")} />
        </GroupInput>
        <InformationTextModal>
          *Promoção válida até 30/10/2021 ou até as vagas se esgotarem.
        </InformationTextModal>
        <ButtonModal>Enviar</ButtonModal>
      </Form>
    </>
  );
}
