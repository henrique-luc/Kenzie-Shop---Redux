import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 84%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
