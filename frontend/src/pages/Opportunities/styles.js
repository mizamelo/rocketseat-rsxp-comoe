import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    li {
      align-items: center;
      -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      border-radius: 6px !important;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      justify-content: center;
      height: 140px;

      &:nth-child(2) {
        > img {
          width: 120px;
        }
      }

      &:nth-child(3) {
        > img {
          width: 100px;
        }
      }

      &:nth-child(9) {
        > img {
          width: 260px;
        }
      }

      img {
        width: 180px;
        border-radius: 5px 5px 0 0;
        align-self: center;
      }
    }
  }
`;
