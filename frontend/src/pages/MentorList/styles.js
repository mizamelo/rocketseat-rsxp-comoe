import styled from "styled-components"
import { darken } from "polished"

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
    margin-top: 30px;

    li {
      -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
      border-radius: 6px !important;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      img {
        margin-top: -100px;
        width: 180px;
        height: 180px;
        border-radius: 50% !important;
        border-radius: 5px 5px 0 0;
        align-self: center;
      }

      footer {
        flex: 1;
        background: var(--card-color);
        border: 1px solid var(--border);
        padding: 15px 20px;
        text-align: center;

        strong {
          font-size: 16px;
          color: var(--primary-color);
        }
      }
    }
  }
`

export const BioContainer = styled.p`
  text-overflow: ellipsis;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  color: #666;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const BackContainer = styled.div`
  height: 120px;
  width: 100%;
  background: linear-gradient(-90deg, #5d8cf6, #cfd9ed);
  display: -webkit-box;
`

export const ButtonsContainer = styled.div`
  background-color: #fff;
  display: flex;
  padding: 10px 20px 15px;
  justify-content: space-between;
`

export const BtnConectar = styled.button`
  border: 0;
  border-radius: 4px;
  height: 38px;
  font-size: 14px;
  background-color: #5c8df6;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 120px;

  &:hover {
    background: ${darken(0.06, "#5c8df6")};
  }
`
export const BtnPerfil = styled.button`
  border: 0;
  border-radius: 4px;
  height: 38px;
  font-size: 14px;
  background-color: #454b57;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 120px;

  &:hover {
    background: ${darken(0.06, "#454b57")};
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: 30px 0;
`

export const WraperLoading = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 350px;
  width: 50%;
`
