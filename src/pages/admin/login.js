import { useRouter } from "next/router";
import { Wrapper, Box, Button } from "../../styles/admin";

const Login = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.replace("/admin");
  };

  return (
    <Wrapper>
      <Box>
        <input type="text" />
        <input type="text" />

        <Button onClick={() => handleLogin()}>Login</Button>
      </Box>
    </Wrapper>
  );
};

export default Login;
