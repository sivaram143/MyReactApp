import React from 'react';
import LeftMenu from './LeftMenu.jsx';

class Examples extends React.Component {
   render() {
        
      const cars = this.props.route.data;
      return (
             <LeftMenu item={cars}/>
      )
   }
}

export default Examples;