import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import api from "../../services/api"

import ScaleLoader from "react-spinners/ScaleLoader"

import itsamatch from "../../assets/itsamatch.png"

import Header from "../../components/Header"

import {
  Container,
  BackContainer,
  BioContainer,
  ButtonsContainer,
  BtnPerfil,
  BtnConectar,
  MatchContainer,
  MatchAvatar,
  WraperLoading
} from "./styles"

export default function Main({ match }) {
  const [users, setUsers] = useState([])
  const [matchDev, setMatchDev] = useState(null)

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      })

      setUsers(response.data)
    }

    loadUsers()
  }, [match.params.id])

  useEffect(() => {
    const socket = io("http://localhost:3333", {
      query: { user: match.params.id }
    })

    socket.on("match", dev => {
      setMatchDev(dev)
    })
  }, [match.params.id])

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    })

    setUsers(users.filter(user => user._id !== id))
  }

  async function handlePerfil(user) {
    window.location.href = `https://github.com/${user}`
  }

  return (
    <>
      <Header />
      <Container>
        {users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user._id}>
                <BackContainer></BackContainer>
                <img src={user.avatar} alt={user.name} />
                <footer>
                  <strong>{user.name}</strong>
                  <br />
                  <span>{user.user}</span>
                  <BioContainer>{user.bio}</BioContainer>
                </footer>

                <ButtonsContainer>
                  <BtnPerfil
                    type="button"
                    onClick={() => handlePerfil(user.user)}
                  >
                    Ver Perfil
                  </BtnPerfil>

                  <BtnConectar
                    type="button"
                    onClick={() => handleLike(user._id)}
                  >
                    Conectar
                  </BtnConectar>
                </ButtonsContainer>
              </li>
            ))}
          </ul>
        ) : (
          <WraperLoading>
            <ScaleLoader
              sizeUnit="px"
              height={80}
              width={12}
              margin="6px"
              radius={4}
              size={100}
              color="#5c8df6"
            />
          </WraperLoading>
        )}

        {matchDev && (
          <MatchContainer>
            <img src={itsamatch} alt="It's a match" />

            <MatchAvatar src={matchDev.avatar} alt="" />
            <strong>{matchDev.name}</strong>
            <p>{matchDev.bio}</p>

            <button type="button" onClick={() => setMatchDev(null)}>
              FECHAR
            </button>
          </MatchContainer>
        )}
      </Container>
    </>
  )
}
