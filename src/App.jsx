import { useState } from "react";


const App = () => {
     const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
     })
    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                console.log(formData)
            }}
        >
            <label htmlFor='firstName'> FirstName: </label>
            <input
                name='firstName'
                value={formData.firstName}
                onChange={event => {
                    setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })
                }}
            />


            <label htmlFor='lastName'> LastName: </label>
            <input
                name='lastName'
                value={formData.lastName}
                onChange={event => {
                    setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    })
                }}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default App;