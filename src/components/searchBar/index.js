import React, {useState} from 'react'
import {Input} from 'reactstrap'

function SearchBar({func}){

    const [search, setSearch] = useState('lalala')

    function handleSubmit(e, ser){

        if(e.key === 'Enter'){
            e.preventDefault()
            func(ser)
        }
    }


    return(
        <div className="row bg-dark shadow d-flex justify-content-center">
          <h2 className="text-danger mx-2 my-2 title col-12 text-center col-md-3">CopyTube</h2>
          <Input type="text" className="rounded col-6 my-2 col-10 col-md-6 searchbar" placeholder="..Search" onChange={e => setSearch(e.target.value)} onKeyDown={e => handleSubmit(e, search)}></Input>
        </div>
    )
}

export default SearchBar