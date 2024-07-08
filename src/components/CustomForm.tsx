const CustomForm = () => {
    return (
        <form
            className="flex gap-x-6"
        // onSubmit={}

        >
            <input
                type="text"
                className="rounded-xl indent-4"
                required
                placeholder="Enter item here..."
            >
            </input>
            <button type="submit"
                className="bg-blue-300 px-4 py-2 rounded-xl"
            >
                Add item to list
            </button>
        </form>
    )
}

export default CustomForm