import React from "react"

import Header from "../../components/Header"
import { Container } from "./styles"

import rocketseat from "../../assets/brands/rocketseat.svg"
import udemy from "../../assets/brands/udemy.svg"
import alura from "../../assets/brands/alura.svg"
import codenation from "../../assets/brands/codenation.svg"
import codecademy from "../../assets/brands/codecademy.svg"
import freecode from "../../assets/brands/freecode.svg"

export default function Courses() {
  return (
    <>
      <Header />
      <Container>
        <ul>
          <li>
            <img
              src={rocketseat}
              alt=""
              onClick={() => {
                window.open("https://rocketseat.com.br/", "_blank")
              }}
            ></img>
          </li>
          <li>
            <img
              src={udemy}
              alt=""
              onClick={() => {
                window.open("https://www.udemy.com/", "_blank")
              }}
            ></img>
          </li>
          <li>
            <img
              src={alura}
              alt=""
              onClick={() => {
                window.open("https://www.alura.com.br/", "_blank")
              }}
            ></img>
          </li>
          <li>
            <img
              src={codenation}
              alt=""
              onClick={() => {
                window.open("https://www.codenation.dev/", "_blank")
              }}
            ></img>
          </li>
          <li>
            <img
              src={codecademy}
              alt=""
              onClick={() => {
                window.open("https://www.codecademy.com/", "_blank")
              }}
            ></img>
          </li>
          <li>
            <img
              src={freecode}
              alt=""
              onClick={() => {
                window.open("https://www.freecodecamp.org/", "_blank")
              }}
            ></img>
          </li>
        </ul>
      </Container>
    </>
  )
}
