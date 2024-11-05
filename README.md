# Project Title: ClimeCast
<img width="934" alt="climecast - 1" src="https://github.com/user-attachments/assets/6372bbff-c77f-4822-8234-735c10fb742f">
<img width="875" alt="climeCast-2" src="https://github.com/user-attachments/assets/f11305e4-1497-4eb2-92f4-27e225172098">


### Overview
ClimeCast is a responsive website built with React, featuring smooth animations and a live counter displaying the number of users currently in touch with the service. It Also User Verification Through Email By using AWS SES. The backend, powered by AWS Lambda and API Gateway, is integrated to retrieve the item count from DynamoDB and store new entries, such as user emails.

---

### Features

- **Frontend with React**: Displays the current item count in a visually styled component.
- **Backend with AWS Lambda**: Interacts with DynamoDB to retrieve and store user data.
- **API Gateway Integration**: Provides secure access to Lambda functions.
- **Axios Integration**: Fetches data from AWS API Gateway in the React frontend.
- **AWS SES**: Sends a confirmation email after storing new user records in DynamoDB.

---

### Project Structure

- **`src/`**: Contains the React frontend code.
  - `CurrentTableSize` component: Calls the backend API to fetch and display the current item count.
- **`lambda_functions/`**: Contains AWS Lambda code for:
  - Storing user data in DynamoDB
  - Sending confirmation emails via AWS SES
- **DynamoDB Table**: Stores user data and related information.
- **AWS SES (Simple Email Service)**: Used for email notifications.

---

### Requirements

- **Node.js** and **npm**: For installing dependencies and running the project.
- **AWS Account**: To set up DynamoDB, API Gateway, Lambda, and SES.
- **axios**: For making HTTP requests in the frontend.
- **React Spring**: Adds smooth animations to the interface.

---

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/RishabhVerma35/WebSite.git
   cd WebSite
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

---

### Frontend Code Explanation

#### CurrentTableSize Component

This component fetches data from the API endpoint and displays the current item count. It uses `useState` to track changes and `useEffect` to fetch data on component mount.

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentTableSize = () => {
    const [currSize, setCurrSize] = useState(0);
    const apiUrl = "https://wjjmauihn9.execute-api.ap-south-1.amazonaws.com";

    useEffect(() => {
        axios.get(apiUrl)
            .then((response) => {
                setCurrSize(response.data);
                console.log("Table size:", response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <h4 className="text-secondary">As of now, more than <h1 className="text-white">{currSize}</h1> companies are utilizing our services!</h4>
        </div>
    );
};

export default CurrentTableSize;
```

#### DemoComponent

The `DemoComponent` allows users to request a demo by submitting their email, which is sent to an API Gateway. Upon submission, AWS SES sends a verification email to the user.

```javascript
import React, { useState } from 'react';
import axios from 'axios';

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

function DemoComponent() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState("");

    const handleChange = (event) => {
        setFormData(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const apiUrl = "https://wjjmauihn9.execute-api.ap-south-1.amazonaws.com";
        axios.post(apiUrl, { formData })
            .then(response => console.log("Demo response:", response.data))
            .catch(error => console.error(error));
    };

    return (
        <>
            <button onClick={() => setShowForm(true)} className="btn btn-primary">Book a Free Demo</button>
            {showForm && (
                <div style={modalOverlayStyle} onClick={() => setShowForm(false)}>
                    <div style={formStyle} onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleSubmit}>
                            <h3>Enjoy a complimentary one-day trial of our product!</h3>
                            <input type="email" onChange={handleChange} required placeholder="Email" />
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" onClick={() => setShowForm(false)} className="btn btn-secondary">Close</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default DemoComponent;
```

---

### Backend Lambda Functions

The backend includes two primary Lambda functions:

1. **User Data Storage**: Saves user information in DynamoDB.

```python
import json
import boto3
import uuid
import time

unique_id = str(uuid.uuid4()) 
rand_token = str(uuid.uuid4())

dynamodb = boto3.resource('dynamodb')
myTable = dynamodb.Table('UserLogin_Database')
ses_client = boto3.client('ses')


    # store data get from api into dynamoDB
def lambda_handler(event, context):
    # TODO implement
    #storing data from event
    print("Received event: ", event)

    if 'body' in event:
        
        myData = json.loads(event['body'])
        form_data = myData.get("formData")
        
        
       
        Name = form_data['Name']
        EmailAddress = form_data['Email']
        Message = form_data['Message']
        
    
        #object that i put in my table
        item = {
            'id': unique_id,
            'Name': Name,
            'EmailAddress': EmailAddress,
            'Message': Message,
            'token': rand_token
        }
       
        myTable.put_item(Item = item)
        
            
        
    return {
        'statusCode': 200,
        'body': json.dumps("Hello From Lambda")
    }

```

2. **Send Verification Email**: AWS SES sends a verification link to the user after they submit their email.

```python
import json
import boto3
import uuid

ses_client = boto3.client('ses')
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('chimeDemoTesting')

def lambda_handler(event, context):
    form_data = json.loads(event['body']).get("formData")
    item = {
        'id': str(uuid.uuid4()),
        'EmailAddress': form_data,
        'verify': False
    }
    table.put_item(Item=item)

    ses_client.send_email(
        Source='your_email@example.com',
        Destination={'ToAddresses': [form_data]},
        Message={
            'Subject': {'Data': 'Chime Product Free Tier'},
            'Body': {'Text': {'Data': f"Please verify your email: {form_data}"}}
        }
    )

    return {
        'statusCode': 200,
        'body': json.dumps("Verification email sent")
    }
```
