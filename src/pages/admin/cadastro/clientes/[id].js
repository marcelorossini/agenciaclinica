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
  Select,
  CheckBox,
  GroupButtons,
} from "../../../../styles/admin/index";
import { DragTeste } from "../../../../components/Helpers/Uploader";

const Cliente = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [images, setImages] = useState({});

  const { id } = router.query;
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!id) return;
    if (id === "novo") return;

    const handle = async () => {
      const { data } = await api.get(`/customer/${id}`);

      // Title
      setTitle(data.name);

      // Preenche valores
      Object.keys(data).forEach((item) => {
        setValue(item, data[item]);
      });
    };
    handle();
  }, [id]);

  const handleOnSubmit = async (data) => {
    const { profile_image, background_image, ...restOfData } = data;
    let response;
    if (id === "novo") response = await api.post(`/customer`, restOfData);
    else {
      response = await api.put(`/customer/${id}`, restOfData);
    }

    //router.push('/admin/cadastro/clientes')
  };

  const handleOnDelete = () => {
    alertDialog({
      type: "Confirm",
      title: `Deseja excluir cliente?`,
      message: `Não será possivel reverter.`,
      confirmAction: async () => {
        try {
          await api.delete(`/customer/${id}`);
          router.replace("/admin/cadastro/clientes");
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

  const handleVisualize = () => {
    const url = getValues("url");
    window.open(`/clientes/${url}`, "_blank");
  };

  return (
    <Layout title={`Cliente: ${title}`}>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        {errors.name && <span>This field is required</span>}
        <GroupInput labelSize="100px">
          <Label>Empresa:</Label>
          <Select defaultValue="agencia" {...register("company")}>
            <option value="agencia">Agência Clínica</option>
            <option value="plim">Plim Soluções Criativas</option>
          </Select>
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Url:</Label>
          <Input type="text" {...register("url")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Nome:</Label>
          <Input type="text" {...register("name")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Descrição:</Label>
          <Input type="text" {...register("description")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Telefone:</Label>
          <Input type="text" {...register("phone")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Site:</Label>
          <Input type="text" {...register("website")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Endereço:</Label>
          <Input type="text" {...register("address")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Whatsapp:</Label>
          <Input type="text" {...register("whatsapp")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Whatsapp2:</Label>
          <Input type="text" {...register("whatsapp2")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Facebook:</Label>
          <Input type="text" {...register("facebook")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Instagram:</Label>
          <Input type="text" {...register("instagram")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>LinkedIn:</Label>
          <Input type="text" {...register("linkedin")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Youtube:</Label>
          <Input type="text" {...register("youtube")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label htmlFor="profile_image">Foto perfil:</Label>
          <input
            type="file"
            id="profile_image"
            name="profile_image"
            accept="image/png, image/jpeg"
            {...register("profile_image")}
          />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Foto fundo:</Label>
          <DragTeste
            showLoading={true}
            callbackUploadPreview={(data) => setImages(state => ({ ...state, backgroundImage: data}))}>
            <img
              src={images.backgroundImage && images.backgroundImage.url || "https://linktree.com.br/new/uploads/avatars/0d6403b7228353f5265b234b9bff9358.jpg"}
              width="160px"
            />
          </DragTeste>
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Opções:</Label>
          <CheckBox>
            <input type="checkbox" id="show" {...register("show")} />
            <Label htmlFor="show">Exibir na página inicial?</Label>
          </CheckBox>
        </GroupInput>
        <GroupButtons gap="12px">
          <Button type="submit" widthDesktop="200px">
            Salvar
          </Button>
          <Button
            type="button"
            widthDesktop="200px"
            onClick={() => handleOnDelete()}
            danger
            disabled={id === "novo"}
          >
            Excluir
          </Button>
          <Button
            type="button"
            widthDesktop="200px"
            onClick={() => handleVisualize()}
            secondary
            disabled={id === "novo"}
          >
            Visualizar
          </Button>
        </GroupButtons>
      </Form>
    </Layout>
  );
};

export default withAuth(Cliente);
