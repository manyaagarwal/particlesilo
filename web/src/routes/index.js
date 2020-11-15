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
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={UploadForm}/>
        <Route exact path="/tips-tricks" component={TipsTricks} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/resources/images" component={ImageResources} />
        <Route exact path="/resources/videos" component={VideoResources} />
        <Route exact path="/resources/presentations" component={PresentationResources} />
      </Switch>
    </AppBar>
  );
}
