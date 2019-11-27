import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import MentorCreate from './pages/MentorCreate';
import MentorList from './pages/MentorList';
import Courses from './pages/Courses';
import Opportunities from './pages/Opportunities';
import RankingMentor from './pages/RankingMentor';
import ScoreStudent from './pages/ScoreStudent';

import ProfessionDetails from './pages/ProfessionDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SignIn} />
      <Route path="/mentorcreate" component={MentorCreate} />
      <Route path="/mentors/:id" component={MentorList} />
      <Route path="/courses" component={Courses} />
      <Route path="/opportunities" component={Opportunities} />
      <Route path="/ranking" component={RankingMentor} />
      <Route path="/score" component={ScoreStudent} />

      <Route path="/profession-details" component={ProfessionDetails} />
    </BrowserRouter>
  );
}
