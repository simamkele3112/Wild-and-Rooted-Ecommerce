import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import './Task.css';

function Tasks({ id, table, order }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition: transition || 'none',
    transform: transform ? CSS.Transform.toString(transform) : '',
    padding: '2rem',
    margin: '1rem',
    border: '1px solid #ddd',
    borderRadius: '2rem',
    backgroundColor: '#f8f8f8',
    cursor: 'move',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    height:'auto',
  };

  const handleShift = () => {
    // Implement the logic to handle shifting, if necessary
    console.log("Shift clicked");
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} key={id}>
      <h3 className="TheTableName">{table}</h3>
    {/* Render order details */}
    <p className="TheOrderText">
      <div>
        <strong className="TheOrderNameText">Drink:</strong> {order.drink}
      </div>
      <div>
        <strong className="TheOrderNameText">Starter:</strong> {order.starter}
      </div>
      <div>
        <strong className="TheOrderNameText">Main:</strong> {order.main}
      </div>
      <div>
      <strong className="TheOrderNameText">Dessert:</strong> {order.dessert}
      </div>
    </p>
  </div>
  );
}

export default Tasks;

