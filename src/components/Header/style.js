import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;

  h1 {
    margin-left: 8%;
    color: #c4d473;
  }

  h1 span {
    color: #cf9963;
  }

  .container_header-buttons {
    margin-right: 8%;
    display: flex;
  }

  button {
    padding: 10px 2px;
    width: 60px;
    border: 1px solid #d4a373;
    background-color: #fefae0;
    color: #cf9963;
    margin: 10px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
