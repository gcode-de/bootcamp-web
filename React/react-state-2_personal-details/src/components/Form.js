export default function Form({ name, setName, email, setEmail }) {
  function handleSubmit(event) {
    event.preventDefault();

    setName(event.target.elements.name.value);
    setEmail(event.target.elements.email.value);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder={name} />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder={email} />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
