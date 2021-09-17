import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from 'next/router'

import {
  Facebook,
  Instagram,
  Whatsapp,
  Linkedin,
  Youtube,
} from "@styled-icons/boxicons-logos";
import { Phone } from "@styled-icons/boxicons-regular";
import { Location } from "@styled-icons/ionicons-outline";
import { Web } from "@styled-icons/foundation";

import Page from "../../components/Helpers";
import api from '../../services/api'

import {
  Grid,
  Image,
  Button,
  Name,
  Description,
  WrapperButtons,
  Footer,
} from "../../styles/clientes";

export async function getServerSideProps(context) {
  const { url } = context.query
  const response = await api.get(`customer/${url}?field=url`)  

  return {
    props: {
      data: response.data || {},
    },
  };
}

const Clientes = ({ data }) => {
  const {
    url,
    company,
    profile_image,
    background_image,
    name,
    description,
    whatsapp,
    whatsapp2,
    facebook,
    phone,
    instagram,
    address,
    linkedin,
    website,
    youtube,
  } = data;
  const router = useRouter();

  useEffect(() => {
    if (!url) {
      router.replace('/')
    }
  }, [url])

  return (
    <>
      <Head>
        <title>{name} - Agência Clinica</title>
      </Head>
      <Page backgroundImage={background_image}>
        <Grid>
          <Image>
            <img src={profile_image} />
          </Image>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <WrapperButtons>
            {whatsapp && (
              <Button target="_blank" href={whatsapp}>
                <Whatsapp /> WhatsApp
              </Button>
            )}
            {whatsapp2 && (
              <Button target="_blank" href={whatsapp2}>
                <Whatsapp /> WhatsApp2
              </Button>
            )}
            {instagram && (
              <Button target="_blank" href={instagram}>
                <Instagram /> Instagram
              </Button>
            )}
            {phone && (
              <Button target="_blank" href={phone}>
                <Phone /> Telefone
              </Button>
            )}
            {address && (
              <Button target="_blank" href={address}>
                <Location /> Endereço
              </Button>
            )}
            {facebook && (
              <Button target="_blank" href={facebook}>
                <Facebook /> Facebook
              </Button>
            )}
            {linkedin && (
              <Button target="_blank" href={linkedin}>
                <Linkedin /> LinkedIn
              </Button>
            )}
            {website && (
              <Button target="_blank" href={website}>
                <Web /> Website
              </Button>
            )}
            {youtube && (
              <Button target="_blank" href={youtube}>
                <Youtube /> Youtube
              </Button>
            )}
          </WrapperButtons>
          <Footer>{company === 'agencia' ? 'Agência de Marketing @agenciaclinica' : '💡 Agência de Marketing @soluplim' }</Footer>
        </Grid>
      </Page>
    </>
  );
};

export default Clientes;
