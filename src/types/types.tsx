export interface TodoItem {
    id: number;
    text: string;
}

export interface ItemListProps {
    items: TodoItem[];
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

export interface CustomFormProps {
    onAddItem: (item: string) => void;
}
