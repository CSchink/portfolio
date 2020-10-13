import React, { Component } from 'react';
import MenuItem from './menu-item';

class ProjectsDirectory extends Component {
    constructor() {
        super();

        this.state = {
            section: [
               
                {
                    title: 'History Lab',
                    imageUrl: 'https://scontent.flhr1-2.fna.fbcdn.net/v/t1.0-9/49132474_2138775929476813_6892757537473429504_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=R2IwcxTXI9UAX-722Yv&_nc_ht=scontent.flhr1-2.fna&oh=8d4044c723e94763333f48aca7d51604&oe=5FA48F12',
                    size: 'large',
                    id: 5,
                    linkUrl: '/projects/resume'
                },
                {
                    title: 'Portfolio',
                    imageUrl: 'https://banner2.cleanpng.com/20180720/zia/kisspng-react-javascript-library-web-development-vue-js-funding-icon-5b51604fbf7995.0841849115320597277843.jpg',
                    id: 1,
                    linkUrl: '/projects/portfolio'
                }
            ]
        }
    }

    render() {
        return (
            <div className='projects-directory-menu'>
                {this.state.section.map(({ id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />

                ))}
            </div>
        )
    }
}

export default ProjectsDirectory;