import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, linkUrl, match, subtitle }) => (
    <div className='menu-item' onClick={() => history.push(`${linkUrl}`)}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            {/* <h2 className='subtitle'>{subtitle && subtitle}</h2> */}
        </div>

    </div>
)

export default withRouter(MenuItem);