import { FormEvent, useRef, useState, useEffect } from 'react';

export const SearchBox = ({ handleSearch }: {handleSearch: (e: FormEvent<HTMLFormElement>, CITY: string) => void; }) => {

const [search, setSearch] = useState("");
const inputRef = useRef<HTMLInputElement>(null);

const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
}

useEffect(() => {
    inputRef.current!.focus();
}, [])




  return (
    <form
    id="form"
    onSubmit={(e) =>{
        handleSearch(e, search);
        setSearch("")
    } }
    >
        <label htmlFor="search"> </label>
        <input 
        ref={inputRef}
        autoComplete="off"
        name="search"
        type="search"
        placeholder="Buscar ubicación"
        onChange={handleChange}
        value={search}/>
    </form>
  )
}
