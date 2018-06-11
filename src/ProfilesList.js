import React, { Component } from 'react';
import Profile from './Profile.js';

class ProfilesList extends Component {
	render() {
    	return (
        	<ul>
          		{
                  	this.props.profiles.map(profile => (
                  		<Profile key={profile.id} profile={profile} />
        			))
    			}
          	</ul>
        );
    }
}

export default ProfilesList;