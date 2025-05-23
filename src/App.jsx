import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import DottedBG from "./components/DottedBG";
import Form from "./components/Form"; 

import GitIcon from "./assets/icons/github-icon.png"
import LinkedInIcon from "./assets/icons/linkedin-icon.png"
import ClampliLogo from "./assets/logos/clampli-logo.png"
import ClampResult from "./components/ClampResult";
import UnitSelector from "./components/UnitSelector";
import InputField from "./components/InputField";


function App()
{
  return (
    <>
      <header className="flex flex-col">
        <NavBar gap={10}>
          <NavLink 
            position="right" 
            link="https://github.com/auilk" 
            text="GitHub" 
            fontSize={0.6} 
            icon={GitIcon}
          ></NavLink>

          <NavLink 
            position="right" 
            link="https://www.linkedin.com/in/abdelghafour-lbaz/" 
            text="LinkedIn" 
            fontSize={0.6} 
            icon={LinkedInIcon}
          ></NavLink>

          <p 
            className="text-white text-lg" 
            position="center"
          >
            Fluid type & layout—no math, just magic
          </p>

          <div 
            className="w-15 mr-1.5 h-10 scale-160 bg-cover bg-center bg-no-repeat"
            position="left"
            style={{
              backgroundImage: `url(${ClampliLogo})`,
            }}
          ></div>
        </NavBar>
      </header>

      <main className="min-h-0 flex flex-grow">
        <div className="w-full h-full flex-[5%] border-r-2 border-white">
          <DottedBG></DottedBG>
        </div>
        
        <div className="flex flex-col justify-around h-full px-60 flex-[90%]">
          <div className="flex justify-between">
            <Form></Form>

            <Form></Form>
          </div>

          <ClampResult></ClampResult>
        </div>

        <div className="w-full h-full flex-[5%] border-l-2 border-white">
          <DottedBG></DottedBG>
        </div>
      </main>
    </>
  );
}

export default App;