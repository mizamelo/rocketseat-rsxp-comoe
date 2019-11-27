import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import SignIn from "./pages/SignIn"
import MentorList from "./pages/MentorList"

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn} />
      <Route path="/dev/:id" component={MentorList} />
    </BrowserRouter>
  )
}
