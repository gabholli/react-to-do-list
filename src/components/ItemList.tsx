import { useState } from "react"
import { ItemListProps } from "../types/types"

const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onEdit }) => {

    const [editId, setEditId] = useState<number | null>(null)
    const [editText, setEditText] = useState<string>('')

    const handleEdit = (item: { id: number; text: string }) => {
        setEditId(item.id)
        setEditText(item.text)
    }

    const handleSave = (id: number) => {
        onEdit(id, editText)
        setEditId(null) // Exit edit mode
    }

    const handleCancel = () => {
        setEditId(null) // Exit edit mode
    }

    const itemsMap = items.map(item => (
        <div key={item.id} className="flex justify-between items-center border-black border-2 mb-2 p-4">
            {editId === item.id ? (
                <div className="flex gap-x-4">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border rounded p-1"
                    />
                    <button onClick={() => handleSave(item.id)} className="bg-blue-200 px-2 py-1 rounded-xl">
                        Save
                    </button>
                    <button onClick={handleCancel} className="bg-blue-200 px-2 py-1 rounded-xl">
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="flex gap-x-4 justify-center items-center">
                    <span className="w-40 text-wrap">{item.text}</span>
                    <button onClick={() => handleEdit(item)} className="bg-blue-200 px-2 py-1 rounded-xl">
                        Edit
                    </button>
                    <button onClick={() => onDelete(item.id)} className="bg-blue-200 px-2 py-1 rounded-xl">
                        Delete
                    </button>
                </div>
            )}
        </div>
    ))

    return (
        <div>
            {itemsMap}
        </div>
    )
}

export default ItemList