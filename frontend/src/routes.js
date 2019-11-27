import React from "react"
import { BrowserRouter, Route } from "react-router-dom"

import SignIn from "./pages/SignIn"
import MentorCreate from "./pages/MentorCreate"
import ProfessionList from "./pages/ProfessionList"
import MentorList from "./pages/MentorList"
import Courses from "./pages/Courses"
import Opportunities from "./pages/Opportunities"
import RankingMentor from "./pages/RankingMentor"
import Wizard from "./pages/Wizard"

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn} />
      <Route path="/mentorcreate" component={MentorCreate} />
      <Route path="/professions" component={ProfessionList} />
      <Route path="/dev/:id" component={MentorList} />
      <Route path="/courses" component={Courses} />
      <Route path="/opportunities" component={Opportunities} />
      <Route path="/ranking" component={RankingMentor} />
      <Route path="/wizard" component={Wizard} />
    </BrowserRouter>
  )
}
