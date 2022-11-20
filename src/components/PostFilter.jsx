import React from 'react'
import MyInput from './UI/input/MyInput';
import MySelect from './UI/MySelect/MySelect';

export default function PostFilter({filter, setFilter, options}) {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder="Search"
      />
      <MySelect
        value={filter.sort}
        options={options}
        onChange={sort => setFilter({...filter, sort: sort})}
        defaultValue='Sort by'
      />
    </div>
  )
}
