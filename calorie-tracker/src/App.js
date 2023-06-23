import React from 'react';
import './App.css';

function App() {
   const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('../../backend/index.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Handle the response from the PHP script
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return(
    <div className="app">
       <h2>Calorie-tracker</h2>
             <form onSubmit={handleSubmit}>

        {/* <form action="../backend/index.php" method ="post"> */}
           <label for="name">Name</label>
           <input type="text" name="name" required/>
           <br />
           <label for="age" name="age">Age</label>
           <input type="number" name="age" min="5" max="100" />
           <br />
           <label htmlFor="gender">Gender</label>
           <select name="gender" >
              <option value="Select">Select</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
           </select>
           <br />
           <label htmlFor="weight">Weight( in kilograms )</label>
           <input type="text" name="weight" />
            <br />
            <label htmlFor="activity">Activity</label>
            <select name="activity" >
              <option value="Select">Select</option>
               <option value="Slow_pace">Slow Pace</option>
               <option value="Average_pace">Average Pace</option>
               <option value="Brisk_pace"> Brisk Pace</option>
                <option value="Race_walking">Fast Pace</option>
                <option value="Running6">Running(6 mph)</option>
                <option value="Running8">Running(8 mph)</option>
                <option value="Running10">Running(10 mph)</option>
            </select>
            <br />
            <label htmlFor="Hours">Hours</label>
            <input type="text" name="time" />
            <br />
            <input type="submit" name="Submit"/>            
           


       </form>

    </div>
  )
   
}

export default App;
