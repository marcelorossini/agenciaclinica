import { useState, useEffect } from "react";
import api from "../../../../services/api";
import withAuth from "../../../../utils/withAuth";

import Layout from "../../../../components/Layout";
import Datatable from "../../../../components/Helpers/Datatable";

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
      selector: (row) => row.name,
    },    
  ];

  return (
    <Layout title="Clientes">
      <Datatable
        columns={columns}
        data={data}
      />
    </Layout>
  );
};

export default withAuth(Clientes);
