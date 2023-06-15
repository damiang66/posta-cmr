import { useState } from 'react';
import { Advisory } from './Advisory';
export const Header=()=>{

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
    
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                        <i className="fas fa-bars" />
                    </a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                {/* Navbar Search */}
                <li className="nav-item">
                    <a style={{right: 1150, position: 'absolute'}} className="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i className="fas fa-search" />
                    </a>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input
                                    className="form-control form-control-navbar"
                                    type="search"
                                    placeholder="Buscar"
                                    aria-label="Search"
                                    style={{borderRadius: 20, marginRight: 20}}
                                />
                                <div className="input-group-append">
                                    <button style={{right: 5, backgroundColor: '#4ab680',marginRight: 10, borderRadius:10}} className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                    <button style={{right: 5, backgroundColor: '',marginRight: 440, borderRadius:10}}  className="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                {/* Messages Dropdown Menu */}
    
                {/* Notifications Dropdown Menu */}
                <Advisory isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleOpenModal={handleOpenModal} />
                <li className="nav-item dropdown">
                    <a className="nav-link" data-toggle="dropdown" href="#" style={{marginRight: 20}}>
                        <i className="far fa-bell" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider" />
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                            <i className="fas fa-users mr-2" /> 8 friend requests
                            <span className="float-right text-muted text-sm">12 hours</span>
                        </a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                        <div className="image">
                            <img
                                src="dist/img/user2-160x160.jpg"
                                className="img-circle elevation-2 my-image"
                                alt="User Image"
                                style={{ width: '32px', height: '32px', marginRight: 10 }}
                            />
                            <span>Asesor Uno</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>)
}
