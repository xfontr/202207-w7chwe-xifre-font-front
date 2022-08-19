import styled from "styled-components";
import breakpoints from "../../commons/breakpoints";
import spacing from "../../commons/spacing";

const AppStyled = styled.div`
  max-width: ${breakpoints.small};
  margin: 0 auto;
  padding: ${spacing.paddngSmall};

  @media (min-width: ${breakpoints.small}) {
    max-width: ${breakpoints.big};
  }

  @media (min-width: ${breakpoints.big}) {
    max-width: ${breakpoints.large};
  }

  h1 {
    font-variation-settings: 900;
  }
`;

export default AppStyled;
