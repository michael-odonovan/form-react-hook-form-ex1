import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <div className="App">

      <form onSubmit={handleSubmit(onSubmit)}>

      <h2>First React Hook Form</h2>

        <label for="firstName">First Name:</label>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="Enter your first name..." {...register("firstName")} />
        
        <label for="secondName">Second Name:</label>
        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="Enter your second name" {...register("secondName", { required: true })} />

        {/* create custom errors that will be returned when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input class="submitButton" type="submit" value="Submit Form" />

        <h2>My Name is:</h2>
        <div id="firstNameOutput"></div>
        <div id="secondNameOutput"></div>

      </form>
    </div>
  );
}

export default App;
