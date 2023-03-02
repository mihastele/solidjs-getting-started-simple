// Object destructuring for props not allowed in Solid
function Counter(props) {
    return <p id="counter">{props.value}</p>
}

export default Counter;