import styled from "styled-components";
import cssValues from "../../utils/cssValues.json";

export const Title = styled.div`
  font-family: zh-bold;
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
`;

export const TitleLargeReg = styled.div`
  font-family: zh-regular;
  font-size: 2rem;
  letter-spacing: 0.1rem;
`;

export const Subtitle = styled.div`
  padding-top: 0.5rem;
  font-family: zh-light;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
`;

export const Caption = styled.div`
  padding-top: 0.5rem;
  font-family: zh-light;
  font-size: 0.8rem;
`;

export const Link = styled.div`
  color: ${cssValues.colours.linkBlue};
  text-align: right;
  font-size: 1.25rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Error = styled(Caption)`
  text-align: left;
  color: ${cssValues.colours.red};
`;
