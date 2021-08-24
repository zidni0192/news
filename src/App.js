import { BrowserRouter, Route } from 'react-router-dom';
import Bookmarked from './container/bookmarked';
import Home from './container/home';
import { NewsContextProvider } from './context/news';

function App() {
  return (
    <NewsContextProvider>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/bookmarked" component={Bookmarked} />
      </BrowserRouter>
    </NewsContextProvider>
  );
}

export default App;
