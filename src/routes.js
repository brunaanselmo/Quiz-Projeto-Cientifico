import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import GameInit from './pages/gameInit'
import Question01 from './pages/question01/question01question'
import Question01Correct from './pages/question01/question01correct'
import Question01Error from './pages/question01/question01error'

export default function Function_Routes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={ <Home/> } />
        <Route path='/GameInit' exact element={ <GameInit/> } />
        <Route path='/Question01' exact element={ <Question01/> } />
        <Route path='/Question01 ' exact element={ <Question01Error/> } />
        <Route path='/Question01  ' exact element={ <Question01Correct/> } />
    </Routes>
    </BrowserRouter>
  );
}

