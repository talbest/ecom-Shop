import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './component/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import signInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.componenet';
import Header from './component/header/header.component';
import { auth } from './firebase/firebase.util'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,

    }
  }

  unsunscribeFromAuth = null

  componentDidMount() {
    this.unsunscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsunscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={signInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
