import React from 'react'
import ReactDOM  from 'react-dom';
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggle-button';



class Theme extends React.Component {
  constructor(props) {
    super(props);
  

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    this.state = {
      theme: themes.light,
      toggleTheme:this.toggleTheme
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  )
}

ReactDOM.render(<Theme />, document.getElementById('root'));