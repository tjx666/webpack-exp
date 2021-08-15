import ReactDOM from 'react-dom';

import Counter from './Counter.jsx';
import Header from './Header.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
