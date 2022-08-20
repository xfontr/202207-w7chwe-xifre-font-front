import styled from "styled-components";
import spacing from "../../commons/spacing";

export const UsersStyled = styled.section``;

export const UsersStyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.gap};

  & li {
    width: 100%;
    max-width: 31%;
  }
`;
