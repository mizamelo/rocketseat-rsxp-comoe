import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaMapSigns } from "react-icons/fa"

import Notifications from "../Notifications"

import { Container, Content, Profile } from "./styles"

export default function Header() {
  const [name, setName] = useState('');

  useEffect(() => {
    const user = window.localStorage.getItem('@username');

    setName(user);
  }, []);

  return (
    <Container>
      <Content>
        <nav>
          <FaMapSigns color="#fff" size={40} />
          <Link to="/mentors">MENTORES</Link>

          <Link to="/courses">CURSOS</Link>

          <Link to="/opportunities">OPORTUNIDADES</Link>

          <Link to="/score">ESTUDANTES</Link>

          <Link to="/ranking">RANKING</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="#">Meu Perfil</Link>
            </div>
            {/* <img
              src={"https://api.adorable.io/avatars/50/abott@adorable.png"}
              alt=""
            /> */}
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}
