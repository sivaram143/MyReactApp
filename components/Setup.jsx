import React from 'react';


class Setup extends React.Component {
   render() {
      return (
        <div className="panel panel-primary">
            <div className="panel-heading">Setup</div>
	        <div className="panel-body">
	             	<h4>Basic Setup</h4>
	              	<ol>
		                <li>
		                  	<p>Open text editor</p>
		                </li>
	                  	<li>
	                  		<p>Create a file as index.html and copy the below code</p>
						<pre>
						{`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Hello World</title>
    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
  <body>
    <div id="root"></div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

    </script>
  </body>
</html>
						 `}
						</pre>
	                    </li>
		                <li>
		                  	<p>Access this file in browser</p>
		                </li>
	              	</ol>
	              	<h4>Setup using ES6, Babel, Webpack</h4>
	              	<ul>
		              	<li>
			                <p>Install Global Packages</p>
			                <pre>{`
npm install -g babel
npm install -g babel-cli
			                `}
			                </pre>
			            </li>
			            <li>
			                <p>Create Root Folder</p>
			                <pre>
			                {`
mkdir reactApp
npm init
			                `}
			                </pre>
			            </li>
			            <li>
			                <p>Add Dependencies and plugins</p>
			                <pre>{`
npm install webpack --save
npm install webpack-dev-server --save
			                `}
			                </pre>
			            </li>
			            <li>
			                <p>React dependencies</p>
			                <pre>{`
npm install react --save
npm install react-dom --save
			                `}
			                </pre>
			            </li>
			            <li>
			                <p>Babel dependencies</p>
			                <pre>{`
npm install babel-core
npm install babel-loader
npm install babel-preset-react
npm install babel-preset-es2015
			                `}
			                </pre>
			            </li>
			            <li>
			                <p>Create files</p>
			                <pre>{`
touch index.html
touch App.jsx
touch main.js
touch webpack.config.js
			                `}
			                </pre>
			            </li>
			            <li>
			                <p>To start the application</p>
			                <pre>{`
npm start
			                `}
			                </pre>
			            </li>
	                </ul>
	        </div>
        </div>
      )
   }
}

export default Setup;