import React from 'react';

class Home extends React.Component {
   render() {
      return (
        <div className="panel panel-primary">
          <div className="panel-heading">React Js</div>
          <div className="panel-body">
              <h4>Introduction</h4>
              <ul>
                  <li><p> React is a declarative, efficient, and flexible JavaScript UI library for building user interfaces.</p></li>
                  <li><p> React is a UI library developed at Facebook.</p></li>
                  <li><p> React is uni-directional.</p></li>
                  <li><p> React takes care of 'V' or 'view' in 'MVC'.</p></li>
                  <li><p> React uses concept called the Virtual DOM.</p></li>
              </ul>
              <h4>Core Features</h4>
              <ul>
                <li><p><b>Virtual DOM</b> :&nbsp;Like the actual DOM, the Virtual DOM is a node tree that lists elements and their attributes and content as objects and properties. React's render() method creates a node tree from React components and updates this tree in response to mutations in the data model, caused by actions.</p></li>
              
                <li><p><b>JSX(Javascript Syntax Extension)</b> :&nbsp;It is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children. It is also type-safe and most of the erros can be caught during compilation</p></li>

                <li><p><b>Components</b> :&nbsp;Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.</p></li>
   
                <li><p><b>Props</b> :&nbsp;The attributes which we use in Components are called Props.</p></li>

                <li>
                  <p><b>Lifecycle Methods</b> :&nbsp;There are several lifecycle methods</p>
                  <p>
                    <ul>
                        <li><i>componentWillMount</i> - Invoked once, on both client &amp; server before rendering occurs.</li>
                        <li><i>componentDidMount</i> - Invoked once, only on the client, after rendering occurs.</li>
                        <li><i>shouldComponentUpdate</i> - Return value determines whether component should update.</li>
                        <li><i>componentWillUnmount</i> - Invoked prior to unmounting component.</li>
                    </ul>
                  </p>
                </li>

                <li>
                  <p><b>Specs</b> :&nbsp;There are several lifecycle methods</p>
                  <p>
                    <ul>
                      <li><i>getInitialState</i> - Return value is the initial value for state.</li>
                      <li><i>getDefaultProps</i> - Sets fallback props values if props aren't supplied.</li>
                      <li><i>mixins</i> - An array of objects, used to extend the current component's functionality.</li>
                    </ul>
                  </p>
                </li>

                <li>
                  <p><b>State</b> :&nbsp;State is set using the setState method. Calling setState triggers UI updates and is the bread and butter of React's interactivity. </p>                
                </li>
                <li><p><b>Router</b> :&nbsp; TBD</p></li>
                <li><p><b>Transcompiler</b> :&nbsp;TBD</p></li>
                <li><p><b>Flux</b> :&nbsp;TBD</p></li>
                <li><p><b>Redux</b> :&nbsp;TBD</p></li>
                <li><p><b>Misc</b> :&nbsp;TBD</p></li>
              </ul>
          </div>
          </div>
      )
   }
}


export default Home;



