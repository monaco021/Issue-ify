import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SocialIssues from "./components/Home";
import ListedArtists from "./components/IssuePage/index";
import ListedAlbums from "./components/Albums/index";
import ListedTracks from "./components/Tracks/index";
import ListedArtistForm from "./components/AddArtistForm/index";
import SubmittedArtistForms from "./components/SubmittedForms/index"


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <SocialIssues />
          </Route>
          <Route path="/issues/:socialIssue" exact>
            <ListedArtists />
          </Route>
          <Route path="/artists/:spotifyId" exact>
            <ListedAlbums />
          </Route>
          <Route path="/album/:albumId" exact>
            <ListedTracks />
          </Route>
          <Route path="/form" exact>
            <ListedArtistForm />
          </Route>
          <Route path="/admin/sept2020aA/submittedForms" exact>
            <SubmittedArtistForms />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
