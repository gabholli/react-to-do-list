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
        <div key={item.id} className="flex justify-between items-center">
            {editId === item.id ? (
                <div>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border rounded p-1"
                    />
                    <button onClick={() => handleSave(item.id)} className="mx-2">Save</button>
                    <button onClick={handleCancel} className="mx-2">Cancel</button>
                </div>
            ) : (
                <div>
                    <span>{item.text}</span>
                    <button onClick={() => handleEdit(item)} className="mx-2">Edit</button>
                    <button onClick={() => onDelete(item.id)} className="mx-2">Delete</button>
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