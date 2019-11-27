import styled from "styled-components"
import { darken } from "polished"

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    li {
      -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      img {
        max-width: 100%;
        border-radius: 5px 5px 0 0;
      }

      footer {
        flex: 1;
        background: var(--card-color);
        border: 1px solid var(--border);
        padding: 15px 20px;
        text-align: left;

        strong {
          font-size: 16px;
          color: var(--primary-color);
        }

        p {
          font-size: 14px;
          line-height: 20px;
          color: var(--secondary-color);
          margin-top: 5px;
        }
      }
    }
  }
`

export const ButtonsContainer = styled.div`
  background-color: #fff;
  display: flex;
  padding: 0 20px 15px;

  button {
    border: 0;
    border-radius: 4px;
    height: 48px;
    font-size: 16px;
    background-color: #5c8df6;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
    width: 100%;

    &:hover {
      background: ${darken(0.06, "#5c8df6")};
    }
  }
`

export const MatchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);

  strong {
    font-size: 32px;
    color: #fff;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
    line-height: 30px;
    max-width: 400px;
    color: rgba(255, 255, 255, 0.8);
  }

  button {
    border: 0;
    background: none;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
    font-size: 18px;
    margin-top: 30px;
    cursor: pointer;
  }
`

export const MatchAvatar = styled.image`
  width: 200;
  height: 200;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: 30px 0;
`
