import './Square.css'

// export const Square = ({ cor }) => {
//     return (
//         <>
//             <div className="square" style={{ backgroundColor: cor }}></div>
//         </>
//     )

// }

export const Square = ({ classe }) => {
    return (
        <>
            <div className={`square ${classe}`}></div>
        </>
    )

}