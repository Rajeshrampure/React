//  const heading=   React.createElement("h1",{id:"omg"},"react ra baabu")
//  const root = ReactDOM.createRoot(document.getElementById("root"))
//  root.render(heading)

const heading=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"parent"},"Im an h1 tag")));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading);