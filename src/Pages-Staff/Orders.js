import React, { useState } from 'react';
import '../Pages-Staff-CSS/Orders.css'
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor } from '@dnd-kit/core';
import { arrayMove,sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Column from './Components/Column';
import Input from './Components/Input';
import { useSensors } from '@dnd-kit/core';

function OrderHelp({ setHelpOpenFalse }) {
 
  return (
    <>
      <div className='HelpBox'>
        <div className='HelpText'>
        <div>
          <button type="button" className='CloseHelp' onClick={setHelpOpenFalse}>X</button>
        </div>
          <h3 className='HelpHeading'>Help</h3>
          <p><strong>To use the: <br/>Add Order</strong> : clicking "Add Order" button, you will open up pop up that will allow you to create a new order. You can select 1 item from the each drop down option and once you've completed you need to click submit
          <br/>You can also Drag the order inside the column to rearrange the order dragging it with your mouse.</p>
        </div>
      </div>
    </>
  );
}

// Orders Component
function Orders() {
  const [isHelpOpen, setHelpOpen] = useState(false); // Toggle Help
  const [isAddOrdersOpen, setAddOrderOpen] = useState(false);
  
  const setAddOrderOpenFalse = () => {
    setAddOrderOpen(false);
  }
  const setHelpOpenFalse = () => {
    setHelpOpen(false);
  };

  //creating a new item
  const addTask = ( table, order={drink: '',starter:'', main:'', dessert:'' } ) => {
    setTasks((tasks) =>
      [...tasks, { id: tasks.length + 1,
         table,
         drink: order.drink,
         starter: order.starter,
         main: order.main, 
         dessert: order.dessert }]
    );
  };
  // //creating the item in that column
  // const moveToPreparing = ( title ) => {
  //   setPreparing((task) =>
  //     [...preparing, { id: task.id , title }]
  //   );
  // };
  // const addTaskz = ( title ) => {
  //   setServed((preparing) =>
  //     [...served, { id: preparing.id , title }]
  //   );
  // };

  //vert
  const getTaskPositionO = id => tasks.findIndex(task => task.id === id)
  const getTaskPositionP = id => preparing.findIndex(prepare => prepare.id === id)
  const getTaskPositionS = id => served.findIndex(served => served.id === id)
  
  const [tasks, setTasks] = useState([ 
    {id: 1, table: "Table 9", order:{drink: 'coffee',starter:'Seasonal Salad', main:'Roasted Chicken',dessert:'Ice cream' }},
    ]
  )

  const [preparing, setPreparing] = useState([ 
    {id: 1, table: "Table 2",order:{drink: 'coffee',starter:'Bruschetta', main:'Pasta',dessert:'Ice cream' }},
    {id: 2, table: "Table 5",order:{drink: 'coffee',starter:'Vegetable Soup', main:'Roasted Chicken',dessert:'Ice cream' }},
    ]
  )
  const [served, setServed] = useState([ 
    {id: 1, table: "Table 1",order:{drink: 'coffee',starter:'Seasonal Salad', main:'Roasted Chicken',dessert:'Ice cream' }},
    {id: 2, table: "Table 6",order:{drink: 'coffee',starter:'Vegetable Soup', main:'Stuffed Acorn Squash',dessert:'Peanut Butter Dessert' }},
    {id: 3, table: "Table 3",order:{drink: 'coffee',starter:'Bruschetta', main:'Pasta',dessert:'Baked Apples or Pears' }},
    ]
  )
  const handleDragEndO = eventO => {
    const {active, over} = eventO;
 
    if(active.id === over.id) return; //no change if the items dropped in the same place
    
    setTasks( tasks =>{
      const originalPositionO = getTaskPositionO(active.id)
      const newPositionO = getTaskPositionO(over.id)
    
      return arrayMove(tasks, originalPositionO, newPositionO)
    })
  }

  const handleDragEndP = eventP => {
    const {active, over} = eventP;
 
    if(active.id === over.id) return; //no change if the items dropped in the same place
    
    setTasks( preparing =>{
      const originalPositionP = getTaskPositionP(active.id)
      const newPositionP = getTaskPositionP(over.id)
    
      return arrayMove(preparing, originalPositionP, newPositionP)
    })
  }
  const handleDragEndS = eventS => {
    const {activeS, overS} = eventS;
 
    if(activeS.id === overS.id) return; //no change if the items dropped in the same place
    
    setTasks( served =>{
      const originalPositionS = getTaskPositionS(activeS.id)
      const newPositionS = getTaskPositionS(overS.id)
    
      return arrayMove(served, originalPositionS, newPositionS)
    })
  }
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  function AddOrder({ addTask, setAddOrderOpenFalse }) {
    // State to hold form values
    const [order, setOrder] = useState({
      drink: '',
      starter: '',
      main: '',
      dessert: '',
    });
  
    // Dummy data for the lists (you can replace these with dynamic data if needed)
    const drinks = ['Water', 'Soda', 'Juice', 'Beer'];
    const starters = ['Seasonal Salad', 'Vegetable Soup', 'Bruschetta'];
    const mains = ['Roasted Chicken', 'Pasta', 'Stuffed Acorn Squash'];
    const desserts = ['Honey and Lavender Ice Cream', 'Baked Apples/Pears', 'Peanut Butter Dessert'];
  
    // Handle change for form fields
    const handleChange = (e) => {
      const { name, value } = e.target;
      setOrder((prevOrder) => ({
        ...prevOrder,
        [name]: value,
      }));
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Example: Assuming you want to add the order to table 'A1'
      const table = 'A1';  // Or get it dynamically from your application state
  
      // Call addTask function to add the order to the tasks list
      addTask(table, order);
  
      // Close the AddOrder form
      setAddOrderOpenFalse();
    };
  
    return (
      <div className="AddOrderContainer">
        <div className="Header">
          <h2>Add Order</h2>
          <button type="button" className="CloseHelp" onClick={setAddOrderOpenFalse}>
            X
          </button>
        </div>
  
        <form onSubmit={handleSubmit} className="OrderForm">
          <div className="FormGroup">
            <label htmlFor="drink">Select Drink</label>
            <select
              id="drink"
              name="drink"
              value={order.drink}
              onChange={handleChange}
              className="OrderOptions"
            >
              <option value="">--Select a Drink--</option>
              {drinks.map((drink, index) => (
                <option key={index} value={drink}>
                  {drink}
                </option>
              ))}
            </select>
          </div>
  
          <div className="FormGroup">
            <label htmlFor="starter">Select Starter</label>
            <select
              id="starter"
              name="starter"
              value={order.starter}
              onChange={handleChange}
              className="OrderOptions"
            >
              <option value="">--Select a Starter--</option>
              {starters.map((starter, index) => (
                <option key={index} value={starter}>
                  {starter}
                </option>
              ))}
            </select>
          </div>
  
          <div className="FormGroup">
            <label htmlFor="main">Select Main</label>
            <select
              id="main"
              name="main"
              value={order.main}
              onChange={handleChange}
              className="OrderOptions"
            >
              <option value="">--Select a Main--</option>
              {mains.map((main, index) => (
                <option key={index} value={main}>
                  {main}
                </option>
              ))}
            </select>
          </div>
  
          <div className="FormGroup">
            <label htmlFor="dessert">Select Dessert</label>
            <select
              id="dessert"
              name="dessert"
              value={order.dessert}
              onChange={handleChange}
              className="OrderOptions"
            >
              <option value="">--Select a Dessert--</option>
              {desserts.map((dessert, index) => (
                <option key={index} value={dessert}>
                  {dessert}
                </option>
              ))}
            </select>
          </div>
  
          <div className="FormActions">
            <button type="submit" className="OrdersSubmitButton">
              Submit Order
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <>
   
      <div className="HomesBox1">
        <h1>Orders</h1>
      </div>
      <div className="HomesBox2">    
          <div className="HomesBoxe1">
            <div className="HomesBoxes1">
              <h2>🤵 Ordered</h2>
            </div>
            <div className="HomesBoxes2">
            <DndContext sensors={sensors} onDragEnd={handleDragEndO} collisionDetection={closestCorners}>
              {/* <Input onSubmit={addTask} /> */}
              <Column tasks={tasks} onSubmit={addTask}/>
            </DndContext>
            </div>
            <p>Last</p>
          </div>
          
          <div className="HomesBoxe2">
            <div className="HomesBoxes1">
              <h2>👩‍🍳 Preparing</h2>
            </div>
            <div className="HomesBoxes2">
              <DndContext sensors={sensors} onDragEnd={handleDragEndP} collisionDetection={closestCorners}>
                <Column tasks={preparing} />
              </DndContext>
            </div>
            <p>Last</p>
          </div>
          <div className="HomesBoxe3">
            <div className="HomesBoxes1">
              <h2>👩‍💼 Served</h2>
            </div>
            <div className="HomesBoxes2">
              <DndContext sensors={sensors} onDragEnd={handleDragEndS} collisionDetection={closestCorners}>
                <Column tasks={served} />
              </DndContext>
            </div>
            <p>Last</p>
          </div>
      </div>
 
      {/* Toggle Help */}
      <div className='ExtraBtnsGrid'>
        <div className='OrdersBtn1'>
          {!isHelpOpen && (
            <button className='AddOrderBtn' onClick={() => setAddOrderOpen(true)}>
              Add Order
            </button>
          )}
        </div>
        <div className='OrdersBtn2'>
          {!isHelpOpen && (
            <button className='HelpBtn' onClick={() => setHelpOpen(true)}>
              ?
            </button>
          )}
        </div>

        {isHelpOpen && <OrderHelp setHelpOpenFalse={setHelpOpenFalse} />}
        {isAddOrdersOpen && <AddOrder setAddOrderOpenFalse={setAddOrderOpenFalse} />}
      </div>
    </>
  );
}
 
 
export default Orders;