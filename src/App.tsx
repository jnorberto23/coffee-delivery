import { ThemeProvider } from "styled-components";
import { Container } from "./styles";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        Feeling
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  )
}

export default App
