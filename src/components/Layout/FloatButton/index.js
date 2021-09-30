// Style
import { Button } from "./style";

const FloatButton = () => {

  return (
      <Button href={process.env.NEXT_PUBLIC_WHATSAPP_URL} target="_blank">
        <img src="/assets/whatsapp.png"/>
      </Button>
  );
};
export default FloatButton;
