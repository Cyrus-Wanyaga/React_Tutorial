import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
 render(){
   return(
     <Root>
       <Home></Home>
     </Root>
   );
 }

render(<App />, window.document.getElementById("root"));
