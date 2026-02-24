import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import {
  Container,
  Wrapper,
  Header,
  Main,
  BackgroundClose,
  ButtonClose,
  Title,
  CloseIcon,
} from "./style";

const Modal = (props) => {
  const {
    title,
    callbackActive,
    component,
    options = {},
    ...restOfProps
  } = props;
  const { close = true } = options;

  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(true);
  }, [callbackActive]);

  return (
    <Container active={active}>
      <Wrapper active={active} {...restOfProps}>
        <Header>
          <Title>{title}</Title>
          {close && (
            <ButtonClose onClick={() => setActive(false)}>
              <CloseIcon />
            </ButtonClose>
          )}
        </Header>
        <Main>{component}</Main>
      </Wrapper>
      {close && <BackgroundClose onClick={() => setActive(false)} />}
    </Container>
  );
};
export default Modal;

export const showModal = (props) => {
  if (typeof window === "undefined") return;
  let divModal = document.getElementById("modal");
  if (!divModal) {
    divModal = document.createElement("div");
    divModal.id = "modal";
    document.body.appendChild(divModal);
  }

  const callback = new Date();
  const root = createRoot(divModal);
  root.render(<Modal {...props} callbackActive={null || callback} />);
};

export const hideModal = () => {
  const divModal = document.getElementById("modal");
  if (divModal) {
    divModal.innerHTML = "";
  }
};
