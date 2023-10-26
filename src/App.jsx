import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    );
  
  }
  
  export default App;