import './App.css'
import CustomForm from './components/CustomForm'

function App() {

  return (
    <>
      <div className='bg-blue-200 min-h-svh flex flex-col items-center gap-y-8'>
        <h1 className='mt-12 text-4xl'>To Do List</h1>
        <CustomForm />
      </div>
    </>
  )
}

export default App
