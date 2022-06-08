import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from 'components/UI/Layout';

import Home from "components/Home";
import About from "components/About";
import Library from "components/Library";
import Sound_Test from "components/Sound_Test";

export default function App(){
  return (
    <Router>
     <Layout>
      <Routes>
       <Route path="/Sound_Test" element={<Sound_Test/>} />
       <Route path="/Library" element={<Library/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/" element={<Home/>}  />
      </Routes>
     </Layout>
    </Router>
  );
}
