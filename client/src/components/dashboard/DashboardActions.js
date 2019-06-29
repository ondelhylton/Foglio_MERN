import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-black'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-black'>
        <i className='fab fa-black-tie text-primary' /> Add Products
      </Link>
      <Link to='/add-education' className='btn btn-black'>
      <i class="far fa-calendar-alt"></i> Add Events
      </Link>
    </div>
  );
};

export default DashboardActions;
