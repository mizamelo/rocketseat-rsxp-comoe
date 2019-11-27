import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import MentorCreate from './pages/MentorCreate';
import MentorList from './pages/MentorList';
import Courses from './pages/Courses';
import Opportunities from './pages/Opportunities';
import RankingMentor from './pages/RankingMentor';

import ProfessionList from "./pages/ProfessionList"
import Wizard from "./pages/Wizard"

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/signin" component={SignIn} />
      
      <Route path="/mentorcreate" component={MentorCreate} />
      
      <Route path="/mentors/:id" component={MentorList} />
      <Route path="/professions" component={ProfessionList} />
      <Route path="/dev/:id" component={MentorList} />
      <Route path="/courses" component={Courses} />
      <Route path="/opportunities" component={Opportunities} />
      <Route path="/ranking" component={RankingMentor} />
      <Route exact path="/" component={Wizard} />
    </BrowserRouter>
  );
}
