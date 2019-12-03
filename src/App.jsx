import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllQuotesPage from './pages/AllQuotesPage'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Who said that?</h1>
        <nav>
          <ul>
            <li>
              <Link to="/:allquotes">All Quotes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:allquotes" component={AllQuotesPage}></Route>
      </Switch>
    </Router>
  )
}

export default App
