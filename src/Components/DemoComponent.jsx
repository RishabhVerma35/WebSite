import React, { useState } from 'react';
import axios from 'axios';

// Style for the modal overlay
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const formStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
};

// Main Component
function DemoComponent() {
    const [showForm, setShowForm] = useState(false);
    const [formData,setFormData] = useState("");

    const handleChange = (event) =>{
        setFormData(event.target.value);
    }

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const apiUrl = "https://wjjmauihn9.execute-api.ap-south-1.amazonaws.com";
        axios.post(apiUrl, { formData })
            .then((response) => {
                
        console.log("This is demo response => ", response.data);
             
            })
            .catch((error) => {
                console.log(error);
               
            });
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
                <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 gap-3"
                    onClick={handleButtonClick}
                >
                    Book a Free Demo
                </button>
            </div>

            {showForm && (
                <div style={modalOverlayStyle} onClick={handleCloseForm}> { }
                    <div style={formStyle} onClick={(e) => e.stopPropagation()}> { }

                        <form onSubmit={handleSubmit} >
                            <h3 className='text-dark'>Enjoy a complimentary one-day trial of our product!</h3>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-center w-5" >Email</label>
                                <input type="email" className="form-control" placeholder='Email'name="Email"  onChange={handleChange}  required />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-secondary" onClick={handleCloseForm}>Close</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default DemoComponent;
