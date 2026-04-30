import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

function fetchNotes(){
  axios.get('http://localhost:3000/api/notes')
.then((res) => {    //data call krke lekr aayegi wo hme then ke andr milega
  setNotes(res.data.notes)
})
}
  useEffect(() => {  //re render hone se prevent krta hai , ap 1 state variable ko change krte ho to wo jis component ke andr hai (App) usko br br re render krega ...to prevent from this we prefer to use UseEffect
    fetchNotes()
  }, []);

  function submitHandler(e){
    e.preventDefault() //page reload hone se rokega

    const{title,description} = e.target.elements
    console.log(title.value,description.value)
  }

  return (
    <>
      <form className="note-create-form" onSubmit={submitHandler}>
        <input name="title" type="text" placeholder="Enter title" />
         <input name="description" type="text" placeholder="Enter description" />
         <button>Create notes</button>
      </form>


      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
