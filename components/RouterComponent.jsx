
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

const topics = [
  {
    name: 'Pre-requisites',
    id: 'react-router',
    description: 'HTML, Basic Javascript Knowledge',
    resources: [
      {
        name: 'Pre-requisites',
        id: 'url-parameters',
        description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
        url: 'https://tylermcginnis.com/react-router-url-parameters'
      },
      {
        name: 'Single Page Applications',
        id: 'programmatically-navigate',
        description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
      }
    ]
  },
  {
    name: 'Single Page Applications',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle Events',
        id: 'react-lifecycle',
        description: "React Lifecycle events allow you to tie into specific phases of a components lifecycle",
        url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
      },
      {
        name: 'React AHA Moments',
        id: 'react-aha',
        description: "A collection of 'Aha' moments while learning React.",
        url: 'https://tylermcginnis.com/react-aha-moments/'
      }
    ]
  }
]

function Resource ({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId)

  return (
    <div>
      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <a href={topic.url}>More info.</a>
    </div>
  )
}

function Topic ({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId)

  return (
    <div>
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul>
        {topic.resources.map((sub) => (
          <li key={sub.id}>
            <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
          </li>
        ))}
      </ul>

      <hr />

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  )
}

function Topics ({ match }) {
  return (
    <div>
      {/*<h1>Topics</h1>*/}
      <div className="col-md-3">
        <ul>
          {topics.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-9">
          <Route path={`${match.path}/:topicId`} component={Topic}/>
      </div>
    </div>
  )
}

function Home () {
  return (
    <h1>
      Home.
    </h1>
  )
}

class RouterComponent extends Component {
  render() {
    return (
      <Router>
      <div className="panel panel-primary">
        <div className="panel-heading">Notes with React Router</div>
          <div className="panel-body">
              <div className="col-md-3">
                  <ul>
                    <li><Link to='/topics'>Introduction</Link></li>
                  </ul>
              </div>
             <div className="col-md-9">
                <Route path='/topics' component={Topics} />
            </div>
            </div>
          </div>

      </Router>
    )
  }
}

export default RouterComponent
