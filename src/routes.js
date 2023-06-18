import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import GameInit from './pages/gameInit';
import Question01 from './pages/question01/question01question';
import Question01Correct from './pages/question01/question01correct';
import Question01Error from './pages/question01/question01error';
import Question02 from './pages/question02/question02question';
import Question02Correct from './pages/question02/question02correct';
import Question02Error from './pages/question02/question02error';
import Question03 from './pages/question03/question03question';
import Question03Correct from './pages/question03/question03correct';
import Question03Error from './pages/question03/question03error';
import Question04 from './pages/question04/question04question';
import Question04Correct from './pages/question04/question04correct';
import Question04Error from './pages/question04/question04error';
import Question05 from './pages/question05/question05question';
import Question05Correct from './pages/question05/question05correct';
import Question05Error from './pages/question05/question05error';
import Question06 from './pages/question06/question06question';
import Question06Correct from './pages/question06/question06correct';
import Question06Error from './pages/question06/question06error';
import Question07 from './pages/question07/question07question';
import Question07Correct from './pages/question07/question07correct';
import Question07Error from './pages/question07/question07error';
import Question08 from './pages/question08/question08question';
import Question08Correct from './pages/question08/question08correct';
import Question08Error from './pages/question08/question08error';
import Question09 from './pages/question09/question09question';
import Question09Correct from './pages/question09/question09correct';
import Question09Error from './pages/question09/question09error';
import Question10 from './pages/question10/question10question';
import Question10Correct from './pages/question10/question10correct';
import Question10Error from './pages/question10/question10error';
import Question11 from './pages/question11/question11question';
import Question11Correct from './pages/question11/question11correct';
import Question11Error from './pages/question11/question11error';
import Question12 from './pages/question12/question12question';
import Question12Correct from './pages/question12/question12correct';
import Question12Error from './pages/question12/question12error';
import Question13 from './pages/question13/question13question';
import Question13Correct from './pages/question13/question13correct';
import Question13Error from './pages/question13/question13error';




export default function Function_Routes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' exact element={ <Home/> } />
        <Route path='/GameInit' exact element={ <GameInit/> } />
        <Route path='/Question01' exact element={ <Question01/> } />
        <Route path='/Question01 ' exact element={ <Question01Error/> } />
        <Route path='/Question01  ' exact element={ <Question01Correct/> } />
        <Route path='/Question02' exact element={ <Question02/> } />
        <Route path='/Question02 ' exact element={ <Question02Error/> } />
        <Route path='/Question02  ' exact element={ <Question02Correct/> } />
        <Route path='/Question03' exact element={ <Question03/> } />
        <Route path='/Question03 ' exact element={ <Question03Error/> } />
        <Route path='/Question03  ' exact element={ <Question03Correct/> } />
        <Route path='/Question04' exact element={ <Question04/> } />
        <Route path='/Question04 ' exact element={ <Question04Error/> } />
        <Route path='/Question04  ' exact element={ <Question04Correct/> } />
        <Route path='/Question05' exact element={ <Question05/> } />
        <Route path='/Question05 ' exact element={ <Question05Error/> } />
        <Route path='/Question05  ' exact element={ <Question05Correct/> } />
        <Route path='/Question06' exact element={ <Question06/> } />
        <Route path='/Question06 ' exact element={ <Question06Error/> } />
        <Route path='/Question06  ' exact element={ <Question06Correct/> } />
        <Route path='/Question07' exact element={ <Question07/> } />
        <Route path='/Question07 ' exact element={ <Question07Error/> } />
        <Route path='/Question07  ' exact element={ <Question07Correct/> } />
        <Route path='/Question08' exact element={ <Question08/> } />
        <Route path='/Question08 ' exact element={ <Question08Error/> } />
        <Route path='/Question08  ' exact element={ <Question08Correct/> } />
        <Route path='/Question09' exact element={ <Question09/> } />
        <Route path='/Question09 ' exact element={ <Question09Error/> } />
        <Route path='/Question09  ' exact element={ <Question09Correct/> } />
        <Route path='/Question10' exact element={ <Question10/> } />
        <Route path='/Question10 ' exact element={ <Question10Error/> } />
        <Route path='/Question10  ' exact element={ <Question10Correct/> } />
        <Route path='/Question11' exact element={ <Question11/> } />
        <Route path='/Question11 ' exact element={ <Question11Error/> } />
        <Route path='/Question11  ' exact element={ <Question11Correct/> } />
        <Route path='/Question12' exact element={ <Question12/> } />
        <Route path='/Question12 ' exact element={ <Question12Error/> } />
        <Route path='/Question12  ' exact element={ <Question12Correct/> } />
        <Route path='/Question13' exact element={ <Question13/> } />
        <Route path='/Question13 ' exact element={ <Question13Error/> } />
        <Route path='/Question13  ' exact element={ <Question13Correct/> } />
    </Routes>
    </BrowserRouter>
  );
}

