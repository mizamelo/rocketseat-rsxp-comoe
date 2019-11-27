import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import api from "../../services/api"

import itsamatch from "../../assets/itsamatch.png"

import Header from "../../components/Header"

import {
  Container,
  ButtonsContainer,
  MatchContainer,
  MatchAvatar
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

  return (
    <>
      <Header />
      <Container>
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong> <span>{user.user}</span>
                <p>{user.bio}</p>
              </footer>

              <ButtonsContainer>
                <button type="button" onClick={() => handleLike(user._id)}>
                  Conectar
                </button>
              </ButtonsContainer>
            </li>
          ))}
        </ul>

        {matchDev && (
          <MatchContainer>
            <img src={itsamatch} alt="It's a match" />

            <MatchAvatar className="avatar" src={matchDev.avatar} alt="" />
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
