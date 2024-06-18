import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length === 0) return
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

