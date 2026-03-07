'use client';
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import Home from "./pages/home";
import Education from "./pages/education";
import Experience from "./pages/experience";
import About from './pages/about';
import Header from './components/Header';
import Contact from './pages/contact';
export default function App() {
  const t = useTranslations('index');
  return (
    <>
      <div className="w-full">
        <Header/>
        <Home/>
        <About/>  
        <Education/>
        <Experience/>
        <Contact/>
      </div>
      {/* <Education/>
      <Experience/>
      <About/> */}
    </>
  );
}