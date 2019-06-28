import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className ="fullspan">
      <h1 className='large text-primary'>Foglio News</h1>
      <p className='headText'>
      Designers / Retailers / Fashion tech / Paris / New York
      </p>
      <div className='posts'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
      <br></br>
      <PostForm />

      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
