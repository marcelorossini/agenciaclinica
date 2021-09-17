import { useState, useEffect } from "react";
import Link from "next/link";
import api from "../../../../services/api";
import withAuth from "../../../../utils/withAuth";

import Layout from "../../../../components/Layout";
import Datatable from "../../../../components/Helpers/Datatable";
import { Button } from "../../../../styles/admin/index";

const PreCadastro = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handle = async () => {
      const response = await api.get("/pre-registration");
      setData(response.data);
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
    <Layout title="Pre-cadastro">
      <Datatable columns={columns} data={data} />
    </Layout>
  );
};

export default withAuth(PreCadastro);
