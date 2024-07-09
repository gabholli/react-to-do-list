import './App.css'
import CustomForm from './components/CustomForm'
import ItemList from './components/ItemList'
import useLocalStorage from './hooks/UseLocalStorage'

function App() {
  const [items, setItems] = useLocalStorage("items", [])

  const addItem = (item: string) => {
    setItems([...items, { id: Date.now(), text: item }])
  }

  const editItem = (id: number, newText: string) => {
    const updatedItems = items.map((item: { id: number }) => {
      if (item.id === id) {
        return { ...item, text: newText }
      }
      return item
    })
    setItems(updatedItems)
  }

  const deleteItem = (id: number) => {
    setItems(items.filter((item: { id: number }) => item.id !== id))
  }

  return (
    <>
      <div className='bg-black min-h-svh flex flex-col items-center gap-y-8 text-white'>
        <h1 className='mt-12 text-4xl'>To Do List</h1>
        <CustomForm onAddItem={addItem} />
        <ItemList items={items} onDelete={deleteItem} onEdit={editItem} />
      </div>
    </>
  )
}

export default App
