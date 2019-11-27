import React from "react"
import { Wrapper, Container } from "./styles"
import { Link } from "react-router-dom"
import Select from "react-select"

import StepWizard from "react-step-wizard"

const options = [
  { value: 0, label: "Sim" },
  { value: 1, label: "Não" }
]

export default function Wizard() {
  return (
    <StepWizard>
      <Container>
        <h1>Queremos conhecer você melhor! 😍</h1>

        <form>
          <Wrapper>
            <label htmlFor="">Você gosta de computadores?</label>
            <Select options={options} placeholder="Selecione uma opção" />
          </Wrapper>

          <Wrapper>
            <label htmlFor="">
              Tem curiosidade sobre como construir uma rede social?
            </label>
            <Select options={options} placeholder="Selecione uma opção" />
          </Wrapper>

          <Wrapper>
            <label htmlFor="">
              Valoriza mobilidade, estar conectado é importante pra você?
            </label>
            <Select options={options} placeholder="Selecione uma opção" />
          </Wrapper>

          <Wrapper>
            <label htmlFor="">
              Gosta de desenhar, criar coisas e resolver problemas?
            </label>
            <Select options={options} placeholder="Selecione uma opção" />
          </Wrapper>

          <Link to="list">
            <span>Aplicar</span>
          </Link>
        </form>
      </Container>
    </StepWizard>
  )
}
