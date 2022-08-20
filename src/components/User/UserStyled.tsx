import styled from "styled-components";
import colors from "../../commons/colors";
import spacing from "../../commons/spacing";

export const UserStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.gapSmall};

  border-radius: ${spacing.borderRadiusSmall};
  background-color: ${colors.primaryBright};
  border: 1px solid ${colors.secondaryBright};
  box-shadow: 6px 6px 22px 6px rgba(0, 0, 0, 0.1);
  padding: ${spacing.paddingBig};
  transition: 0.3s;

  &:hover {
    box-shadow: 12px 12px 35px 12px rgba(0, 0, 0, 0.15);
  }

  & button {
    width: 100%;
  }

  & h3 {
    font-size: 1.5rem;
    margin: 0;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 150px;
  height: 150px;
`;
