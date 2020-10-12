import React from 'react';
import './header-styles.scss'

const Header = (props) => (
    <header className='front-header'>
    
        <h1>{props.title}</h1>
    
    </header>
)

export default Header;