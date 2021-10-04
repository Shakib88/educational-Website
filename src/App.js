
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Cart from './component/Cart/Cart';
import Courses from './component/Courses/Courses';
import Footer from './component/Footer/Footer';


import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';





function App() {
  return (
    <div className="App">
    
     <Router>
      <Home></Home>
       <Switch>
         <Route exact path="/home">
            <Courses></Courses>
         </Route>
         <Route path="/courses">
           <Courses></Courses>

         </Route>
         <Route path="/cart">
           <Cart></Cart>

         </Route>
         <Route path="/about">
            <About></About>
         </Route>
         <Route path='/*'>
           <NotFound></NotFound>

         </Route>

       </Switch>
       <Footer></Footer>
     </Router>
      
    </div>
  );
}

export default App;
