
function App(){
  return (
    <>
    <form className="form">
      <div className="form-group">
        <label htmlfor="todo-input">New Item</label>
        <input type="text" id="inputs" placeholder="Add a new Item" />
      </div>
      <button className="add-button">Add</button>
    </form>
    <h1 className="title">Todo-List</h1>
    <ul className="list">
      <li className="list-item">
        <label>
          <input type="checkbox"/>
          Item 1
        </label>
        <button className="delete-button">Delete</button>
      </li>
      <li className="list-item">
        <label>
          <input type="checkbox" /> Item 2
        </label>
        <button className="delete-button">Delete</button>
      </li>
    </ul>
    <p>Comment:</p>
    <select>
      <option value=""></option>
      <option value="Visa">Visa</option>
      <option value="Mastercard">Mastercard</option>
      <option value="momo">Momo Pay</option>
      <option value="Airtel">Airtel</option>
      <option value="PayPal">PayPal</option>
    </select>
    </>
  );
}

export default App
e