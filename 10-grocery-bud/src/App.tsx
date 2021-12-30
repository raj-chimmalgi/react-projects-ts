import React, { useState } from 'react'
import List from './List'
import Notification from './Notification'

function App() {
  const [list, setList] = useState<string[]>([])
  const [item, setItem] = useState<string>('')
  const [isEdit, setIsEdit] = useState(false)
  const [editItemIndex, setEditItemIndex] = useState<number>(-1)
  const [showNotification, setShowNotification] = useState(false)
  const [message, setMessage] = useState<string>('')

  const clearList = () => {
    setList([])
    enableNotification('List cleared')
  }

  const removeItem = (index: number) => {
    const newList = list.filter((item, itemIndex) => itemIndex !== index)
    setList(newList)
    enableNotification('Item removed from list')
  }

  const handleEditButton = (index: number) => {
    setEditItemIndex(index)
    setIsEdit(true)
    setItem(list[index])
  }

  const editItem = () => {
    const newList = list
    newList[editItemIndex] = item
    setList(newList)
    setIsEdit(false)
    enableNotification('Value changed')
  }

  const addItem = () => {
    setList([...list, item])
    enableNotification('Item added to list')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!item) enableNotification('Please enter value')
    else {
      isEdit ? editItem() : addItem()
      setItem('')
    }
  }

  const enableNotification = (message: string) => {
    setShowNotification(true)
    setMessage(message)
    setTimeout(() => {
      setShowNotification(false)
      setMessage('')
    }, 2000)
  }

  return (
    <main style={{ textAlign: 'center' }}>
      <h3>Grocery Bud</h3>
      {showNotification && <Notification message={message} />}
      <form onSubmit={handleSubmit}>
        <span>
          <input
            id='item'
            name='item'
            type='text'
            placeholder='e.g. eggs'
            value={item}
            onChange={(e) => setItem(e.target.value)}></input>
          <button>{isEdit ? 'Edit' : 'Submit'}</button>
        </span>
      </form>
      <List
        list={list}
        removeItem={removeItem}
        handleEditButton={handleEditButton}
      />
      <section>
        <button onClick={() => clearList()}>clear list</button>
      </section>
    </main>
  )
}

export default App
