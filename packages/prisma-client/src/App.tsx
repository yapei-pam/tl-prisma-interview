import { TH1Button, TH1Theme, TH1Customisations} from './externals/prisma-theme-one'
import { TH2Button, TH2Theme, TH2Customisations } from './externals/prisma-theme-two'
import { ThemeDemo } from "./components"
import './App.css';

function App() {
  return (
      <div className="App">
        <ThemeDemo 
          title='Theme 1'
          description="Theme 1 proposes a list of components styled respecting the theme's specifications"
          theme={TH1Theme} 
          customisations={TH1Customisations}
        >
          <TH1Button label='Ok' />
        </ThemeDemo>
        <ThemeDemo 
          title='Theme 2'
          description="Theme 2 proposes a list of components styled respecting the theme's specifications"
          theme={TH2Theme} 
          customisations={TH2Customisations}
        >
            <TH2Button label='Ok' />
        </ThemeDemo>
      </div>
  );
}

export default App;
