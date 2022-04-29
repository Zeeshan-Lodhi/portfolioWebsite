import React, { useEffect } from 'react'
import './project.css'
import note from '../../img/note-min.png'
import quiz from '../../img/quiz-min.png'
import event from '../../img/event-min.png'
import busines from '../../img/busines-min.png'
import todo from '../../img/todo-min.png'
import Aos from 'aos'
const Project = () => {
    useEffect(() => {
        // eslint-disable-next-line
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>

            <div data-aos="zoom-in">

                <h1 className='text-center mb-4 mt-3 crosal-heading'>SUCCESSFUL PROJECTS </h1>
                <div className="crosal"
                    id='Projects_Section'>
                    <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner ">

                            <div className="carousel-item active">
                                <a href="http://znote-keeper.herokuapp.com/" rel="noreferrer" target="_blank" >
                                    <img className="d-block w-100 opacity-50" src={note} alt="First slide" />
                                    <div className="carousel-caption  d-md-block text-dark">
                                        <h4 className='crosal-heading'>Note Keeper With Mern</h4>
                                        <p className='crosal-para'>Features : Login, Signup, Logout, Crud Notes, Profile Section</p>
                                    </div>
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="https://shani-quiz-hub.netlify.app/" rel="noreferrer" target="_blank" >
                                    <img className="d-block w-100 opacity-50" src={quiz} alt="Second slide" />
                                    <div className="carousel-caption  d-md-block text-dark">
                                        <h4 className='crosal-heading'>Quiz App With Reactjs</h4>
                                        <p className='crosal-para'>A Proper Quiz System</p>
                                    </div>
                                </a>
                            </div>

                            <div className="carousel-item">
                                <a href="http://teachercom-events.netlify.app/" rel="noreferrer" target="_blank" >
                                    <img className="d-block w-100 opacity-50" src={event} alt="Third slide" />
                                    <div className="carousel-caption  d-md-block text-dark">
                                        <h4 className='crosal-heading'>Search Events With Reactjs</h4>
                                        <p className='crosal-para'>Find Online Events</p>
                                    </div>
                                </a>
                            </div>


                            <div className="carousel-item">
                                <a href="https://z-todo.netlify.app/" rel="noreferrer" target="_blank" >
                                    <img className="d-block w-100 opacity-50" src={todo} alt="Third slide" />
                                    <div className="carousel-caption  d-md-block text-dark">
                                        <h4 className='crosal-heading'>Todo With Reactjs</h4>
                                        <p className='crosal-para'>Crud Todo</p>
                                    </div>
                                </a>
                            </div>

                            <div className="carousel-item">
                                <a href="https://shanitheweb.netlify.app/" rel="noreferrer" target="_blank" >
                                    <img className="d-block w-100 opacity-50" src={busines} alt="Third slide" />
                                    <div className="carousel-caption  d-md-block text-dark">
                                        <h4 className='crosal-heading'>With Reactjs</h4>
                                        <p className='crosal-para'>A Business Like Website</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" aria-roledescription=" button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only text-success">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Project