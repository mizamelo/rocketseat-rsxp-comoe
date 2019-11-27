import React from "react"
import { Link } from "react-router-dom"
import { FaMapSigns } from "react-icons/fa"

import Notifications from "../Notifications"

import { Container, Content, Profile } from "./styles"

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <FaMapSigns color="#fff" size={40} />

          <Link to="/courses">CURSOS</Link>

          <Link to="/opportunities">OPORTUNIDADES</Link>

          <Link to="/ranking">MENTORES</Link>

          <Link to="/score">ESTUDANTES</Link>
        </nav>

        <aside>
          <Notifications />

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
