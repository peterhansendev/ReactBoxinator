import { useSelector } from "react-redux";


function Counter() {
    const count = useSelector(state => state.count);

    return (
        <>
        </>
    )
}

export default Counter