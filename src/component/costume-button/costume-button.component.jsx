import React from "react";
import './costume-button.styles.scss'

const CostumeButton = ({ children, isGooglesignIn, ...otheProps }) => (
    <button className={`${isGooglesignIn ? 'google-sign-in' : ''} custom-button `}{...otheProps}>
        {children}
    </button>
)

export default CostumeButton