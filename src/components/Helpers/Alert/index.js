import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import { Button } from "../../../styles/admin/index";

import {
  Container,
  Wrapper,
  Header,
  Main,
  Footer,
  BackgroundClose,
  ButtonClose,
  Title,
  CloseIcon,
} from "./style";

const Alert = (props) => {
  const { type, confirmAction, title, message, onClose } = props;

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (type) setActive(true);
  }, [props]);

  useEffect(() => {
    if (active !== false) return;
    if (onClose) onClose();
  }, [active]);

  return (
    <Container active={active}>
      <Wrapper active={active}>
        <Header>
          <Title>{title}</Title>
          <ButtonClose onClick={() => setActive(false)}>
            <CloseIcon />
          </ButtonClose>
        </Header>
        <Main dangerouslySetInnerHTML={{ __html: message }} />
        {type === "Confirm" && (
          <Footer>
            <Button danger onClick={() => setActive(false)}>
              Cancelar
            </Button>
            <Button
              onClick={() => {
                confirmAction && confirmAction();
                setActive(false);
              }}
            >
              Confirmar
            </Button>
          </Footer>
        )}
      </Wrapper>
      <BackgroundClose onClick={() => setActive(false)} />
    </Container>
  );
};
export default Alert;

export const alertDialog = (props) => {
  if (typeof window === "undefined") return;
  let divAlertDialog = document.getElementById("alert-dialog");
  if (!divAlertDialog) {
    divAlertDialog = document.createElement("div");
    divAlertDialog.id = "alert-dialog";
    document.body.appendChild(divAlertDialog);
  }
  const root = createRoot(divAlertDialog);
  root.render(<Alert {...props} />);
};
