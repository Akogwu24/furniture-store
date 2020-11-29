import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';

// DRY - Dont Repeat Yourself
// KISS - Keep It Simple Stupid

function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <About/> */}
      <Footer />
    </div>
  );
}

export default App;
