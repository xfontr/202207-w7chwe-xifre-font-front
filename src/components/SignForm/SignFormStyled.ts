import styled from "styled-components";
import colors from "../../commons/colors";
import spacing from "../../commons/spacing";

export const SignFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap};

  background-color: ${colors.secondaryBright};
  background: linear-gradient(
    90deg,
    rgba(31, 39, 49, 0.9654236694677871) 0%,
    rgba(65, 90, 119, 1) 100%
  );
  border-radius: ${spacing.borderRadiusSmall};
  padding: ${spacing.paddingBig};
  color: ${colors.primary};

  & .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacing.gapSmall};
  }
`;

export const InputStyled = styled.input`
  padding: ${spacing.paddngSmall};
  border-radius: ${spacing.borderRadiusSmall};
  background-color: ${colors.primary};

  outline: none;
  border: none;
`;

export const LabelStyled = styled.label`
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
`;
