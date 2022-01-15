import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './component/shop/shop.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import signInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.componenet';
import Header from './component/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {


  unsunscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsunscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })

      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsunscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currenUser ? (<Redirect to='/' />) 
          : (<signInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapDisapatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDisapatchToProps)(App);
