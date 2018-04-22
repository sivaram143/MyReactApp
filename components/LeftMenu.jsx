import React from 'react';
import LeftMenuJson from '../json/LeftMenu.json';
import { Link } from 'react-router';
import ButtonComponent from './Buttons';



class LeftMenu extends React.Component {

	render () {
	    // Get data from route props
        const a = this.props.item;

        console.log("data..."+JSON.stringify(a));
        const carNode = a.map((aa) => {
            return (
                <Link
                    to={"/examples/"+aa.url}
                    className="list-group-item"
                    key={aa.link}>
                    {aa.text}
                </Link>
            )
        });
		return (
			<div>
			<div className="col-sm-3 noColPad">
			    <div className="sidebar-nav">
			      <div className="navbar navbar-default" role="navigation">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <span className="visible-xs navbar-brand">Sidebar menu</span>
			        </div>
			        <div className="navbar-collapse collapse sidebar-navbar-collapse">
			          <ul className="nav navbar-nav">
			           {carNode}
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>

			<div className="col-sm-9">
			   <ButtonComponent/>
			</div>
			</div>
		);
	}



}

export default LeftMenu;
