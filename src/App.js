import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Stacks from "./components/Stacks";
import Projects from "./components/Projects";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 650px;
  background: #E0E5E9;
  box-shadow: 0px 4px 20px #D9D9D9;
  border-radius: 5px;
  padding: 40px;
  overflow-y: auto;
`;

const ColorfulTitle = styled.h1`
  font-family: 'EF_jejudoldam', sans-serif;
  font-size: 60px;
  text-align: center;
  margin-top: 20px;

  span {
    display: inline-block;
  }

  span:nth-child(1),
  span:nth-child(7) {
    color: #034694;
  }

  span:nth-child(2),
  span:nth-child(5),
  span:nth-child(8) {
    color: #DE3163;
  }

  span:nth-child(3),
  span:nth-child(6) {
    color: #FDA62D;
  }

  span:nth-child(9) {
    color: #29ADB2;
  }

  span:nth-child(4) {
    color: #176B87;
  }

`

const App = () => {
  return (
    <Page>
      
      <ColorfulTitle>
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </ColorfulTitle>
      <AboutMe />
      <Stacks />
      <Projects />
    </Page>
  );
}

export default App;
