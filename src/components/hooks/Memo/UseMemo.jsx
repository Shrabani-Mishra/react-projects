import { useMemo, useState } from "react";

// function ProductList() {
//   const [products] = useState([
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Phone", price: 20000 },
//     { id: 3, name: "Tablet", price: 30000 },
//   ]);

//   const [search, setSearch] = useState("");

//   const filteredProducts = useMemo(() => {
//     console.log("Filtering products...");

//     return products.filter(product =>
//       product.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [products, search]);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Search product"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filteredProducts.map(product => (
//         <p key={product.id}>
//           {product.name} - ₹{product.price}
//         </p>
//       ))}
//     </>
//   );
// }

// export default ProductList;

export function UsememoExampel() {
  const [count, setCount] = useState(0);
  

  const expensiveResult = useMemo(() => {
    console.log("Expensive calculation");

    return count * 1000;
  }, [count]);

  return (
    <>
      <h1>{expensiveResult}</h1>

      <button onClick={() => setCount(count + 1)}>
        Count
      </button>

     
    </>
  );
}