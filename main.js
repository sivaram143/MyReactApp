import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Nav from './components/Nav.jsx';

import Home from './components/home.jsx';
import Setup from './components/Setup.jsx';
import Examples from './components/Examples.jsx';
import References from './components/References.jsx';
import ButtonComponent from './components/Buttons.jsx';

//import data from './json/LeftMenu.json';

const data =[
	  {
	     "text":"Buttons",
	     "url":"buttons",
			 "component": "ButtonComponent",
    },
		{
			 "text":"Chart",
			 "url":"chart"
		},
		{
       "text":"Collapse",
       "url":"collapse"
    },
		{
			 "text":"Form Components",
			 "url":"formComponents"
		},
		{
			 "text":"Infinite Scroll",
			 "url":"infiniteScroll"
		},
		{
			 "text":"Icons",
			 "url":"icons"
		},
		{
			 "text":"Loader",
			 "url":"loader"
		},
		{
			 "text":"Menu",
			 "url":"menu"
		},
		{
			 "text":"Notification",
			 "url":"notification"
		},
		{
			"text":"Paginator",
			"url":"paginator"
	  },
		{
			 "text":"Photo",
			 "url":"photo"
		},
		{
       "text":"Table",
       "url":"table"
    },
  	{
       "text":"Tabs",
       "url":"tabs"
    },
		{
			 "text":"ToolTip",
			 "url":"tooltip"
		},
		{
			 "text":"Tree",
			 "url":"tree"
		},
		{
			 "text":"Video",
			 "url":"av"
  	}
];

render(
    <Router history={browserHistory}>
        <Route component={Nav}>
            <Route path="/" component={Home}/>
            <Route path="/setup" component={Setup}/>
            <Route path="/examples" component={Examples}  data={data}>
							 <Route path="/examples/:{data.url}" component={ButtonComponent}/>
						</Route>
            <Route path="/references" component={References}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
