import React from "react";
import styled, { ThemeProvider } from "styled-components";

import SplitText from "./SplitText";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header>
          <SplitText copy="WASH YOUR HANDS!" />
        </Header>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Header = styled.div`
  color: ${props => props.theme.main};
  text-shadow: ${props => textShadow(0.25, 8, props.theme.shadow)};

  & span:nth-child(2n) {
    color: ${props => props.theme.secondary};
    text-shadow: ${props => textShadow(0.25, 8, props.theme.secondaryShadow)};
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
