import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
    <div className='menu-item' onClick={() => history.push(`${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
        </div>

    </div>
)

export default withRouter(MenuItem);