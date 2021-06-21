import Mortgage from "./mortgage";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isLoan : false
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          isLoan : event.target.value
        });
    }
  
    render() {
      
      return (
        <div>
            <Mortgage/>
        </div>
      );
    }
  }

export default App