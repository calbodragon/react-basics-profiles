import React from 'react';
import '../styles/ProfileNewStyle.css'
import NavBar from '../components/NavbarComponent';
import Profile from '../components/ProfileComponent';
import ProfileForm from '../components/ProfileFormComponent';

class ProfileNew extends React.Component {
    render(){
        return (
            <div>
                <NavBar />
                <div className="ProfileNew__hero">
                    <span className="ProfileNew__hero-text">
                        "Bienvenido a la conferencia Geek! , 
                         esperamos todas nuestras charlas sean de tu total interes"
                    </span>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            <Profile    
                                    firstName = 'Elizabeth' 
                                    lastName = 'Mejia Perez' 
                                    jobTitle = 'Software Architect'
                                    twitter = 'eliMeji'
                                    avatarUrl = "https://s3.us-east-2.amazonaws.com/eafitrequisitos/avataaars.png"
                                />
                        </div>
                        <div className="col-6">
                            <ProfileForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileNew;