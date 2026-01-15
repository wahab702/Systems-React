const heading1 = React.createElement("h2", {
    id: "heading",
    xyz: "abc"
}, "Wahab making a React");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);
const parent = React.createElement("div", {
    id: "Parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h3", {}, "I am using h3 nested div"),
        React.createElement("h4", {}, "I am h4 using nested div")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h3", {}, "I am using h3 nested div"),
        React.createElement("h4", {}, "I am h4 using nested div")
    ])
]);
root1.render(parent);

//# sourceMappingURL=First.6bd02f5a.js.map
