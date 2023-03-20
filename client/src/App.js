import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-top-nav'></div>
        <div className="App-title">React Scheduler</div>
        <div className="App-top-nav-item">Home</div>
        <div className="App-top-nav-item">About</div>
      </header>

      <div className="App-main-container">

        <div className='App-left-nav'>
          <div>
            <a href="#">Nav Item</a>
          </div>
          <div>
            <a href="#">Nav Item</a>
          </div>
        </div>

        <div className="App-content">
          <p>Lorem Ipsum...</p>
        </div>

        <div className='App-right-nav'>
        <div>
            <a href="#">Nav Item</a>
          </div>
          <div>
            <a href="#">Nav Item</a>
          </div>
        </div>

      </div>


      <div className='App-footer'>
      <div className='App-footer-nav-item'>
        <a href="www.google.com">GitHub</a>
      </div>
      <div className='App-footer-nav-item'>
        <a href="www.google.com">LinkedIn.com</a>
      </div>
      </div>
      
    </div>
  );
}

export default App;
