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

        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />
        
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />

        {/* create custom errors that will be returned when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input class="submitButton" type="submit" />

      </form>
    </div>
  );
}

export default App;
