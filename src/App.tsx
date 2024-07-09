import './App.css'
import CustomForm from './components/CustomForm'
import { useState } from 'react'
import { TodoItem } from './types/types'
import ItemList from './components/ItemList'

function App() {
  const [items, setItems] = useState<TodoItem[]>([])

  const addItem = (item: string) => {
    setItems([...items, { id: Date.now(), text: item }])
  }

  const editItem = (id: number, newText: string) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, text: newText }
      }
      return item
    })
    setItems(updatedItems)
  }

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <>
      <div className='bg-blue-100 min-h-svh flex flex-col items-center gap-y-8'>
        <h1 className='mt-12 text-4xl'>To Do List</h1>
        <CustomForm onAddItem={addItem} />
        <ItemList items={items} onDelete={deleteItem} onEdit={editItem} />
      </div>
    </>
  )
}

export default App
