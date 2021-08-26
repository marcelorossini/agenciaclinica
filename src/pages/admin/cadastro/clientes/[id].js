import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import api from "../../../../services/api";
import { Form, Input, Button, Label } from '../../../../styles/admin'

const Cliente = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!id) return;

    const handle = async () => {
      const { data } = await api.get(`/customer/${id}`);

      // Preenche valores
      Object.keys(data).forEach((item) => {
        setValue(item, data[item]);
      });
    };
    handle();
  }, [id]);

  const onSubmit = async (data) => {
    const response = await api.put(`/customer/${id}`, data);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {errors.name && <span>This field is required</span>}
        <Label>Nome:</Label>
        <Input type="text" {...register("name")} />
        <Label>Descrição:</Label>
        <Input type="text" {...register("description")} />
        <Label>Telefone:</Label>
        <Input type="text" {...register("phone")} />
        <Label>Endereço:</Label>
        <Input type="text" {...register("address")} />
        <Label>Whatsapp:</Label>
        <Input type="text" {...register("whatsapp")} />
        <Label>Facebook:</Label>
        <Input type="text" {...register("facebook")} />
        <Label>Instagram:</Label>
        <Input type="text" {...register("instagram")} />
        <Label>LinkedIn:</Label>
        <Input type="text" {...register("linkedin")} />
        <Button type="submit">aaaa</Button>
      </Form>
    </>
  );
};

export default Cliente;
