import Link from "next/link";
import { useEffect, useState } from 'react'

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
  InformationTextModal
} from "./style";

import { Button as ButtonModal } from "../../../styles/admin/index";
import { Wrapper } from "../../Helpers/style";
import { showModal, hideModal } from "../../Helpers/Modal";
import { alertDialog } from "../../Helpers/Alert";
import { useForm } from "react-hook-form";
import api from "../../../services/api";
import { isMobile, isAndroid } from 'react-device-detect'
import Tilt from 'react-parallax-tilt';

import {
  Form,
  Input,
  Label,
  GroupInput,
  Error
} from "../../../styles/admin/index";

export default function Home() {
  const [androidBrowser, setAndroidBrowser] = useState(true)

  const handlePreRegister = () => {
    showModal({
      title: "Pré-cadastro",
      component: <Modal />,
      maxWidth: "480px",
    });
  };

  useEffect(() => {
    setAndroidBrowser(isAndroid)
  },[isAndroid])

  return (
    <Wrapper>
      <Grid isAndroid={androidBrowser}>
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
          Faça aqui seu pré-cadastro {isMobile && <br/>} para o lançamento!
        </Button>

        <Footer className="fontSizeSecondary">
          Agência especializada {isMobile && <br/>} em profissionais da saúde
        </Footer>
      </Grid>
      <Background />
      <Lines>
        <Tilt tiltEnable={!isMobile} perspective={1000} gyroscope={true} trackOnWindow={true} transitionSpeed={1000}/>
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
    } catch (error) {      
    }
    hideModal()
    alertDialog({
      type: 'Alert',
      title: 'Prontinho!',
      message: 'Aguarde nosso contato =)'
    })
  };

  return (
    <>
    <TextModal>Se inscreva sem compromisso e <b>ganhe uma sessão fotográfica + 10% de desconto</b>, caso queira adquirir nossos serviços de marketing digital após o envio do orçamento. As vagas são limitadas e você precisa aproveitar essa oportunidade!</TextModal>
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <GroupInput>
        <Label>Nome:</Label>
        <Input height="38px" {...register("name", { required: true })} />
        {errors.name && <Error secondary>Por favor preencha o Nome.</Error>}
      </GroupInput>
      <GroupInput>
        <Label>Whatsapp:</Label>
        <Input height="38px" {...register("whatsapp", { required: true })} />
        {errors.whatsapp && <Error secondary>Por favor preencha o Whatsapp.</Error>}
      </GroupInput>
      <GroupInput>
        <Label>Email:</Label>
        <Input height="38px" {...register("email")} />
      </GroupInput>
      <InformationTextModal>*Promoção válida até que as vagas sejam preenchidas ou até 08/11/2021.</InformationTextModal>
      <ButtonModal>Enviar</ButtonModal>
    </Form>
    </>
  );
}
