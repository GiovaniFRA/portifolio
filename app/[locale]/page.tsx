'use client';
import {useTranslations} from 'next-intl';
import { CSSProperties } from 'react';
import Home from "./pages/home";
import Education from "./pages/education";
import Experience from "./pages/experience";
import About from './pages/about';
import Header from './components/Header';
export default function App() {
  const t = useTranslations('index');
  return (
    <>
      <div className="w-full">
        <Header/>
        <Home/>
        <About/>  
        <Education/>
      </div>
      {/* <Education/>
      <Experience/>
      <About/> */}
    </>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container:{
    padding:'0 5vw',
  },
  display: {
    display: 'flex',
    justifyContent: "flex-start",
  },
  photo:{
    width:"45%"
  },
  content:{
    paddingTop:'20vh',
    flexDirection:'column',
    width:"55%",
    display:'flex',
    alignItems:'left',
    justifyContent:'left',
  },
  textBlock:{
    display:'flex',
    flexDirection:"column"
  },
  name:{
    marginBottom:'7vh',
    fontSize:'1.5em',
  },
  introducion:{
    width:"70%",
    lineBreak:"auto"
  },
  button:{
    width:"30%",
    marginTop:'6vh',
  }
}

