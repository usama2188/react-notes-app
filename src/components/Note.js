import React from 'react'

export default function Note({ text, id, handleOnDelete, editNote ,setNoteBg}) {
  const handleDelete = () => {
    handleOnDelete(id)
  }

  const handleEdit = () => {
    editNote(id)
  }
  return (
    // <div className="contaner">
    //     <div>Note</div>
    //     this is a note1

    // </div>
  <div className="card mt-4 " id='note' style={{backgroundColor:setNoteBg()}}>
      <div className="card-body">
        <h5 className="card-title">Note</h5>
        <p id='textPara' className="card-text">{text}</p>
        <div className="container d-flex justify-content-end " id='btn' >
          <a href="#" className="btn btn-outline-dark" onClick={handleEdit} ><i className="fa-solid fa-pen"></i></a>
          <a href="#" className="btn btn-outline-dark ms-3" onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></a>
        </div>
      </div>
    </div>
  )
}
