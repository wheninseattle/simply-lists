import React from 'react'

const onChange = () => {
  console.log('Changing')
}
const onCancel = () => {
  console.log('Canceling')
}

const onSubmit = (e) => {
  e.preventDefault();
  console.log('Submitting...')
}

const CommentForm = () => {
  return (
    <div className="my-1 p-1 add-card">

    <form className="form add-form py-1" onSubmit={onSubmit}>
      <textarea name="comment" id="comment" rows="5" onChange={onChange} placeholder={'Your comment here...'}></textarea>
      <button className="btn btn-primary" type='submit'>Comment</button>
      <button className="btn btn-danger" onClick={onCancel}>Cancel</button>
    </form>
    </div>
  )
}

export default CommentForm