import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 84%;
  margin: 0 auto;

  li {
    list-style: none;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 5px;
    width: 300px;
    height: fit-content;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  li section {
    display: flex;
    flex-direction: column;
  }

  li figure {
    background-color: #fefae0;
    width: 295px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  li h2 {
    margin: 26.6px 0 14px 21px;
    color: #333333;
    font-size: 18px;
    font-weight: 700;
  }

  li span {
    color: #ccd5ae;
    font-weight: 600;
    font-size: 14px;
    margin: 0 0 28px 21px;
  }

  li img {
    max-height: 150px;
  }

  li figcaption {
    display: none;
  }

  li button {
    margin: 0 0 20px 21px;
    color: white;
    background-color: #d4a373;
    border: 2px solid #d4a373;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 9px 20px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

    li {
      width: 26vw;
      margin: 10px;
    }

    li figure {
      height: 28vh;
      width: 25.7vw;
    }

    li img {
      width: 70%;
      max-height: 90%;
    }
  }
`;
