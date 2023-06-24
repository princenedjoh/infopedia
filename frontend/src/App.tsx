import Router from './router/router';
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ThemeProvider theme = {theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
