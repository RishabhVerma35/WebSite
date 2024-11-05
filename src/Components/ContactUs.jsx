import React, {useState} from "react";
import axios from "axios";



function ContactForm() {
    const [formData,setFormData] = useState({
        Name : "",
        EmailAddress: "",
        Message: "",
      });

    const [submitted,setSubmitted] = useState(false);

    function handleChange(event)
  {
    const { name, value }  = event.target;
    setFormData((prevData) => (
      {
        ...prevData,
        [name]: value
      }
    ))
    

  }
  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(event);
    const apiUrl = "https://4688o31gz5.execute-api.ap-south-1.amazonaws.com/";
    axios.post(apiUrl,{formData})
    .then((response) => {
      console.log("This is the response => ",response);
      setSubmitted(true);
    })
    .catch((error) => {
      console.log(error);
      setSubmitted(false);
    });
  }
    return (
        <form onSubmit={handleSubmit} id ="contact-us">
            <div class="mb-1">
                <label for="Name" class="form-label float-start" >Your Full Name</label>
                <input type="text" class="form-control"  name="Name" onChange={handleChange} />

            </div>

            <div class="mb-3 mt-2">
                <label for="exampleInputEmail1" class="form-label float-start">Your Email Address</label>
                <input type="email" class="form-control" name="Email" aria-describedby="emailHelp"onChange={handleChange} />

            </div>

            <div class="mb-3">
                <label for="Message" class="form-label float-start">Message</label>
                <input type="text" class="form-control p-3"  name="Message" onChange={handleChange} />

            </div>
            {submitted && <p>Message is send Successfully, We would contact you as soon as possible!</p>}
            <button type="submit" class="btn btn-primary">Send Message</button>
           
        </form>
    )
}

function ContactUs() {
    return (

        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <h1>Stay Turned!</h1>
                    <div className="mb-3">
                        <a href="https://discord.com" target="_blank" class="link">Discord</a>
                    </div>
                    <div className="mb-3">
                        <a href="https://facebook.com" target="_blank" class="link">Facebook</a>
                    </div>
                    <div className="mb-3">
                        <a href="https://linkedin.com" target="_blank" class="link">LinkedIn</a>
                    </div>
            </div>
            <div class="col">
                <h1>Need to contact us?</h1>
                <ContactForm />
            </div>

        </div>
        </div >
    );
}

export default ContactUs;
