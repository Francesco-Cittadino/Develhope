import {useRef, useEffect} from 'react';

// Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, 
// such as the model, the year and the color. Allow the form to 
// receive a initialData prop that contains the default values of each input, 
// and reset the form every time the initialData value changes.

export function CarDetails({ initialData = {model:"ford", year:1992, color:"white"} }) {
  
  const refFormModel = useRef('')
  const refFormYear = useRef('')
  const refFormColor = useRef('')

  useEffect(()=>{
    refFormModel.current.value = initialData.model
    refFormYear.current.value = initialData.year
    refFormColor.current.value = initialData.color
  },[initialData])
//   console.log(refForm.current)
function handleChange (){
  refFormModel.current.value = ""  
  refFormYear.current.value = ""  
  refFormColor.current.value = ""}
  
return (
    <form> 
      <label> Model:
        <input
          type="text" name="model" ref={refFormModel} onChange={handleChange} />
      </label>
      
      <label>
        Year:
        <input type="text" name="year" ref={refFormYear} onChange={handleChange} />
      </label>

      <label>
        Color:
        <input
          type="text" name="color" ref={refFormColor} onChange={handleChange} />
      </label>
    </form>
  );
}

