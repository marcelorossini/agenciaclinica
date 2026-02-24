import { useEffect } from "react";
import { useRouter } from "next/router";
import { token } from "../services/auth";

const withAuth = (WrapperComponent, logged = true) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const tokenData = token();

      if (!logged) {
        if (tokenData) router.replace("/admin");
        return;
      }

      if (tokenData) {
        return;
      }

      router.replace("/admin/login");
    }, []);
    return <WrapperComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
