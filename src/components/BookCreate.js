import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div className="book-create">
        <h3>Add a Book</h3><br />
      <form onSubmit={handleSubmit}>
        <label className="title-create">Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">CREATE</button>
      </form>
    </div>
  );
}

export default BookCreate;
