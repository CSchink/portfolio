import React, { Component } from 'react';
import AboutCard from './aboutcard';
import MenuItem from './menu-item';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            section: [

                {
                    title: 'Practice',
                    imageUrl: 'https://banner2.cleanpng.com/20180720/zia/kisspng-react-javascript-library-web-development-vue-js-funding-icon-5b51604fbf7995.0841849115320597277843.jpg',
                    id: 1,
                    linkUrl: '/projects'
                },

                {
                    title: 'Theory',
                    imageUrl: 'https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png',
                    size: 'large',
                    id: 5,
                    linkUrl: '/blog'
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.section.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />

                ))}
                
            </div>
        )
    }
}

export default Directory;