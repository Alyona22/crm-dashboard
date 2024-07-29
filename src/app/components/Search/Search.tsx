import React from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { Input } from '../Input/Input'
import SearchIcon from '../../assets/Search'
import { type SearchTypes } from '@/app/components/Search/Search.types'

const Search: React.FC<SearchTypes> = ({ onSearch }) => {
  const handleSearch = useDebouncedCallback(
    (term: string) => {
      onSearch(term)
    },
    300
  )

  return (
    <div className='relative mb-3'>
      <Input
        className='search-bg relative bg-search-bg text-search-gray rounded-[10px] text-xs pl-10 h-[38px] w-full md:w-[216px] py-2 border border-transparent transition-colors duration-300 placeholder:text-gray-4 focus:border focus:border-search-gray outline-0'
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <SearchIcon className='absolute top-1/2 -translate-y-1/2 left-2 text-search-gray pointer-events-none'/>
    </div>
  )
}

export default Search
