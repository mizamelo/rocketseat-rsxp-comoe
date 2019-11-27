import React from "react";

import Header from "../../components/Header";
import { Container } from "./styles";

import rocketseat from "../../assets/brands/rocketseat.svg";
import hotmart from "../../assets/brands/hotmart.svg";
import globo from "../../assets/brands/globo.png";
import vulpi from "../../assets/brands/vulpi.svg";
import shawee from "../../assets/brands/shawee.svg";
import bossa from "../../assets/brands/bossabox.png";
import wevo from "../../assets/brands/wevo.png";
import zenvia from "../../assets/brands/zenvia.png";
import totalvoice from "../../assets/brands/totalvoice.png";

export default function Opportunities() {
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
                window.open("https://rocketseat.com.br/", "_blank");
              }}
            ></img>
          </li>
          <li>
            <img
              src={globo}
              alt=""
              onClick={() => {
                window.open("https://talentos.globo.com/", "_blank");
              }}
            ></img>
          </li>
          <li>
            <img
              src={vulpi}
              alt=""
              onClick={() => {
                window.open("https://vulpi.com.br/", "_blank");
              }}
            ></img>
          </li>
          <li>
            <img
              src={hotmart}
              alt=""
              onClick={() => {
                window.open("https://www.hotmart.com//", "_blank");
              }}
            ></img>
          </li>
          <li>
            <img
              src={shawee}
              alt=""
              onClick={() => {
                window.open("https://shawee.io/", "_blank");
              }}
            ></img>
          </li>
          <li>
            <img
              src={bossa}
              alt=""
              onClick={() => {
                window.open("https://bossabox.com/", "_blank");
              }}
            ></img>
          </li>
          <li>
            <img
              src={wevo}
              alt=""
              onClick={() => {
                window.open("https://www.wevo.com.br/", "_blank");
              }}
            ></img>
          </li>
          <li>
            <img
              src={zenvia}
              alt=""
              onClick={() => {
                window.open("https://zenvia.gupy.io/", "_blank");
              }}
            ></img>
          </li>
          <li>
            <img
              src={totalvoice}
              alt=""
              onClick={() => {
                window.open("https://www.totalvoice.com.br/vagas/", "_blank");
              }}
            ></img>
          </li>
        </ul>
      </Container>
    </>
  );
}
