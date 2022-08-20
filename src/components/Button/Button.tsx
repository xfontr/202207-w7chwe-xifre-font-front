import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  content: string;
  type: "submit" | "button";
  action?: () => void;
}

const Button = ({ content, type, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled onClick={action} type={type}>
      {content}
    </ButtonStyled>
  );
};

export default Button;
