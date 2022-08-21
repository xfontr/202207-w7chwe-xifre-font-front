import styled from "styled-components";
import colors from "../../commons/colors";
import spacing from "../../commons/spacing";

const NavBarStyled = styled.nav`
  display: flex;
  gap: ${spacing.gapSmall};

  & > * {
    border-radius: ${spacing.borderRadiusSmall};
    border: 1px solid ${colors.contrast};
    color: ${colors.contrast};
    font-weight: 500;
    padding: 0.4rem 0.7rem;
    text-decoration: none;
    transition: 0.3s;
  }

  & > *:hover {
    background-color: ${colors.contrast};
    color: ${colors.primary};
  }
`;

export default NavBarStyled;
