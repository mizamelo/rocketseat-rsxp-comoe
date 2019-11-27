import React, { useState } from 'react';
import api from '../../services/api';
import { FaMapSigns } from 'react-icons/fa';

import { Container, Content } from './styles';

export default function SignIn({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', { username });

    const { _id } = response.data;

    localStorage.setItem('@id', JSON.stringify({ id: _id }));
    history.push(`/mentors/${_id}`);
  }

  return (
    <Container>
      <Content>
        <FaMapSigns color="#fff" size={80} />

        <form onSubmit={handleSubmit}>
          <input
            name="user"
            placeholder="Usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input name="password" type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  );
}
