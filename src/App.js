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
  text-shadow: 6px 6px ${props => props.theme.shadow};
`;

const theme = {
  main: "#5362F6",
  shadow: "#E485F8"
};
