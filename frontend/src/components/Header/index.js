import React from "react"
import { Link } from "react-router-dom"
import { FaMapSigns } from "react-icons/fa"

import { Container, Content, Profile } from "./styles"

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <FaMapSigns color="#fff" size={40} />
          <Link to="/lits">MENTORES</Link>

          <Link to="/courses">CURSOS</Link>

          <Link to="/opportunities">OPORTUNIDADES</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/">Meu Perfil</Link>
            </div>
            <img
              src={"https://api.adorable.io/avatars/50/abott@adorable.png"}
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
