import { Link } from 'react-router-dom';
import { useState,useRef } from 'react';
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import { BsXSquare } from "react-icons/bs";



function TodoList() {
  const newItem = useRef('')
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)
  const editValue = useRef('')
  const [todoItems, setTodoItems] = useState(
    [
      'Shower', 
      'Walking my dog', 
      'Get ready for work'
    ])

    //get date
    const currDate = new Date().toLocaleDateString();
    

    const [editMode, SetEditMode] = useState(todoItems.map(() => false))


    //toggle edit
    const toggleEdit = (index) => {
      // Create 
      const newEditMode = [...editMode]
      // Toggle
      newEditMode[index] = !newEditMode[index] 
      // Update 
      SetEditMode(newEditMode)
    }
    //edit value in input function
    const handleEdit = (index) => {
      //new Value
      const newValue = editValue.current.value
      //copy array
      const updateTodoItems = [...todoItems]
      //replace the value using splice
      updateTodoItems.splice(index, 1, newValue)
      //update
      setTodoItems(updateTodoItems)
    }

    //add item
    const handleAddItem = (e) => {
      const newItemValue = newItem.current.value.trim();
    
      if (newItemValue !== '' && newItemValue !== ' ' && todoItems.length < 9) {
        setTodoItems([...todoItems, newItemValue]); 
        newItem.current.value = null;
      }
    };


    //handle drag sorting
    const handleSort = () => {
      //disable sorting when editmode is true
      if(editMode.includes(true)) {
        return
      }
      console.log('dragItem',dragItem, 'dragOver',dragOverItem)
      //duplicate items
      let _todoItems = [...todoItems]

      //remove and save the dragged item content
      const draggedItemContent = _todoItems.splice(dragItem.current, 1)
      

      //switch position
      _todoItems.splice(dragOverItem.current, 0, draggedItemContent)

      //reset the postion ref
      dragItem.current = null
      dragOverItem.current = null

      //update the actual array 
      setTodoItems(_todoItems)
    }

    const handleDelete = (deleteIndex) => {
      //copy
      const updatedAfterDeleted = [...todoItems]
      //delete
      updatedAfterDeleted.splice(deleteIndex, 1)
      //update
      setTodoItems(updatedAfterDeleted)
    }


        return (

        <>
          <section className='section_three'> 
            <div className="container_todo">
                <div className="container_size">
                    <h1>Todo List</h1>
                    <h4>{currDate}</h4>
                    <input ref={newItem} maxLength='22' type="text" placeholder='e.g walking dog'/>
                    <button className='btn_additem'
                        onClick={handleAddItem}
                        >Add item</button>
                    <div className='length_clear'>
                        {todoItems.length > 0? <BsXSquare className='clear' onClick={() => setTodoItems([])}/>: null}
                        <h5>You've got <span>{todoItems.length}</span> {todoItems.length <= 1? 'thing':'things'} to do...</h5>
                    </div>
                        {todoItems.map((item, index) => (
                    <div key={index} className="list-item" 
                        draggable 
                        onDragStart={() => dragItem.current = index}
                        onDragEnter={()=> dragOverItem.current = index}
                        onDragEnd={handleSort}   
                        onTouchEnd={handleSort}
                        onTouchStart={() => dragItem.current = index}
                        onTouchMove={() => dragOverItem.current = index}
                        onDragOver={(e) => e.preventDefault()}
                        >
                        {editMode[index] && (
                        <input className='input_edit' maxLength='22' type='text'
                            ref={editValue}
                            defaultValue={item}
                            onChange={(e) => handleEdit(index, e.target.value)}
                        /> 
                        )}
                        <BsList className='fa-solid'/>
                        <h3>{item}</h3>
                        <div className='btn_edit'
                            onClick={() => toggleEdit(index)}
                        >
                        {editMode[index]? <BsCheck2 />:<BsThreeDots />  }</div>
                        <div className='btn_delete' 
                            onClick={() => handleDelete(index)} 
                        ><BsXLg /></div>
                    </div>
                     )) }
                    </div>
                    <p className='reserve_todolist'>Made with ❤️‍ by Yute</p>
                </div> 
                
            </section>
        </>
    );
}

export default TodoList;
