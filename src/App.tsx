import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Notes } from '@Pages';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './styles/_layout.scss';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      // 'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/notes/">Notes</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact={true} component={Index} />
          <Route path="/notes/" component={Notes} />
          <Route path="/users/" component={Users} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default AppRouter;
