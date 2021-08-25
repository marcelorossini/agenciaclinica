import { useEffect } from 'react';
import { useRouter } from 'next/router'

const Logout = () => {
  const router = useRouter()

  useEffect(() => {
      router.push('/')
  },[])

  return <></>;
};

export default Logout;
