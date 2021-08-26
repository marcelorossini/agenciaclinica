import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";
import api from "../../../../services/api";

const Clientes = () => {
  const router = useRouter();
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
  ];

  const handleRowClick = ({ id }) => {
    router.push(`/admin/cadastro/clientes/${id}`);
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        onRowClicked={(data) => handleRowClick(data)}
      />
    </>
  );
};

export default Clientes;
