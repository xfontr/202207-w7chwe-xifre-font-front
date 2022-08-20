import styled from "styled-components";
import colors from "../../commons/colors";
import spacing from "../../commons/spacing";

const ButtonStyled = styled.button`
  border: none;
  box-shadow: none;
  width: fit-content;
  font-weight: 500;

  padding: ${spacing.paddingButton};
  border-radius: ${spacing.borderRadiusSmall};

  background-color: ${colors.contrast};
  color: ${colors.primary};

  cursor: pointer;
`;

export default ButtonStyled;
