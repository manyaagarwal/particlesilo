import { AppBar } from "../components/AppBar";
import { Switch, Route } from "react-router-dom";
import { TipsTricks } from "../components/TipsAndTricks";
import { Home } from "../components/Home";

export default function Routes() {
  return (
    <AppBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tips-tricks" component={TipsTricks} />
      </Switch>
    </AppBar>
  );
}
