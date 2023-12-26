import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
<div className='Gayatri'>
<h1 className='MainHeading'>Gaytri Paints 🎨 </h1>
<pre>             Where quality & price is the only focus.</pre>
</div>

<div className='Blank'></div>


<App />


<div className='Blank2'></div>

</BrowserRouter>,
  document.getElementById('root'));