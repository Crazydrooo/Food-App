// import { useEffect, useState } from "react";

// const App = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [filteredData, setFilteredData] = useState(null);
//   const [selectedBtn, setSelectedBtn] = useState("all");

//   const BASE_URL = "http://localhost:9000";

//   useEffect(() => {
//     const fetchFoodData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(BASE_URL);
//         const json = await response.json();
//         setData(json);
//         setFilteredData(json);

//         setLoading(false);
//       } catch (error) {
//         setError("Unable To Fetch The Data ");
//       }
//     };
//     fetchFoodData();
//   }, []);

//   const searchFood = (event) => {
//     const searchValue = event.target.value;
//     console.log(searchValue);
//     if (searchValue === "") {
//       setFilteredData("");
//     }
//     const filter = data?.filter((food) =>
//       food.name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setFilteredData(filter);
//   };

//   const filterBtns = [
//     {
//       name: "All",
//       type: "all",
//     },
//     {
//       name: "Breakfast",
//       type: "breakfast",
//     },
//     {
//       name: "Lunch",
//       type: "lunch",
//     },
//     {
//       name: "Dinner",
//       type: "dinner",
//     },
//   ];

//   const filterFood = (type) => {
//     if (type == "all") {
//       setFilteredData(data);
//       setSelectedBtn("all");
//       return;
//     }

//     const filter = data?.filter((food) =>
//       food.type.toLowerCase().includes(type.toLowerCase())
//     );
//     setFilteredData(filter);
//     setSelectedBtn(type);
//   };

//   if (error) return <div>{error}</div>;
//   if (loading) return <div>Loading........</div>;

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           style={{ height: "4rem", fontSize: "4rem" }}
//           onChange={searchFood}
//           placeholder="search Food"
//         />
//       </div>

//       {filterBtns.map((value) => (
//         <button
//           // isSelected={isSelected === value.type}
//           key={value.name}
//           onClick={() => filterFood(value.type)}
//         >
//           {value.type}
//         </button>
//       ))}

//       <div>
//         {filteredData?.map((item, index) => (
//           <div key={index}>{item.name}</div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

// // const [selectedBtn, setSelectedBtn] = useState("all");

// // const filterFood = (type) => {
// //   if (type === "all") {
// //     setFilteredData(data);
// //     setSelectedBtn("all");
// //     return;
// //   }

// //   const filter = data?.filter((food) =>
// //     food.type.toLowerCase().includes(type.toLowerCase())
// //   );
// //   setFilteredData(filter);
// //   setSelectedBtn(type);
// // };

// // const filterBtns = [
// //   {
// //     name: "All",
// //     type: "all",
// //   },
// //   {
// //     name: "Breakfast",
// //     type: "breakfast",
// //   },
// //   {
// //     name: "Lunch",
// //     type: "lunch",
// //   },
// //   {
// //     name: "Dinner",
// //     type: "dinner",
// //   },
// // ];

// // <FilterContainer>
// //   {filterBtns.map((value) => (
// //     <Button
// //       isSelected={selectedBtn === value.type}
// //       key={value.name}
// //       onClick={() => filterFood(value.type)}
// //     >
// //       {value.name}
// //     </Button>
// //   ))}
// // </FilterContainer>;
