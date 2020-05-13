import React from "react";
import styled, { ThemeProvider } from "styled-components";

import SplitText from "./SplitText";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header>
          <SplitText copy="Wash Your Hands!" />
        </Header>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Header = styled.div`
  @keyframes scatter {
    0% {
      top: 0;
    }
    50% {
      top: -10px;
    }
    100% {
      top: 0px;
    }
  }

  font-size: 10rem;
  text-transform: uppercase;
  font-family: "Archivo Black", "Archivo", sans-serif;
  font-weight: normal;
  display: block;
  width: 666px;
  max-width: 80vw;
  min-height: 90px;
  height: auto;
  text-align: center;
  margin: 10rem auto;
  margin: auto;
  transform(translateY(50vh));

  color: ${props => props.theme.main};
  text-shadow: ${props => textShadow(0.25, 6, props.theme.shadow)};

  & span {
    position: relative;
    animation: scatter 1.75s infinite;
  }

  & span:nth-child(2n) {
    color: ${props => props.theme.secondary};
    text-shadow: ${props => textShadow(0.25, 6, props.theme.secondaryShadow)};
    animation-delay: 0.3s;
  }

  & span:nth-child(3n) {
    color: #ffd913;
    text-shadow: ${props => textShadow(0.25, 6, "#6EC0A9")};
    animation-delay: 0.15s;
  }

  & span:nth-child(5n) {
    color: #555bff;
    text-shadow: ${props => textShadow(0.25, 6, "#E485F8")};
    animation-delay: 0.4s;
  }

  & span:nth-child(7n), & span:nth-child(11n) {
    color: #ff9c55;
    text-shadow: ${props => textShadow(0.25, 7, "#FF5555")};
    animation-delay: 0.25s;
  }
`;

const theme = {
  main: "#5362F6",
  shadow: "#E485F8",
  secondary: "#ED625C",
  secondaryShadow: "#F2A063"
};

function textShadow(precision, size, color) {
  const length = size * (1 / precision);

  let shadows = [];
  for (let i = 1; i <= length; i++) {
    const offset = precision * i;
    shadows.push(`${offset}px ${offset}px ${color}`);
  }

  return shadows.join();
}
