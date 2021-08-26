import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { Wrapper, Box, Button, Form, Input, Label } from "../../styles/admin";
import api from "../../services/api";

import { login } from '../../services/auth'

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post(`/login`, data);      
      login(response.data)
      router.replace("/admin");
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <Wrapper>
      <Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Usuário</Label>
          <Input type="text"  {...register("email")} />
          <Label>Senha</Label>
          <Input type="password"  {...register("password")} />
          <Button>Login</Button>
        </Form>
      </Box>
    </Wrapper>
  );
};

export default Login;
