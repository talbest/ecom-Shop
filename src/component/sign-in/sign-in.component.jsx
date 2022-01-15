import React from "react";
import FormInput from "../form-Input/form-input.component";
import CostumeButton from "../costume-button/costume-button.component";
import { auth, signInWithGoogle } from '../../firebase/firebase.util'
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',

        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} required label="email" />
                    <FormInput name="Password" type="password" value={this.state.password} handleChange={this.handleChange} required label="password" />
                    <div className="buttons">
                        <CostumeButton type='submit' value="submit form"> sign in</CostumeButton>
                        <CostumeButton onClick={signInWithGoogle} value="submit form" isGooglesignIn> sign in with google </CostumeButton>

                    </div>


                </form>
            </div>
        )
    }
}

export default SignIn;