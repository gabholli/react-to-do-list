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
        <div key={item.id} className="flex justify-between items-center border-white border-2 mb-2 p-4 rounded-xl">
            {editId === item.id ? (
                <div className="flex gap-x-4">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border rounded p-1"
                    />
                    <button onClick={() => handleSave(item.id)} className=" px-2 py-1 rounded-xl border-white border-2">
                        Save
                    </button>
                    <button onClick={handleCancel} className="px-2 py-1 rounded-xl border-white border-2">
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="flex gap-x-4 justify-center items-center">
                    <span className="w-40 text-wrap">{item.text}</span>
                    <button onClick={() => handleEdit(item)} className="px-2 py-1 rounded-xl border-white border-2">
                        Edit
                    </button>
                    <button onClick={() => onDelete(item.id)} className="px-2 py-1 rounded-xl border-white border-2">
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