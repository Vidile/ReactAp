import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritePage from "./pages/Favorite";
import NewMeetUpsPage from "./pages/NewMeetUp";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetUpsPage />
        </Route>
        <Route path="/newMeetUp" exact={true}>
          <NewMeetUpsPage />
        </Route>
        <Route path="/Favorite" exact={true}>
          <FavoritePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
