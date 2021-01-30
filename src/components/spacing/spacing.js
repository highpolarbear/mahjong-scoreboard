import styled from "styled-components";
import cssValues from "../../utils/cssValues.json";

export const Spacing32 = styled.div`
  padding-bottom: 2rem;
  @media (max-width: ${cssValues.limits.mobileLimit}) {
  }
`;

export const Spacing96 = styled.div`
  padding-bottom: 6rem;
  @media (max-width: ${cssValues.limits.mobileLimit}) {
    padding-bottom: 3rem;
  }
`;

export const Spacing10Horizontal = styled.div`
  padding-left: 10%;
`;
