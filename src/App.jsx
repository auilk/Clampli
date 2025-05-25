import { NavBar } from "./components/NavBar";
import NavLink from "./components/NavLink";
import GitIcon from "./assets/icons/github-icon.png";
import ClampliLogo from "./assets/logos/clampli-logo.png";
import DottedBG from "./components/DottedBG";
import UnitSelector from "./components/UnitSelector";


function App()
{
  return (
    <div className="flex flex-col h-dvh">
      {/* <NavBar gap={10}>
        <NavLink position="right" link="https://github.com/auilk"text="GitHub" fontSize={0.6} icon={GitIcon}></NavLink>
        <p position="center" className="text-white text-lg">Fluid type & layout—no math, just magic</p>
        <div position="left" className="w-15 mr-1.5 h-10 scale-160 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ClampliLogo})`,
          }}></div>
      </NavBar>
      <DottedBG></DottedBG> */}
      <UnitSelector></UnitSelector>
    </div>
  );
}

export default App;