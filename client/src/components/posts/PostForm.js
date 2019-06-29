import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Post something about what you're doing...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
          addPost({ title });
          setTitle('');
        }}
      >

          <textarea
          name='title'
          cols='5'
          rows='1'
          placeholder='Article Title'
          value={text}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <br></br>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Article Text'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
