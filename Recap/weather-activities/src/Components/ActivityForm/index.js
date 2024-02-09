import "./ActivityForm.css";

export default function ActivityForm({ addActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const isForGoodWeather = event.target.elements.isForGoodWeather.checked;
    const newActivity = { name: name, isForGoodWeather: isForGoodWeather };
    addActivity(newActivity);
    event.target.reset();
  }
  return (
    <div className="form-container">
      <b>Add activity</b>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formRow">
          <label htmlFor="activity">Activity: </label>
          <input name="name" type="text" required></input>
        </div>
        <div className="formRow">
          <label htmlFor="weather-checkbox">For good weather? </label>
          <input name="isForGoodWeather" type="checkbox"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
