import { useRouter } from "next/router";

import { Container } from './style'

const Datatable = props => {
  const router = useRouter();  

  const handleRowClick = ({ id }) => {
    router.push(`${router.pathname}/${id}`);
  };

  return (
      <Container
        noHeader={true}
        noDataComponent="Nenhum registro"
        onRowClicked={(data) => handleRowClick(data)}
        {...props}        
      />
  );
};

export default Datatable;
