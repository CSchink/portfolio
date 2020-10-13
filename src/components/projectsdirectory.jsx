import React, { Component } from 'react';
import MenuItem from './menu-item';

class ProjectsDirectory extends Component {
    constructor() {
        super();

        this.state = {
            section: [
               
                {
                    title: 'History Lab',
                    imageUrl: 'https://i.pinimg.com/originals/da/e8/4f/dae84fcc93531e41c701a349e55e3579.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: '/projects/resume'
                },
                {
                    title: 'Machine Learning',
                    imageUrl: 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1129869424%2F0x0.jpg%3Ffit%3Dscale',
                    id: 1,
                    linkUrl: '/projects/portfolio'
                },
                {
                    title: 'History Lab',
                    imageUrl: 'https://scontent.flhr1-2.fna.fbcdn.net/v/t1.0-9/49132474_2138775929476813_6892757537473429504_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=R2IwcxTXI9UAX-722Yv&_nc_ht=scontent.flhr1-2.fna&oh=8d4044c723e94763333f48aca7d51604&oe=5FA48F12',
                    size: 'large',
                    id: 5,
                    linkUrl: '/projects/resume'
                },
                {
                    title: 'Portfolio',
                    imageUrl: 'https://scontent.flhr1-2.fna.fbcdn.net/v/t1.0-9/49132474_2138775929476813_6892757537473429504_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=R2IwcxTXI9UAX-722Yv&_nc_ht=scontent.flhr1-2.fna&oh=8d4044c723e94763333f48aca7d51604&oe=5FA48F12',
                    size: 'large',
                    id: 5,
                    linkUrl: '/projects/resume'
                },
                {
                    title: 'Python & MYSql',
                    imageUrl: 'https://robots.net/wp-content/uploads/2019/11/Lozingle_10032014-1280x720.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: '/projects/python'
                },
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