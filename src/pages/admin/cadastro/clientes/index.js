import { useState, useEffect } from "react";
import Link from "next/link";
import api from "../../../../services/api";
import withAuth from "../../../../utils/withAuth";

import Layout from "../../../../components/Layout";
import Datatable from "../../../../components/Helpers/Datatable";
import { Button } from "../../../../styles/admin/index";

const Clientes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handle = async () => {
      const response = await api.get("/customer");
      setData(response.data);
    };
    handle();
  }, []);

  const columns = [
    {
      name: "Cliente",
      selector: (row) => row.name,
    },
    {
      name: "Exibe na página inicial?",
      selector: (row) => row.show ? 'Sim' : 'Não',
    },
  ];

  return (
    <Layout title="Clientes">
      <Datatable columns={columns} data={data} />
      <Link href="/admin/cadastro/clientes/novo">
        <Button type="submit" widthDesktop="200px">
          Adicionar
        </Button>
      </Link>
    </Layout>
  );
};

export default withAuth(Clientes);
