import React, {Component} from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render(){
        return(
            <div className="container-fluid">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">My First React App</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/setup" activeClassName="active">Setup</Link></li>
                                <li><Link to="/examples" activeClassName="active">Examples</Link></li>
                                <li><Link to="/react-router" activeClassName="active">React Router</Link></li>
                                <li><Link to="/react-json-form" activeClassName="active">React Json Form</Link></li>
                                <li><Link to="/references" activeClassName="active">References</Link></li>
                                </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}



export default Nav;
