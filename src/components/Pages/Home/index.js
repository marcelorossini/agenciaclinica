import Link from "next/link";

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

import {
  Form,
  Input,
  Label,
  GroupInput
} from "../../../styles/admin/index";

export default function Home() {
  const handlePreRegister = () => {
    showModal({
      title: "Pré-cadastro",
      component: <Modal />,
      maxWidth: "480px",
    });
  };

  return (
    <Wrapper>
      <Grid>
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
          Faça aqui seu pré-cadastro para o lançamento!
        </Button>

        <Footer className="fontSizeSecondary">
          Agência especializada em profissionais da saúde
        </Footer>
      </Grid>
      <Background />
      <Lines />
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
    await api.post(`/pre-registration`, data);    
    hideModal()
    alertDialog({
      type: 'Alert',
      title: 'Prontinho!',
      message: 'Aguarde nosso contato =)'
    })
  };

  return (
    <>
    <TextModal>Se inscreva <b>sem compromisso</b> e garanta uma sessão fotográfica + 15% de desconto, caso deseje fechar seu pacote de marketing digital após receber seu orçamento. Não perca tempo, as vagas são limitadas!</TextModal>
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <GroupInput>
        <Label>Nome:</Label>
        <Input height="38px" {...register("name")} />
      </GroupInput>
      <GroupInput>
        <Label>Whatsapp:</Label>
        <Input height="38px" {...register("whatsapp")} />
      </GroupInput>
      <GroupInput>
        <Label>Email:</Label>
        <Input height="38px" {...register("email")} />
      </GroupInput>
      <InformationTextModal>*Válido para os 10 primeiros clientes que fecharem contrato com a agência.</InformationTextModal>
      <ButtonModal>Enviar</ButtonModal>
    </Form>
    </>
  );
}
