import React, { Fragment } from 'react';


import Header from './components/header/header';

const App = ({children}) => (
  <Fragment>
  	<Header />
  	{children} 
  </Fragment>
);

export default App;
