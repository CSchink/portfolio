import React from 'react'
import './resume-styles.scss'
import 'primereact/resources/themes/saga-blue/theme.css';
import SyntaxComponent from '../components/syntax';
import Fade from 'react-reveal/Fade';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import '../styles/navigation.css'
import { MDBBtn, MDBCard, MDBSmoothScroll } from 'mdbreact';
import Header from '../components/header';
import BackButton from '../components/backbutton';



const Resume = () => (
    <MDBCard>

        <Header section="section1" title='History Lab' intro='A comprehensive database for students of science and history' />

        <div id="section1">

            <BreadcrumbsItem to={'/projects'} eventKey={2.1} compare={(a, b) => a.weight - b.weight} >
                Projects
        </BreadcrumbsItem>
            <BreadcrumbsItem glyph='resume' to={'/projects/resume'} eventKey={2.2} compare={(a, b) => a.weight - b.weight}>
                History Lab
        </BreadcrumbsItem>


            <div className='container '>

                <h1 className='heading' style={{
                    paddingTop: '60px',
                    textAlign: 'center'
                }}> History Lab </h1>
                <br></br>

                <Fade right>
                    <div>

                        <h3 >Project Overview</h3>


                        <p>As something of a history nerd I began this project with a simple goal in mind - create a place where I can catalog a vast amount of data, spanning centuries, into an easy-to-retrieve system</p>
                        <p className='paragraph'>History Lab has been incarnated in three different forms over the course of my 3-year learning career.</p>
                    </div>
                    <div>
                        <ol>


                            <li>In its first form it was a simple card-display system, mapping through an array of cards which would populate the screen with little to no sorting, filtering, or searching functionality.
                    </li>

                            <li>In its second incarnation it involved the usage of MUI datatables for the filtering and sorting of data, and the inclusion of MongoDB for data storage</li>

                            <li>However, though data manipulation was greatly increased, data security was not.</li>

                            <li>Now, in its third incarnation, History Lab has user authentication, a complex data entry, editing, retrieval, and manipulation system, as well as personal profiles, news feeds, and notifications</li>


                        </ol>
                    </div>

                    <MDBSmoothScroll to='section2'>
                        <MDBBtn className='float-right' color='elegant'>
                            Continue
                    </MDBBtn>
                    </MDBSmoothScroll>

                </Fade>


                <Fade left>
                    <div style={{ paddingTop: '300px' }}></div>
                    <div id='section2' >

                        {/* <div style={{ paddingTop: '350px' }} /> */}
                        <h3>User Authentication</h3>
                        <p className='paragraph'>The login functionality first takes a simple form component.  Upon form submission
                    the Express server requests the relevant user documents from MongoDB.</p>
                        <div className='column'>
                            <img alt='' className='centerimage' src={require("../assets/login.PNG")} />
                            <SyntaxComponent text={
                                `async function userCheck(client, username, password) {
                        const cursor = await client.db("historylab").collection("logindata").find({});
                        let results = await cursor.toArray();
                        let confirmation = results.some(function (result) {
                            if (result.user === username && result.password === password) 
                            { return true; } 
                            else { return false; }
                                });
                        return confirmation;
                            }`} />
                        </div>
                        <div><MDBSmoothScroll to='section3'>
                            <MDBBtn className='float-right' color='elegant'>
                                Continue
</MDBBtn>
                        </MDBSmoothScroll></div>
                        <div style={{ paddingTop: '300px' }}></div>
                        <div id='section3'></div>
                        <Fade right>
                        <p className='paragraph'>The MongoDB .find() method returns a large JSON object, while the toArray()
                    method converts this data to the array of documents we are looking for. </p>
                        <p className='paragraph'>Once we retrieve confirmation sessionStorage
                    is set with a token and notifications are retrieved from the database</p>
                        <div >
                            <SyntaxComponent text={`async function returnAccount(token) {
    
    const account = await getAccount({ user: username, password: password }, token);
    const notifications = await PusherContext.retrieveNotifications({User: account.user})
      accountContext.setAccount({
       user: account.user,
       image: account.image,
       notifications: notifications
      });
      
  }`} />
                        </div>

                        <MDBSmoothScroll to='section4'>
                            <MDBBtn className='float-right' color='elegant'>
                                Continue
</MDBBtn>
                        </MDBSmoothScroll>
                        </Fade>
                        <div style={{ paddingTop: '300px' }}></div>
                    <div id='section4'></div>
                    <Fade left>
                        <p>Finally, the profile page is displayed.</p>
                        <img alt='' className='centerimage' src={require("../assets/feedpage.PNG")} />

                        </Fade>
                    </div>
                    <MDBSmoothScroll to='section5'>
                            <MDBBtn className='float-right' color='elegant'>
                                Continue
</MDBBtn>
                        </MDBSmoothScroll>
                        <div style={{ paddingTop: '300px' }}></div>
                    <div id='section5'></div>
                    <p>...and the news feed is populated</p>


                    <div>
                        <img alt='' className='centerimage' src={require("../assets/feedpage2.PNG")} />
                    </div>

                    <hr />
                    <div>
                        {/* <SyntaxComponent text={`import React from 'react'
import { hasToken } from '../util/tokenutil';
import history from '../util/historyutil';

const AuthContext = React.createContext()
function AuthProvider(props) {

  const [loggedIn, setloggedIn] = React.useState(hasToken());
  const login = (token) => { 
    sessionStorage.setItem("token", token)
    setloggedIn(true)
    
    // history.push('/data')
    } 
  const logout = () => { 
      setloggedIn(false)
      // sessionStorage.removeItem('token');
      sessionStorage.clear();

    //   history.push('/') 
} 
  return (
    <AuthContext.Provider value={{loggedIn, login, logout}} {...props} />
  )
}
const useAuth = () => React.useContext(AuthContext)
export {AuthProvider, useAuth}`} /> */}
                    </div>

                    <p>...and now the user can access the three tables, each painstakingly designed over 3 years
                    to categorize scientific, historical, and philosophical data.
                   </p>
                    <img alt='' className='centerimage' src={require("../assets/tables.PNG")} />
                    <p>
                        They can enter data, edit it, and each interaction they make with the tables is recorded in MongoDB
                        for use with the notifications system and news feed.
            </p>
                    <SyntaxComponent text={`export async function newNotifications(request) {
            return instance.post("/newnotifications", request, {
                headers: { authorization: token() },
            });`} />
                </Fade>
            </div>


        </div>
        <BackButton url='/projects' />
    </MDBCard>
)

export default Resume;