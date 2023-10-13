import { Route, Routes } from "react-router-dom"
import Sidebar from './components/Sidebar'
import Typinglogo from './components/Typinglogo'
import Vscode from './components/Vscode'
import TodoList from './components/TodoList'
import AboutMe from './components/AboutMe'
import Weather from './components/Weather'
import Social from './components/Social'
import ContactMe from "./components/ContactMe"
import SectionHeader from "./components/SectionHeader"
import Between from './components/Between'
import ProjectNew from "./components/ProjectNew"
import Wikipedia from "./components/Wikipedia"
import SignIn from "./components/auth/SignIn"




function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Wikipedia" element={<Wikipedia />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

function Home() {

  
  return (
    <>
      <Sidebar />
      <Typinglogo />
      <Between />
      <Vscode />
      <Between />
      <AboutMe />
      <SectionHeader header='WEB DEVELOPMENT' description='I have industry experience working as a front-end web developer, here are some featured projects.' />
      <ProjectNew />
      <ContactMe/>
      <Social />
    </>
  );
}

export default App;


