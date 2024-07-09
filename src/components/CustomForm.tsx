import { useState } from "react"
import { CustomFormProps } from "../types/types"

const CustomForm: React.FC<CustomFormProps> = ({ onAddItem }) => {

    const [input, setInput] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (input.trim()) {
            onAddItem(input)
            setInput('')
        }
    }

    return (
        <form
            className="flex m-2 gap-x-4"
            onSubmit={handleSubmit}

        >
            <input
                type="text"
                className="rounded-xl indent-4 text-black"
                required
                placeholder="Enter item here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            >
            </input>
            <button type="submit"
                className="px-4 py-2 rounded-xl border-white border-2"
            >
                Add item to list
            </button>
        </form>
    )
}

export default CustomForm