import "./App.css";
import { Projects } from "./Components/Projects/Projects";
import { projectArr } from "./Data/Projects";
import { ProfileCard } from "./Components/ProfileCard/ProfileCard";
import { selfProfile } from "./Data/selfProfile";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard selfProfile={selfProfile} />
        <Projects projectArr={projectArr} />
      </header>
    </div>
  );
}

export default App;
