import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import api from "../../../../services/api";
import withAuth from "../../../../utils/withAuth";

import Layout from "../../../../components/Layout";
import { alertDialog } from "../../../../components/Helpers/Alert";
import {
  Form,
  Input,
  Button,
  Label,
  GroupInput,
  GroupButtons,
} from "../../../../styles/admin/index";

const Cliente = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  const { id } = router.query;
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!id) return;
    if (id === "novo") return;

    const handle = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/pre-registration/${id}`);

        // Title
        setTitle(data.name);

        // Preenche valores
        Object.keys(data).forEach((item) => {
          setValue(item, data[item]);
        });
      } catch (error) {
        console.log(error);
        alert("Erro, por favor tente novamente");
      }
      setIsLoading(false);
    };
    handle();
  }, [id]);


  const handleOnDelete = () => {
    alertDialog({
      type: "Confirm",
      title: `Deseja excluir cliente?`,
      message: `Não será possivel reverter.`,
      confirmAction: async () => {
        try {
          await api.delete(`/pre-registration/${id}`);
          router.replace("/admin/cadastro/pre-cadastro");
        } catch (error) {
          alertDialog({
            type: "Alert",
            title: "Ops... Algo deu errado.",
            message: error.response.data.message,
          });
        }
      },
    });
  };

  return (
    <Layout title={`Pré-cadastro: ${title}`} loading={isLoading}>
      <Form>
        <GroupInput labelSize="100px">
          <Label>Nome:</Label>
          <Input {...register("name")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Whatsapp:</Label>
          <Input {...register("whatsapp")} />
        </GroupInput>    
        <GroupInput labelSize="100px">
          <Label>Email:</Label>
          <Input {...register("email")} />
        </GroupInput>    
        <GroupButtons gap="12px">
          <Button
            type="button"
            widthDesktop="200px"
            onClick={() => handleOnDelete()}
            danger
            disabled={id === "novo"}
          >
            Excluir
          </Button>
        </GroupButtons>
      </Form>
    </Layout>
  );
};

export default withAuth(Cliente);