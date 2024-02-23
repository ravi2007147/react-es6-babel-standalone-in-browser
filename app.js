import Hello from './Hello'
class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        // Initialize state if needed
        this.state = {
          // your state properties here
        };
      }

      // Define your component's render method
      render() {
        return (
          <Hello />
        );
      }
    }

    // Render your component to the root element
    const rootElement = document.getElementById('entryPoint');
    ReactDOM.render(<MyComponent />, rootElement);