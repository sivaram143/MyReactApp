import React from 'react';
import Home from './home.jsx';
import Setup from './Setup.jsx';
import Examples from './Examples.jsx';
import References from './References.jsx';


class Nav extends React.Component {

constructor() {
      super();
      this.state = {
         pageActiveState: "Home"
      }
	
   };
setPage(pageActive){
		this.setState({pageActiveState: pageActive})
};
   render() {
      return (
         <div className="container-fluid">
		      <nav className="navbar navbar-default">
		        <div className="container-fluid">
		          <div className="navbar-header">
		            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		              <span className="sr-only">Toggle navigation</span>
		              <span className="icon-bar"></span>
		              <span className="icon-bar"></span>
		              <span className="icon-bar"></span>
		            </button>
		            <a className="navbar-brand" href="#">My First React App</a>
		          </div>
		          <div id="navbar" className="navbar-collapse collapse">
		            <ul className="nav navbar-nav">
		              <li className="active"><a href="#" onClick={this.setPage.bind(this,"Home")}>Home</a></li>
		              <li><a href="#" onClick={this.setPage.bind(this,"Setup")}>Setup</a></li>
		              <li><a href="#" onClick={this.setPage.bind(this,"Examples")}>Examples</a></li>
		              <li><a href="#" onClick={this.setPage.bind(this,"References")}>References</a></li>
		            </ul>
		          </div>
		        </div>
		      </nav>
			{(this.state.pageActiveState == "Home")
			? <Home />
			: (this.state.pageActiveState == "Setup")
			? <Setup />
			: (this.state.pageActiveState == "Examples")
			? <Examples />
			: (this.state.pageActiveState == "References")
			? <References />
			: ""
			}
         </div>
      );
   }
}



export default Nav;
