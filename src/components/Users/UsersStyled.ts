import styled from "styled-components";
import breakpoints from "../../commons/breakpoints";
import spacing from "../../commons/spacing";

export const UsersStyled = styled.section``;

export const UsersStyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.gap};

  & li {
    width: 100%;

    @media (min-width: ${breakpoints.big}) {
      max-width: 45%;
    }

    @media (min-width: ${breakpoints.large}) {
      max-width: 31%;
    }
  }
`;
