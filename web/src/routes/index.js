import { AppBar } from "../components/AppBar";
import { Switch, Route } from "react-router-dom";
import { TipsTricks } from "../components/TipsAndTricks";
import { Home } from "../components/Home";
import { Resources } from "../components/Resources";
import { ImageResources } from "../components/ImageResources";
import { VideoResources } from "../components/VideoResources";
import { PresentationResources } from "../components/PresentationResources";
import { UploadForm } from "../components/UploadForm";

export default function Routes() {
  return (
    <AppBar>
      <Switch>
        <Route path="/upload" component={UploadForm} />
        <Route path="/tips-tricks" component={TipsTricks} />
        <Route path="/resources/images" component={ImageResources} />
        <Route path="/resources/videos" component={VideoResources} />
        <Route
          path="/resources/presentations"
          component={PresentationResources}
        />
        <Route path="/resources" component={Resources} />
        <Route exact path="/" component={Home} />
      </Switch>
    </AppBar>
  );
}
