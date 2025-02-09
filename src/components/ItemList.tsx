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
        <div key={item.id} className="flex justify-center items-center border-white border-2 mb-2 p-4 rounded-xl">
            {editId === item.id ? (
                <div className="flex flex-col md:flex-row gap-x-4 gap-y-4 md-gap-y-0">
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border rounded p-1 text-black"
                    />
                    <button onClick={() => handleSave(item.id)} className="px-2 py-1 rounded-xl border-white border-2">
                        Save
                    </button>
                    <button onClick={handleCancel} className="px-2 py-1 rounded-xl border-white border-2">
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="flex gap-x-4 justify-center items-center">
                    <span className="w-24 md:w-52 text-wrap">{item.text}</span>
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