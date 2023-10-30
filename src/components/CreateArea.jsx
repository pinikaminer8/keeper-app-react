import React, { useState } from "react";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  function collapse() {
    setExpanded(false);
  }


  const [note, setNote] = useState({
    title: "",  
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
  }


  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />}
        <textarea onClick={expand} name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
        <button onClick={submitNote} 
          ><PostAddIcon/></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
