import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import IssueReducer from "./home";
import ArtistsReducer from './issuePage.js';
import AlbumsReducer from "./albums.js";
import TracksReducer from "./tracks.js";
import FormReducer from "./submittedForms"
import SearchedArtistsReducer from "./search"
import ImageReducer from "./albumImage"

const rootReducer = combineReducers({
  session,
  issue: IssueReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  tracks: TracksReducer,
  forms: FormReducer,
  searchedArtists: SearchedArtistsReducer,
  image: ImageReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
