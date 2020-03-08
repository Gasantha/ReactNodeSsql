import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{

state={
    products:[],
    product:{
    name:'',
    price:0
    }

  }
 componentDidMount(){
     this.getProducts();
  }

  getProducts = _=>{
    fetch('http://localhost:4000/products')
    .then(response=>response.json())
    .then(response =>this.setState({products:response.data}))
    .catch(err=>console.log(err))
  }
  addProducts = _=>{
    const {product}=this.state;
    fetch(`http://localhost:4000/products/add?name=${product.name}&price=${product.price}`)
   // .then(response=>response.json())
    .then(this.getProducts)
    .catch(err=>{console.log(err)})

  }
  renderProduct=({name,price})=><div key={name}>{name}{price}</div>

  render(){
    const { products,product }=this.state;
    console.log(JSON.stringify({products}));
  return (
    <div className="App">
      {products.map(this.renderProduct)}
      <div>
     
        <input 
     value={product.name}   
     onChange={e=>this.setState({product : {...product,name:e.target.value}})} />
     <input value={product.price}
     onChange={e=>this.setState({product:  {...product,price:e.target.value}})}/> 
     <button onClick={this.addProducts}>Add Product</button>

    </div>
    </div>
    
  );
  }
}
export default App;
