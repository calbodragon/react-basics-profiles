import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../pages/styles/ProfileListStyle.css';
import tw_logo from '../images/icon-twitter.png';


import Gravatar from './Gravatar';

class ProfileCardItem extends Component {
    render() {
        return (
            <div className="d-flex">
                <Gravatar
                    className="ProfileList__avatar-list"
                    email={this.props.profile.email}
                />
                <div>
                    {this.props.profile.firstName} {this.props.profile.lastName}
                    <br />
                    {this.props.profile.jobTitle}
                    <br />
                    <img className='tw__logo'  src={tw_logo} alt="twitter logo" />
                    <span className='twitter__blue_font'>{this.props.profile.twitter}</span>
                </div>
            </div> 
        );
    }
}

class ProfileCard extends Component {
    render() { 

        if (this.props.profiles.length === 0) {
            return (
                <div>
                    <h3>No se han encontrado perfiles</h3>
                    <Link className="btn btn-primary" to="/profiles/new">
                        Crea un nuevo Perfil.
                    </Link>
                </div>
            );
        }

        return (
            <ul className="list-unstyled">
                {
                    this.props.profiles.map(profile =>{
                        return(
                            <li key={profile._id} className="ProfileList__section-name-list">
                                <Link className="text-reset text-decoration-none" to={`/profiles/${profile._id}`}>
                                    <ProfileCardItem profile={profile} />
                                </Link>     
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default ProfileCard;