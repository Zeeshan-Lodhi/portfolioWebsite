import React, { Suspense } from 'react';
import Loader from './LOading/Loader';
const Navbar = React.lazy(() => import('./Navbar/Navbar'));
const Intro = React.lazy(() => import('./Homepage/Intro'));
const About = React.lazy(() => import('./About/About'));
const Project = React.lazy(() => import('./Project/Project'));
const Skill = React.lazy(() => import('./Skills/Skill'));
const Contact = React.lazy(() => import('./Contact/Contact'));
const Footer = React.lazy(() => import('./Footer/Footer'));
const App = () => {
    return (
        <>
            <div className='mainContainer'>
                <Suspense fallback={<div className='d-flex justify-content-center align-items-center'>{<Loader />}</div>}>
                    <Navbar />
                    <Intro />
                    <About />
                    <Project />
                    <Skill />
                    <Contact />
                    <Footer />
                </Suspense>
            </div>
        </>
    );
}

export default App;
