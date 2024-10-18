// more complicated nested loop 

// as we see we can write code of react like this but it is getting complicated so thats why jsx comes in the line we will see it forward 

const parent = React.createElement(
    "div",
     { id: "parent" },
      [React.createElement("div", { id: "child" },
         [
          React.createElement("h1", {}, "hello i am the code for nested loop "),
           React.createElement("h1", {}, "hello i am the code for nested loop plus siblings ")]),


           React.createElement("div", { id: "child" },
              [
               React.createElement("h1", {}, "hello i am the code for nested loop "),
                React.createElement("h1", {}, "hello i am the code for nested loop plus siblings ")])]
     )

     
         
const yoyo = ReactDOM.createRoot(document.getElementById("yoyo"))
yoyo.render(parent)