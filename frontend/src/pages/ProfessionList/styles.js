import styled from "styled-components"

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
        width: 100%;
        height: 200px;

        border-radius: 5px 5px 0 0;
        align-self: center;
      }

      strong {
        -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);

        align-self: center;
        margin-top: -70px;
        font-size: 20px;
        color: var(--primary-color);
        border-radius: 50%;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
      }

      footer {
        flex: 1;
        background: var(--card-color);
        border: 1px solid var(--border);
        padding: 15px 20px;
        text-align: center;
      }
    }
  }
`

export const BioContainer = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #666;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const BackContainer = styled.div`
  height: 120px;
  width: 100%;
  display: -webkit-box;
`

export const WraperLoading = styled.div`
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 350px;
  width: 50%;
`
