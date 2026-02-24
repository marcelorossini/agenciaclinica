import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import {
  Button,
  Form,
  Input,
  Error,
  GroupInput,
} from "../../styles/admin/index";
import { Wrapper, Box, Logo } from "../../styles/admin/login";

import api from "../../services/api";
import withAuth from "../../utils/withAuth";

import { login } from "../../services/auth";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setError("");
    try {
      const response = await api.post(`/login`, data);
      login(response.data);
      router.replace("/admin");
    } catch (err) {
      if (!err.response) {
        setError(
          "Não foi possível conectar ao servidor. Verifique se o backend está rodando em " +
            (process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000")
        );
        return;
      }
      setError(err.response?.data?.message || err.message || "Erro ao fazer login.");
    }
  };

  return (
    <Wrapper>
      <Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo src="/assets/logo.svg" alt="logo" />
          <GroupInput>
            <Input
              height="50px"
              type="text"
              placeholder="Usuário"
              alternative
              {...register("email")}
            />
          </GroupInput>
          <GroupInput>
            <Input
              height="50px"
              type="password"
              placeholder="Senha"
              alternative
              {...register("password")}
            />
          </GroupInput>
          <Button>Login</Button>
          <Error>{error}</Error>
        </Form>
      </Box>
    </Wrapper>
  );
};

export default withAuth(Login, false);
