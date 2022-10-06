import React, {useEffect, useState} from 'react'
import emailjs from 'emailjs-com'

const Contact = (props) => {
    const [theme, setTheme] = useState(props.theme)
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    useEffect(() => {
        setTheme(props.theme)
    }, [props.theme])
    let themeOpposite = 'black';
    if(theme === 'light'){
        themeOpposite = 'black'
        document.body.classList.add('bg-light')
        document.body.classList.remove('bg-dark')
      } else{
        themeOpposite = 'white'
        document.body.classList.add('bg-dark')
        document.body.classList.remove('bg-light')
      }
    
    const handleName = (e) => {
        let len = e.target.value.length
        if(len < 1){
            setNameError("Name is required!")
        } else if(len < 3){
            setNameError("Name must be at least 2 characters")
        } else if(len > 2){
            setNameError("")
        }
    }
    const handleEmail = (e) => {
        let len = e.target.value.length
        if(len < 1){
            setEmailError("Email is required!")
        } else{
            setNameError("")
        }
    }
    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_9jqamxm', 'template_ff4q1f6', e.target, 'ZNqOJhp6SxlmkYlrL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
    }

    return (
        <>
        <div className="container d-flex align-items-center justify-content-center mt-3">
            <div className="row flex-wrap">
                <div className="col-lg-7 justify-content-center d-flex flex-column p-5 pt-0">
                <div className="mb-3">
                    {
                        document.body.clientWidth > 768 ?
                        <h1 className={`display-3 ${theme}`}>How can we Help?</h1>
                        :
                        <h1 className={`display-4 ${theme} mb-3`}>How can we Help?</h1>
                    }
                    <h5 className={`h4 ${theme}`}>Email or call us for any concerns.</h5>
                </div>
                    <form onSubmit={sendEmail} method='POST'>
                        { 
                        document.body.clientWidth > 768 ?
                        <>
                        <div className="row mb-3">
                        <div className="col">
                            <input className='form-control' type="text" placeholder='Name' onChange={handleName}/>
                                {
                                    nameError ?
                                    <p style={{color:'red'}}>{ nameError }</p> :
                                    ''
                                }
                        </div>
                        
                        <div className="col">
                            <input className='form-control' type="email" placeholder='Email' required onChange={handleEmail}/>
                                {
                                    emailError ?
                                    <p style={{color:'red'}}>{ emailError }</p> :
                                    ''
                                }
                        </div>
                        </div>
                        <div className="d-flex mb-3 justify-content-around align-items-center">
                            <h3 className={`${theme}`}>Choose Two:</h3>
                            <div className="form-check">
                                <input className={`${theme} form-check-input`} type="checkbox" value="Quality" name="quality" id="quality"/>
                                <label className={`${theme} form-check-label`} for="quality">
                                    Quality
                                </label>
                                </div>
                            <div className="form-check">
                                <input className={`${theme} form-check-input`} type="checkbox" value="Cheap" name="cheap" id="cheap"/>
                                <label className={`${theme} form-check-label`} for="cheap">
                                    Cheap
                                </label>
                            </div>
                            <div className="form-check">
                                <input className={`${theme} form-check-input`} type="checkbox" value="Fast" name="fast" id="fast"/>
                                <label className={`${theme} form-check-label`} for="fast">
                                    Fast
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea className='form-control' cols="30" rows="5" placeholder='Enter a message...' name='message'></textarea>
                        </div>
                        <div>
                                <button className="btn w-50 p-2" style={{backgroundColor: 'rgb(13,43,228)', color: 'white', fontWeight: 'bold'}}>Send {'>'}</button>
                        </div>
                        </>
                        :
                        <>
                        <div className="mb-3">
                            <input className='form-control' type="text" placeholder='Name' onChange={handleName}/>
                                {
                                    nameError ?
                                    <p style={{color:'red'}}>{ nameError }</p> :
                                    ''
                                }
                        </div>
                        
                        <div className="mb-3">
                            <input className='form-control' type="email" placeholder='Email' required onChange={handleEmail}/>
                                {
                                    emailError ?
                                    <p style={{color:'red'}}>{ emailError }</p> :
                                    ''
                                }
                        </div>
                        
                        <div className="d-flex mb-3 justify-content-around align-items-center">
                        <div className="form-check">
                            <input className={`${theme} form-check-input`} type="checkbox" value="Quality"/>
                            <label className={`${theme} form-check-label`} for="flexCheckDefault">
                                Quality
                            </label>
                            </div>
                        <div className="form-check">
                            <input className={`${theme} form-check-input`} type="checkbox" value="Cheap"/>
                            <label className={`${theme} form-check-label`} for="flexCheckChecked">
                                Cheap
                            </label>
                        </div>
                        <div className="form-check">
                            <input className={`${theme} form-check-input`} type="checkbox" value="Fast"/>
                            <label className={`${theme} form-check-label`} for="flexCheckChecked">
                                Fast
                            </label>
                        </div>
                        </div>
                        <div className="mb-3">
                            <textarea className='form-control' name="" id="" cols="30" rows="5" placeholder='Enter a message...' required></textarea>
                        </div>
                        <div>
                            <button className="btn w-100" style={{backgroundColor: 'rgb(13,43,228)', color: 'white', fontWeight: 'bold'}}>Send {'>'}</button>
                        </div>
                        </>
                        }
                    </form>
                </div>
                    {
                        document.body.clientWidth > 768 ?
                        <div className="col-lg-5 text-center d-flex flex-column p-5 pt-0">
                        <div className="mb-4 mt-4">
                        <h1 className={`display-5 ${theme} mb-3`}>Contact Info</h1>
                        <p className={`${theme}`}>We believe in getting the help you need. Please feel free to email or call us with any questions.</p>
                        <img className="image-fluid mt-3 mb-3" style={{width: "300px", height: "150px"}} src={ require('./imgs/icontransparent2.png') } alt=""/>
                        <div>
                        <h3 className={`${theme}`}>chevs.llc@gmail.com</h3>
                        <h3 className={`${theme}`}>817-260-5322</h3>
                        <a className={`${theme}`} href="https://www.google.com/maps/place/13261+Willow+Creek+Dr,+Haslet,+TX+76052/@32.9711953,-97.4037582,17.35z/data=!4m13!1m7!3m6!1s0x864dddb7bf8a84c1:0x815f369a67b19062!2sWillow+Creek+Dr,+Texas+76052!3b1!8m2!3d32.972291!4d-97.4036024!3m4!1s0x864dddc8367db65f:0x44c464fd2f79efea!8m2!3d32.9708021!4d-97.4033607" target={'_blank'} rel="noreferrer"><box-icon color={themeOpposite} type='solid' name='been-here'></box-icon></a>
                        </div>
                        </div>
                        </div>
                        :
                        <div className="col-lg-5 text-center d-flex flex-column pt-5">
                        <h1 className={`display-5 ${theme} mb-3`}>Contact Info</h1>
                        <p className={`${theme}`}>We believe in getting the help you need. Please feel free to email or call us with any questions.</p>
                        <img className="image-fluid mt-3 mb-3" style={{width: "300px", height: "150px"}} src={ require('./imgs/icontransparent2.png') } alt=""/>
                        <div className='mb-3'>
                        <h3 className={`${theme}`}>chevs.llc@gmail.com</h3>
                        <h3 className={`${theme}`}>817-260-5322</h3>
                        <a className={`${theme}`} href="https://www.google.com/maps/place/13261+Willow+Creek+Dr,+Haslet,+TX+76052/@32.9711953,-97.4037582,17.35z/data=!4m13!1m7!3m6!1s0x864dddb7bf8a84c1:0x815f369a67b19062!2sWillow+Creek+Dr,+Texas+76052!3b1!8m2!3d32.972291!4d-97.4036024!3m4!1s0x864dddc8367db65f:0x44c464fd2f79efea!8m2!3d32.9708021!4d-97.4033607" target={'_blank'} rel="noreferrer"><box-icon color={themeOpposite} type='solid' name='been-here'></box-icon></a>
                        </div>
                        </div>
                    }

            </div>
        </div>
        </>
    )
}
export default Contact