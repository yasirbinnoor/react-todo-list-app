
// import './App.css';
// import ErrorMessage from './component/ErrorMessage';
// import ListGroup from './component/ListGroup';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from 'react';
// import Container from './component/Container';
// import Input from './component/Input';

// function App() {

//   const fruitItems = ["mango", "banana", "orange", "chilli"];

//   const [searchTerm, setSearchTerm] = useState('food item enter by user');

//   const handleOnChange = (e) => {
//     console.log(e.target.value);
//     setSearchTerm(e.target.value);

//   };


//   const filteredFruits = fruitItems.filter((fruit) =>
//     fruit.toLowerCase().includes(searchTerm.toLowerCase())
//   );


//   return (
//     <Container>
//       <h1>FruitCard</h1>
//       <Input handleOnChange={handleOnChange} />
//       <p>{ searchTerm }</p>
//       <ErrorMessage items={filteredFruits} />
//       <ListGroup items={filteredFruits} />
//     </Container>
//   );
// }

// export default App;

// import './App.css';
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from './component/Container';
// import Input from './component/Input';
// import ListGroup from './component/ListGroup';
// import ErrorMessage from './component/ErrorMessage';

// function App() {


//   const [fruitItems, setfruitItems] = useState(["mango", "banana", "orange"]);
//   const OnKeyDown = (e) => {
//     if (e.key === "enter"){
//       let newFoodItem = e.target.value
//       let newItems = [...foodItems, newFoodItem]
//       setfruitItems(newItems)


//     }

//   };

//   return (
//     <Container>
//       <h1>FruitCard</h1>
//       <Input handleOnKeyDown={OnKeyDown}/>

//       <ErrorMessage items={fruitItems} />
//       <ListGroup items={fruitItems} />
//     </Container>
//   );
// }

// export default App;
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './component/Container';
import Input from './component/Input';
import ListGroup from './component/ListGroup';
import ErrorMessage from './component/ErrorMessage';

function App() {
  const [fruitItems, setFruitItems] = useState(["mango", "banana", "orange"]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newFruit = e.target.value.trim();
      if (newFruit) {
        setFruitItems([...fruitItems, newFruit]);
        e.target.value = ""; // input field clear after adding
      }
    }
  };

  return (
    <Container>
      <h1>FruitCard</h1>
      <Input handleOnKeyDown={handleKeyDown} />
      <ErrorMessage items={fruitItems} />
      <ListGroup items={fruitItems} />
    </Container>
  );
}

export default App;

