import styled from "styled-components";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io"
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";

const Title = styled.h1`
  font-family: 'Cafe24Supermagic-Bold-v1.0', sans-serif;
  font-size: 40px;
  margin: 0;
`;

const StackContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #d8dbe7;
  border-radius: 20px;
  color: #3f3f3f;
  margin: 10px;
  margin-bottom: 40px;
  padding: 2px 12px;
  font-size: 20px;
  font-family: 'JeonjuCraftGoR', sans-serif;
`;

const ColoredIcon = styled.div`
  color: #808080;
  margin-right: 5px;
  margin-top: 5px;
`;

const Stacks = () => {
  return(
    <div>
      <Title>Stacks</Title>
      <StackContainer>
        <Stack>
          <ColoredIcon><IoLogoHtml5 /></ColoredIcon> HTML
        </Stack>
        <Stack>
          <ColoredIcon><IoLogoCss3 /></ColoredIcon> CSS
        </Stack>
        <Stack>
          <ColoredIcon><IoLogoJavascript /></ColoredIcon> JavaScript
        </Stack>
        <Stack>
          <ColoredIcon><IoLogoReact /></ColoredIcon> React
        </Stack>
      </StackContainer>
    </div>
  );
}

export default Stacks;