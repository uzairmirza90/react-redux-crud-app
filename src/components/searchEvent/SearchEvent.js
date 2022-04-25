import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../searchEvent/searchEvent.css'
import { useEffect } from 'react'

const SearchEvent = ({ setSearchCondition, setSearch, search }) => {
    const events = useSelector((state) => state.events)

    const [searchValue, setSearchValue] = useState('')

    const searchEventFromState = () => {
        let searchState = events.filter((event) => {
            return Object.values(event).join('').toLowerCase().includes(searchValue.toLowerCase())
        })
        setSearch(searchState)
        setSearchCondition(true)

        
    }

    useEffect(() => {
        if (searchValue.length < 1) {
            setSearchCondition(false)
        } else {
            searchEventFromState()
        }
    }, [searchValue])

    return (
        <>
            <input
                type='text'
                placeholder='Search Events...'
                className='search-input'
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}>
            </input>
        </>
    )
}

export default SearchEvent