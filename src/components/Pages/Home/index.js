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
} from "./style";

import { Button as ButtonModal } from "../../../styles/admin/index";
import { Wrapper } from "../../Helpers/style";
import { showModal } from "../../Helpers/Modal";
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
      maxWidth: "400px",
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
    let response;
    if (id === "novo") response = await api.post(`/customer`, data);
    else {
      response = await api.put(`/customer/${id}`, data);
    }
    router.push("/admin/cadastro/clientes");
  };

  return (
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
      <ButtonModal>Enviar</ButtonModal>
    </Form>
  );
}
