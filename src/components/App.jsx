import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [note, setNote]= useState([]);

  function addNote(newNote){
setNote(prevNote => {
 return [...prevNote, newNote];
});
  }
 function deleteNote(id){
setNote(prevNote => {
  prevNote.filter((noteItem, index) => {
  return index !== id;
})
})
 


  }
  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote} />
{note.map((noteItem, index) => {
return <Note
key={index}
id={index}
title={noteItem.title}
content={noteItem.content}
onDelete={deleteNote}
/>;
      })}
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
