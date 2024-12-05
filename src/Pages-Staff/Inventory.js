import "../Pages-Staff-CSS/Inventory.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar(){
    return(
        <>
        <div>
            <p>
            <ol>
                <li>
                    
                    <Link to="/Inventory/Fishes" />Fish
                </li>
                <li>
                    <Link to="/Inventory/Meats" />Meats
                </li>
                <li>
                    <Link to="/Inventory/Fruits" />Fruits
                </li>
                <li>
                    <Link to="/Inventory/Vegetables" />Vegetables
                </li>
            </ol>
            </p>
        </div>
        </>
    )
}

function Data(){
    const [meats, setMeats] = useState([ 
            {id: 1, title: "Chicken", amount: 17, lowest: 5 },
            {id: 2, title: "Duck", amount: 7},
            {id: 3, title: "Beef", amount: 9},
            {id: 4, title: "Deer", amount: 20},
        ])
    return(
        <>
            <div className="">
                <div>
                    Like
                    {/* pull the data(title, amount, max amount, min amount before sending a msg) */}
                    {meats.map((meat) => (
                        <div key={meat.id}>
                            There is {meat.amount} {meat.title} left. if {meat.amound - meat.lowest}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

function Inventory(){
    //usestate for each of the side bar

    return(
        <>
        <div className="InventoryBox1">
            <h1>
                Inventory
            </h1>
        </div>
        <div className="InventoryBox2"> {/* Grid 1 */}
            <div className="InventoryBoxes1">
                <SideBar />
            </div>
            <div className="InventoryBoxes2">
                <Data />
            </div>
        </div>
        </>
    )
}

export default Inventory