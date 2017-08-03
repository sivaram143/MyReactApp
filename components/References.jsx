import React from 'react';

class References extends React.Component {
   render() {
      return (
		    <div className="panel panel-primary">
		      <div className="panel-heading">References</div>
		      <div className="panel-body">
		          <h4>Document Links</h4>
				  <div className="list-group">
				    <a href="https://facebook.github.io/react/tutorial/tutorial.html" className="list-group-item">Official Docs</a>
				    <a href="https://www.tutorialspoint.com/reactjs/" className="list-group-item">TutorialPoint</a>
				    <a href="https://www.codementor.io/reactjs/tutorial" className="list-group-item">CodeMentor</a>
				  </div>
		          <h4>Videos Links</h4>
				  <div className="list-group">
				    <a href="https://reactforbeginners.com/" className="list-group-item">First</a>
				    <a href="https://www.youtube.com/watch?v=-AbaV3nrw6E3" className="list-group-item">Second</a>
				    <a href="https://facebook.github.io/react/community/videos.html" className="list-group-item">Third</a>
				  </div>
		      </div>
		    </div>
      )
   }
}


export default References;

