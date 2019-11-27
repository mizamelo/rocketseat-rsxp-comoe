import React, { useState } from "react"
import api from "../../services/api"

import { FaMapSigns } from "react-icons/fa"

import { Container } from "./styles"

export default function Login({ history }) {
  const [username, setUsername] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await api.post("/devs", { username })

    const { _id } = response.data

    history.push(`/mentor/${_id}`)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <span>
          <FaMapSigns color="#5d8cf6" size={80} />
        </span>

        <input
          placeholder="Digite seu usuário no Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  )
}
