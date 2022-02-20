import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import classes from './contact.module.css'
import FooterJoin from './FooterJoin'
import Title from './Title'

// let text_area = document.getElementById('textarea');
// let user_name = document.getElementById("name");
// let user_email = document.getElementById('email');
// let submit_button = document.querySelector("#send")


export default class ContactMain extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       names : '',
       email : '',
       textArea : ''
    }
  }

  render() {

  let {names, email,textArea} = this.state

   const handleNameChange = (e) =>{
     this.setState({names : e.target.value})
     
   }

   const handleEmailChange = (e) =>{
    this.setState({email : e.target.value});
   }

   const handleTextAreaChange = (e) =>{
    this.setState({textArea : e.target.value})
   }

   const handleSubmit = (e) =>{
     console.log(names ,email, textArea);
     e.preventDefault();
   }


    return (
      <div>
        <section className={classes.contact}>
          <div className="container">
           
           <Title title="Contact"/>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className={classes.contact_inner_item}>
                <h3>Contact Qurno</h3>
                <p>I’m here to help and answer any question you might have. I look forward to hearing from you</p>
                <br />
                <h3>Hate forms?  <br />
                  Write an email or make a call</h3>
                 <a href="#" className=''> <i className="fa fa-envelope mr-2"> </i> blog@gmail.com</a>
                  <p href="#"> <i className="fa fa-phone"></i> +98 02 296 4902</p>
                
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <form action="" onSubmit={handleSubmit}>
              <div className={classes.contact_inner_item}>
                <h3 className='mb-3'>Contact form</h3>
                <div className={classes.contact_inputs_item}>
                  <textarea 
                    placeholder='Write Something' 
                    onChange={handleTextAreaChange}
                    required>
                  </textarea>

                  <input type="text" 
                     placeholder='Enter Your Name Here' 
                     id='name' 
                     value={this.names}
                     onChange={handleNameChange}
                     required
                  />

                  <input type="email" 
                    placeholder='Email address' 
                    id='email' 
                    onChange={handleEmailChange}
                    required
                  />   

                  <button 
                    id='send' 
                    type="submit"
                    
                    >Send <i className="fa fa-paper-plane mx-2"></i> 
                  </button>    

                </div>
              </div>
              </form>
            </div>
          </div>

           <FooterJoin />

          </div>
        </section>
      </div>
    )
  }
}
