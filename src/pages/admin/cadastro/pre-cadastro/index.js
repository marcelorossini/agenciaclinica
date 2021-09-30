import { useState, useEffect } from "react";
import Link from "next/link";
import api from "../../../../services/api";
import withAuth from "../../../../utils/withAuth";

import Layout from "../../../../components/Layout";
import Datatable from "../../../../components/Helpers/Datatable";
import { Button } from "../../../../styles/admin/index";

const PreCadastro = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handle = async () => {
      setIsLoading(true);
      const response = await api.get("/pre-registration");
      setData(response.data);
      setIsLoading(false);
    };
    handle();
  }, []);

  const columns = [
    {
      name: "Nome",
      selector: (row) => row.name,
    },
    {
      name: "Whatsapp",
      selector: (row) => row.whatsapp,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];

  return (
    <Layout title="Pré-cadastro" loading={isLoading}>
      <Datatable columns={columns} data={data} />
    </Layout>
  );
};

export default withAuth(PreCadastro);
