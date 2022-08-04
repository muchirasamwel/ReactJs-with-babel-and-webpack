import * as React from 'react'

interface Props {
    name: String | Number,
    salutation?: String
    sayHi: (name?: String | Number) => void
}
const Header: React.FC<Props> = (props) => {
    return (
        <>
            <h1>Hello {props.salutation} {props.name?.toString()}</h1>
            <button onClick={() => props.sayHi(props.name)}>Greet</button>
        </>
    )
}
export default Header