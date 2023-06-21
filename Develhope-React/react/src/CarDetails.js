import {useState, useRef} from 'react';

// Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, 
// such as the model, the year and the color. Allow the form to 
// receive a initialData prop that contains the default values of each input, 
// and reset the form every time the initialData value changes.

export function CarDetails({ initialData }) {
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;

  };

  const refFormModel = useRef('')
  const refFormYear = useRef('')
  const refFormColor = useRef('')
//   console.log(refForm.current)

  return (
    <form  onSubmit={handleSubmit}> 
      <label> Model:
        <input
          type="text" name="model" ref={refFormModel} onChange={handleInputChange} />
      </label>
      
      <label>
        Year:
        <input type="text" name="year" ref={refFormYear} onChange={handleInputChange} />
      </label>

      <label>
        Color:
        <input
          type="text" name="color" ref={refFormColor} onChange={handleInputChange} />
      </label>
    </form>
  );
}

