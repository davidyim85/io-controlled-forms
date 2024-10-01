import { useState } from "react";


const App = () => {
     const [formData, setFormData] = useState({
        firstName: '', 
        lastName: ''
     })
     const [title, setTitle] = useState('full name will appear here')
     console.log(formData)
    return (
        <>
        <h2>{title}</h2>
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                setTitle(`form submitted with values ${formData.firstName} & ${formData.lastName}`)
                console.log(formData)
            }}
        >
            <label htmlFor='firstName'> FirstName: </label>
            <input
                name='firstName'
                value={formData.firstName}
                onChange={e => {
                    console.log(e.target)
                    setFormData({
                        ...formData,//we have 2 properties in this object. This spread in the object means "do not write over the other properties" that are not mentioned
                        [e.target.name]: e.target.value
                    })
                }}
            />


            <label htmlFor='lastName'> LastName: </label>
            <input
                name='lastName'
                value={formData.lastName}
                onChange={event => {
                    console.log(event.target)
                    setFormData({
                        ...formData,//we have 2 properties in this object. This spread in the object means "do not write over the other properties" that are not mentioned
                        [event.target.name]: event.target.value
                    })
                }}
            />
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default App;