import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaMapSigns } from "react-icons/fa"

import Notifications from '../Notifications';

import { Container, Content, Profile } from './styles';

export default function Header(props) {
  const user = JSON.parse(localStorage.getItem('@id'));
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
          <Link to={`/mentors/${user.id}`}>MENTORES</Link>
          {/* <Link to="/professions">PROFISSÕES</Link> */}

          {/* <Link to="/mentors">MENTORES</Link> */}

          <Link to="/courses">CURSOS</Link>

          <Link to="/opportunities">OPORTUNIDADES</Link>

          <Link to="/ranking">RANKING</Link>

          <Link to="/profession-details">DETAILS</Link>
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
            <img
              src={'https://api.adorable.io/avatars/50/abott@adorable.png'}
              alt=""
            /> */}
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
