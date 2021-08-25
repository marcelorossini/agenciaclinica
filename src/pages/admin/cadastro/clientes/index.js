import { useRouter } from 'next/router'
import DataTable from 'react-data-table-component';

const columns = [
  {
      name: 'Title',
      selector: row => row.name,
  },
  {
      name: 'Year',
      selector: row => row.year,
  },
];

const data = [
  {
      id: 1,
      name: 'Beetlejuice',
      year: '1988',
  },
  {
      id: 2,
      name: 'Ghostbusters',
      year: '1984',
  },
]

const Clientes = () => {
  const router = useRouter()
  
  const handleRowClick = ({ id }) => {
    router.push(`/admin/cadastro/clientes/${id}`)
  }

  return <>
   <DataTable
            columns={columns}
            data={data}
            onRowClicked={data => handleRowClick(data)}
        />
  </>;
};

export default Clientes;
