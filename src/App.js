import {useState} from "react";

function App() {
  const[name, setName] = useState("")
  const updateName = (e) => setName(e.target.value);
  const[email, setEmail] = useState("");
  const updateEmail = (e) => setEmail(e.target.value);
  const [message, setMessage] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setMessage(true)
  }

  const[interestChecked, setInterestChecked] = useState({
    Tech: false,
    Design: false,
    Marketing: false,
  });
   
  const handleChecked = (e) =>  setInterestChecked({ ...interestChecked, [e.target.id]: e.target.checked });

  

  return (
    <main>
      <h1>Hi, I'm Odin</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <form onSubmit={submitForm}>
      <h4>Name</h4>
      <label htmlFor='name'>Enter name</label>
      <input
       type='text'
       value={name}
       id='name'
       onChange={updateName}
      />
      <h4>Email</h4>
      <label htmlFor='email'>Enter email</label>
      <input
       type='text'
       value={email}
       id='email'
       onChange={updateEmail}
      />
      <h4>Interest:</h4>
          <input
          type="checkbox"
          id="Tech"
          checked={interestChecked.Tech}
          aria-checked={interestChecked.Tech}
          onChange={handleChecked}
        />
        <label htmlFor="Tech">Tech</label>
        <input
          type="checkbox"
          id="Design"
          checked={interestChecked.Design}
          aria-checked={interestChecked.Design}
          onChange={handleChecked}
        />
        <label htmlFor="Design">Design</label>
        <input
          type="checkbox"
          id="Marketing"
          checked={interestChecked.Marketing}
          aria-checked={interestChecked.Marketing}
          onChange={handleChecked}
        />
        <label htmlFor="Marketing">Marketing</label>
         <button type='submit'>Submit</button>
      </form>
      {message ? <h2>Thanks for signing up</h2> : null}
      <div>

       
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
    </main>
  );
}

export default App;
