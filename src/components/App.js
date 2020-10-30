import React, {useState} from 'react';
import {db} from '../firebase'

function App() {
  const [input,setInput] = useState({title:'', body:'',notes:{}});
  const [loader,setLoader] = useState(false);


  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  /* function renderNotes(){ } */

function handleSubmit(e){
    e.preventDefault();
    setLoader(true);
      const note ={
        title:input.title,
        body:input.body
      }
      db.push(note)
      .then(()=> { alert('Message sent!');setLoader(false); })
      .catch(error => {  alert(error.message);setLoader(false); });
      setInput({title:'',body:''});
}

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
              onChange={handleChange}
              value={input.title}
              type="text" 
              name="title" 
              className="form-control no-border" 
              placeholder="Title..." required />
            </div>
            <div className="form-group">
              <textarea
              onChange={handleChange}
              value={input.body}
              type="text" 
              name="body" 
              className="form-control no-border"  
              placeholder="Body..." required />
            </div>
            <div className="form-group">
              <button 
                className="btn btn-primary col-sm-12" 
                type="submit"
                style={{ background: loader? '#ccc': '#007bff' }}
              >Save
              </button>
            </div>
          </form>
        </div>
      </div>     
    </div>
    </>
  );
}

export default App;
