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

import {
  Form,
  Input,
  Label,
  GroupInput,
  Select,
  CheckBox,
} from "../../../styles/admin/index";

export default function Home() {
  const handlePreRegister = () => {
    showModal({
      title: "Pré-Cadastro",
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
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    hideModal()
    alertDialog({
      type: 'Alert',
      title: 'Prontinho!',
      message: 'Aguarde nosso contato!'
    })
  };

  return (
    <>
    <TextModal>Se inscreva sem compromisso e garanta uma sessão fotográfica + 15% de desconto caso deseje fechar seu pacote de marketing digital após receber seu orçamento, as vagas são limitadas!</TextModal>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <GroupInput>
        <Label>Nome:</Label>
        <Input type="text" height="38px" {...register("name")} />
      </GroupInput>
      <GroupInput>
        <Label>Telefone:</Label>
        <Input type="text" height="38px" {...register("name")} />
      </GroupInput>
      <GroupInput>
        <Label>Email:</Label>
        <Input type="text" height="38px" {...register("name")} />
      </GroupInput>
      <InformationTextModal>*Válido para os 10 primeiros clientes que fecharem contrato com a agência.</InformationTextModal>
      <ButtonModal>Enviar</ButtonModal>
    </Form>
    </>
  );
}
