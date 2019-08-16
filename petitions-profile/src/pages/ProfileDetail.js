import React, { Component } from 'react';
import { Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import logoGeek from '../images/logo-ag-min.png';
import './styles/ProfileDetailStyle.css';


import Profile from '../components/Profile';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

class ProfileDetail extends Component {
    constructor(props){
        super(props);
        this.state = { 
            loading: true,
            error: null,
            data: undefined,
            modalIsOpen: false,
            redirect: false,
        }
    };
    
    componentDidMount() {
        this.fetchData();
    }

    //Capturando la data de nuestra petición
    fetchData = () =>{
        this.setState({ 
            loading: true,
            error: null 
        });

        this.axiosCancelSource = axios.CancelToken.source()
        
        axios.get(`http://localhost:5700/api/profiles/${this.props.match.params.profileId}`,
        { cancelToken: this.axiosCancelSource.token })
        .then(res =>{
            this.setState({
                loading: false,
                data: res.data,
            })
        }).catch(error => {
            this.setState({
                loading: false,
                error: error,
            })
        })
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true });
    };
    
    handleCloseModal = e => {
        this.setState({ modalIsOpen: false });
    };

    handleDeleteBadge = () =>{
        this.setState({ 
            loading: true, 
            error: null 
        });

        this.axiosCancelSource = axios.CancelToken.source()
        
        axios.delete(`http://localhost:5700/api/profiles/${this.props.match.params.profileId}`,
        { cancelToken: this.axiosCancelSource.token })
        .then(res =>{

            this.setState({
                loading: false,
                redirect: true,
                modalIsOpen: false,
            })
            console.log("Hemos eliminado el perfil")
            return <Redirect to='/profiles' />
        

        }).catch(error => {
            this.setState({
                loading: false,
                error: error,
            })
        })

    }

    render() { 

        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return (
            <React.Fragment>
                <div className="ProfileDetail__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img className="ProfileDetail__logo" src={logoGeek} alt="Logo Geek Conf" />
                            </div>
                            <div className="col-6 ProfileDetail__hero-attendant-name">
                                <h1>{this.state.data.firstName} <br/> {this.state.data.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 ">
                            <Profile    
                                    firstName = {this.state.data.firstName} 
                                    lastName = {this.state.data.lastName} 
                                    jobTitle = {this.state.data.jobTitle} 
                                    twitter = {this.state.data.twitter}
                                    email = {this.state.data.email}
                                />
                        </div>
                        <div className="col-6">
                            <h2>Acciones</h2>
                            <div>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/profiles/${this.state.data._id}/edit`}>
                                        Editar
                                    </Link>
                                </div>
                                <div>
                                    <button onClick = {this.handleOpenModal} className="btn btn-danger">Eliminar</button>
                                    <DeleteBadgeModal 
                                        onClose={this.handleCloseModal}
                                        isOpen={this.state.modalIsOpen}
                                        onDeleteBadge={this.handleDeleteBadge}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProfileDetail;