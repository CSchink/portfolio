import React, { Component } from 'react';
import MenuItem from './menu-item';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            section: [{
                title: 'React',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
            },
            {
                title: 'MongoDB',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
            },
            {
                title: 'Express Server',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
            },
            {
                title: 'Blog',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
            },
            {
                title: 'Resume',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
            }
        ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.section.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps}/>

                ))}
            </div>
        )
    }
}

export default Directory;