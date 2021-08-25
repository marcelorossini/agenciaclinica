import Link from "next/link";
import { Wrapper, Box, Button } from "../../styles/admin";

const Admin = () => {
  return (
    <Wrapper>
        <Box>
            <Link href="/admin/cadastro/clientes">Clientes</Link>
            <Link href="/admin/logout">Sair</Link>
        </Box>
    </Wrapper>
  );
};

export default Admin;
