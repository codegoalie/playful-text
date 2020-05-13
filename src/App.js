import React from "react";
import styled, { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header>
          <p>WASH YOUR HANDS</p>
        </Header>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Header = styled.div`
  color: ${props => props.theme.main};
  text-shadow: ${props => textShadow(0.25, 8, props.theme.shadow)};
`;

const theme = {
  main: "#5362F6",
  shadow: "#E485F8"
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
