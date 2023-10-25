import Router from './router/router';
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import Context from './context/context';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Context.Provider 
        value={
          [toast, ToastContainer]
        }
      >
        <ThemeProvider theme = {theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Context.Provider>
    </div>
  );
}

export default App;
