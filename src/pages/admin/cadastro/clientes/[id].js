import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import api from "../../../../services/api";
import withAuth from "../../../../utils/withAuth";

import Layout from "../../../../components/Layout";
import { Form, Input, Button, Label, GroupInput } from "../../../../styles/admin";

const Cliente = () => {
  const router = useRouter();
  const [title, setTitle] = useState("")

  const { id } = router.query;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!id) return;
    if (id === 'novo') return;

    const handle = async () => {
      const { data } = await api.get(`/customer/${id}`);

      // Title
      setTitle(data.name)

      // Preenche valores
      Object.keys(data).forEach((item) => {
        setValue(item, data[item]);
      });
    };
    handle();
  }, [id]);

  const onSubmit = async (data) => {
    let response
    if (id === 'novo')
      response = await api.post(`/customer`, data);
    else {
      response = await api.put(`/customer/${id}`, data);
    }
    router.push('/admin/cadastro/clientes')
  };

  return (
    <Layout title={`Cliente: ${title}`}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {errors.name && <span>This field is required</span>}
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
        <Button type="submit" widthDesktop="240px">Salvar</Button>
      </Form>
    </Layout>
  );
};

export default withAuth(Cliente);
