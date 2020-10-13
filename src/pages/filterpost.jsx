import { MDBCard } from 'mdbreact';
import React from 'react';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import Header from '../components/header';
import './resume-styles.scss'
function FilterPost() {
    return (
        <div>
            <Header section='section1' title='Building a Cascading Filter' intro="It's just as difficult as you'd imagine" />
            <BreadcrumbsItem to={'/blog'} eventKey={2.1} compare={(a, b) => a.weight - b.weight} >
                Blog
            </BreadcrumbsItem>
            <BreadcrumbsItem glyph='resume' to={'/cascadingfilter'} eventKey={2.2} compare={(a, b) => a.weight - b.weight}>
                Cascading Filter
            </BreadcrumbsItem>
            
            <MDBCard id='section1' style={{paddingTop: '80px'}}>
                <h1 className='heading'> Part 1 </h1>
                <h2 style={{textAlign: 'center'}}>Identifying the Problem</h2>
                <br>
                </br>
                <p></p>
            </MDBCard>
        </div>
    )
}

export default FilterPost;