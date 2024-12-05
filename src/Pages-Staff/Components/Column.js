import { SortableContext,verticalListSortingStrategy } from "@dnd-kit/sortable"
import Tasks from "./Tasks"
import './Column.css'

function Column({ tasks }){
  return (
  <div className='column'>
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {tasks.map((task) => (
        <div key={task.id} >
          <div className="EachItem" key={task.id} >
            <Tasks 
              id={task.id}
              table={task.table} 
              order={task.order}
              key={task.id} 
            />
            <button className="MoveOver" key={task.id}> ={'>'} </button>
          </div>
        </div>
      ))}
    </SortableContext>
  </div>)
}

export default Column