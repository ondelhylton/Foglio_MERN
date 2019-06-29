import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    image: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    image,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <br></br>
      <h2 className='headtext'>For Exclusive Access to Showrooms and Designers, Submit Your Profile for Approval</h2>
      
      
      <div className="row">
      <div class="column">
      <br></br>
      <br></br>
      <p className='subtext'>
      Fill in fields below so Foglio knows who you are
      </p>
      <small>*required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company Name'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
            <small className='form-text'>
            Could be your own company or one you work for
          </small>
          <br></br>

          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Select Professional Status</option>
            <option value='Designer'>Designer</option>
            <option value='Junior Developer'>Publicist</option>
            <option value='Journalist'>Journalist</option>
            <option value='Stylist'>Stylist</option>
            <option value='Marketer'>Marketer</option>
            <option value='Student or Learning'>Student</option>
            {/* <option value='Instructor'>Instructor or Teacher</option>
            <option value='Intern'>Intern</option> */}
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            Give us an idea of your role in your company
          </small>
        </div>


        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='website'
            value={website}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Company website
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Address, City, State 
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Products Carried or Interested in'
            name='skills'
            value={skills}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Please use comma separated values (i.e. suits, dresses, lingerie)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Image URL'
            name='image'
            value={image}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Profile Image Link
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Why you want to work with Foglio'
            name='bio'
            value={bio}
            cols='30'
            rows='5'
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Tell us about you/your company</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <small>(Optional)</small>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
      </div>

      <div class="column22">
      <br></br>
      <img src={require('../../img/network.jpg')} 
      alt="clothes"
      style={{width: 500}}
      />
      </div>

      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
