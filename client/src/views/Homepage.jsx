import React, {useState, useEffect} from 'react'
import './styles/homepage.css'
import {Card} from '@mui/material'
import {Link} from 'react-router-dom'
import 'boxicons'
import { getAllProjects } from '../services/internalApiService'
import FlipCard from './FlipCard'

const Homepage = (props) => {
    const [theme, setTheme] = useState(props.theme)
    let themeOpposite = 'dark'
    if(theme === 'light'){
        themeOpposite = 'dark'
    } else{
        themeOpposite = 'light'
    }
    
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setTheme(props.theme)
        getAllProjects()
        .then((data) => {
            setProjects(data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [props.theme])

    return (
        <>
        <div id='mainContainer'>
                <div className={`bannerContainer`}>
                    <div id="mainCard" elevation={10} className={`card card-${theme} banner bg-${theme}`}>
                    <h1 id='bannerTitle' className={`${theme}`}>YOU BREAK IT WE FIX IT!</h1>
                    <h2 id='bannerSubtitle' className={`${theme}`}>Complete ATV Repairs</h2>
                    <h3 id='bannerFinaltitle' className={`${theme}`}> Location: Haslet, Texas</h3>
                    <Link id='bannerBtn' className={`btn btn-dark mt-3`} to="/contact">Get Scheduled</Link>
                    </div>
                </div>
                <div>
                    {
                        theme === 'light' ?
                        <img className="image-fluid" id="bannerImg" style={{width: "750px", height: "600px"}} src={ require('./imgs/image8.png') } alt=""/>
                        :
                        <img className="image-fluid" id="bannerImg" style={{width: "750px", height: "600px"}} src={ require('./imgs/image8dark.png') } alt=""/>

                    }

                </div>
        </div>
        <section id="middleContainer" className='mb-5'>
            <div className="container">
                <form>
                <h1 id="middleTitle" className={`text-center m-5 ${theme}`}>Choose Two Types of Service:</h1>
                <div className="row justify-content-center gap-4">
                    <Card id="card1" className='col-lg-3 p-5'>
                        <div className="text-center">
                        <h1 className='text-center m-3'>QUALITY</h1>
                        <box-icon name='check-circle' type='solid' color='#fcfcfc' ></box-icon>
                        </div>
                        <p className='mt-2'>This Service is best for quality work. We want your ATV to be in the best shape and repaired in OE fashion.</p>
                    </Card>  
                    <Card id="card2" className='col-lg-3 p-5'>
                        <div className="text-center">
                        <h1 className=' m-3'>CHEAP</h1>
                        <box-icon type='solid' name='wallet'></box-icon>
                        </div>
                        <p className='mt-2'>This Service is best when you're on a budget. We know you are most likely on a budget.</p>
                    </Card>
                    <Card id="card3" className='col-lg-3 p-5'>
                        <div className="text-center">
                        <h1 className='m-3'>FAST</h1>
                        <box-icon name='timer' type='solid' color='#fcfcfc' ></box-icon>
                        </div>
                        <p className='mt-2'>This Service is best for speed. We understand you might have a deadline .</p>
                    </Card>
                </div>
                <div className='text-center m-5'>
                <Link type="submit" className={`btn btn-secondary btn-lg btn-${themeOpposite}`} to="/contact">Get Scheduled</Link>
                </div>
                </form>
            </div>
        </section>
        <section>
            <div className="container mb-5">
            <div className="row">
            <div className="text-center">
                <h1 className={`mb-5 ${theme}`}>We Fix The Best </h1>
            </div>
            <div className="col-12">
            <div id="carouselExampleIndicators" className={`carousel carousel-${themeOpposite} slide`} data-bs-ride="true">
                {
                    document.body.clientWidth < 768?
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    {
                            projects.slice(0,1).map((project, i) => {
                            return (
                                <FlipCard project={project} key={i} className="w-100" data-bs-interval="10000"/>  
                            )
                        })
                    }
                    </div>
                    {
                            projects.slice(1).map((project, i) => {
                            return (
                                <div key={i} className="carousel-item">
                                <FlipCard project={project} className="w-100" data-bs-interval="10000"/>  
                                </div>
                            )
                        })
                    }                   
                </div>
                :
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    {
                            projects.slice(0,3).map((project, i) => {
                            return (
                                <FlipCard project={project} key={i} className="w-100" style={{height: "217px"}} data-bs-interval="10000"/>  
                            )
                        })
                    }
                    </div>
                    <div className="carousel-item ">
                    {
                            projects.slice(3,6).map((project, i) => {
                            return (
                                
                                <FlipCard project={project} key={i} className="w-100" data-bs-interval="10000"/>  
    
                            )
                        })
                    }     
                    </div>              
                </div> 
                }
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
            </div>
        </section>
        <section>
            <div className="container h-50">
                <h1 className={`text-center mb-5 ${theme}`}>We are family</h1>
                <div className="row">
                    <div className="col-lg-4 mb-4 ">
                        {
                            document.body.clientWidth > 768 ?   
                            <img className='w-100' style={{objectFit: 'cover', height: '79%'}} src={ require('./imgs/image1.png') } alt=""/>
                            :
                            <img className='w-100' style={{objectFit: 'cover'}} src={ require('./imgs/image1.png') } alt=""/>
                        }
                    </div>
                    <div className="col-lg-8 d-flex flex-column gap-4">
                    <img className='w-100 h-25 mr-5' style={{objectFit: 'cover'}} src={ require('./imgs/image6.png') } alt=""/>
                    <img className='w-100 h-50' style={{objectFit: 'cover'}} src={ require('./imgs/image4.png') } alt=""/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Homepage