import 'bootstrap/dist/css/bootstrap.css';
import Items from './Component/Items';
import {Routes,Route} from 'react-router-dom'

import products from './Component/Products';
import Product from './Component/Product' 

function App() {


  return (
    <div className='container-fluid '>
      <Routes>
        <Route path='/' element={<Items />} />
        <Route path='/product/:id' element={<Product data={products} />} />
      </Routes>
      
    </div>
  );
}

export default App;
