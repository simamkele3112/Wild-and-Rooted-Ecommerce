import { useState } from "react"

function Meats(){
    const [meats] = useState([ 
        {id: 1, title: "Chicken", amount: "17"},
        {id: 2, title: "Duck", amount: "7"},
        {id: 3, title: "Beef", amount: "9"},
        {id: 4, title: "Deer", amount: "20"},
    ])
    return(
        <>
            <div>
                {/* pull the data(title, amount, max amount, min amount before sending a msg) */}
                {meats.title}
                {meats.amount}
            </div>
        </>
    )
}

export default Meats