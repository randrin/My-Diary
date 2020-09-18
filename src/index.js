import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import "react-toastify/dist/ReactToastify.min.css";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Authentification from "./components/Authentification";
import NoteDetails from "./components/notes/NoteDetails";
import NoteEdit from "./components/notes/NoteEdit";

// Create Redux Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// Provide the Store to React
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Loading>
          <div>
            <Switch>
              <Route path="/login" component={Login} exact={true} />
              <Redirect from="/logout" to="/login" />
              <Authentification>
                <Header />
                <Route path="/:id" component={NoteDetails} exact={true} />
                <Route path="/:id/edit" component={NoteEdit} exact={true} />
                <Route path="/" component={App} exact={true} />
              </Authentification>
            </Switch>
          </div>
        </Loading>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
