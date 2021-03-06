import React from 'react'
import { Provider } from 'react-redux'

import store, { initialize } from './todos_store.js'

import NewTodo from './new_todo.jsx'
import ToggleAll from './toggle_all.jsx'
import TodosList from './todos_list.jsx'
import TodosFooter from './todos_footer.jsx'

class TodosContainer extends React.Component {
  constructor(props) {
    super(props);

    // at this point props is just stuff rails has sent down to us. we'll go ahead and load that
    // into our redux store and get this show on the road
    initialize(this.props);
  }

  render() {
    return (
      <Provider store={ store }>
        <section id="todoapp">
          <header id="header">
            <h1>todos</h1>
            <NewTodo />
          </header>

          <section id="main">
            <ToggleAll />

            <TodosList />
          </section>

          <TodosFooter />
        </section>
      </Provider>
    )
  }
}

export default TodosContainer;
