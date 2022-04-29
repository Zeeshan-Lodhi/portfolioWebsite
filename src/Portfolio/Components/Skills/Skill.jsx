import Aos from 'aos'
import React, { useEffect } from 'react'
import './skill.css'
const Skill = () => {
    useEffect(() => {
        // eslint-disable-next-line
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <>
            <section className="section skills"
                data-aos="zoom-in"
                id='Skills_Section'>
                <div className="container">
                    <div className="row responsive">
                        <div className="col-md-12">
                            <div className="skills_section text-center">
                                <div className="skill-head">
                                    <h1 className="font-60">
                                        MY SKILLS
                                    </h1>

                                </div>

                                <div className="skills-area">
                                    <div className="single-skill">
                                        <div className="circlechart" data-percentage="92"><svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" strokeDasharray="85,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info">   <text className="circle-chart__percent" x="17.9" y="15.5">80%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            HTML5
                                        </text> </g></svg></div>
                                    </div>

                                    <div className="single-skill">
                                        <div className="circlechart" data-percentage="90"><svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" strokeDasharray="80,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info">   <text className="circle-chart__percent" x="17.9" y="15.5">75%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            CSS3
                                        </text> </g></svg></div>
                                    </div>

                                    <div className="single-skill">
                                        <div className="circlechart" data-percentage="85"><svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" strokeDasharray="78,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info">   <text className="circle-chart__percent" x="17.9" y="15.5">70%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            Javascript
                                        </text> </g></svg></div>
                                    </div>

                                    <div className="single-skill">
                                        <div className="circlechart" data-percentage="82"><svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" strokeDasharray="80,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info">   <text className="circle-chart__percent" x="17.9" y="15.5">75%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            ReactJs
                                        </text> </g></svg></div>
                                    </div>

                                    <div className="single-skill">
                                        <div className="circlechart" data-percentage="82"><svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" strokeDasharray="85,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info">   <text className="circle-chart__percent" x="17.9" y="15.5">80%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            Bootstrap/Material
                                        </text> </g></svg></div>
                                    </div>

                                    <div className="single-skill">
                                        <div className="circlechart" data-percentage="82"><svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" strokeDasharray="65,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info">   <text className="circle-chart__percent" x="17.9" y="15.5">60%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            NodeJs
                                        </text> </g></svg></div>
                                    </div>

                                    <div className="single-skill">
                                        <div className="circlechart" data-percentage="82"><svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" strokeDasharray="85,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info">   <text className="circle-chart__percent" x="17.9" y="15.5">80%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            MongoDb
                                        </text> </g></svg></div>
                                    </div>

                                    <div className="single-skill">
                                        <div className="circlechart" data-percentage="82"><svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle className="circle-chart__background" cx="16.9" cy="16.9" r="15.9"></circle><circle className="circle-chart__circle success-stroke" strokeDasharray="95,100" cx="16.9" cy="16.9" r="15.9"></circle><g className="circle-chart__info">   <text className="circle-chart__percent" x="17.9" y="15.5">90%</text><text className="circle-chart__subline" x="16.91549431" y="22">
                                            Redux/Git
                                        </text> </g></svg></div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        </>
    )
}

export default Skill