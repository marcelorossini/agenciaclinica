import { useRouter } from 'next/router'

const Cliente = () => {
  const router = useRouter()
  const { id } = router.query

  return <>
    {id}
  </>;
};

export default Cliente;
