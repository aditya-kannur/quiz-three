import { Component } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./Component/HomeComponent"
import QuizComponent from "./Component/QuizComponent"
import ResultComponent from "./Component/ResultComponent";


export default class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/quiz-three" element={<HomeComponent/>}></Route>
        <Route path="/quiz-three/play-quiz" element={<QuizComponent/>}></Route>
        <Route path="/quiz-three/finish-quiz" element={<ResultComponent/>}></Route>
      </Routes>
      </BrowserRouter>
      
    );
  };
}