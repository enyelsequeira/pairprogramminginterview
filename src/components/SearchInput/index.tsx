import { InputBase, Paper } from '@material-ui/core'
import React, { FC, useState, ChangeEvent } from 'react'

interface Props{
  setSearchInput: (arg: string) => void
}
const SearchInput:FC<Props> = ({ setSearchInput}) => {

  const [term, setTerm] = useState<string>("")

  const setSearchTerm = (e:  React.ChangeEvent<HTMLInputElement>)=>{
    setTerm(e.target.value)
  }
  const searchFunction = (e:  React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchInput(term)
    setTerm("")
  }



  return (
    <Paper onSubmit={searchFunction} component="form">
      <InputBase
      placeholder="search Movies"
      type="text"
      value={term}
      onChange={setSearchTerm}
      />
      
    </Paper>
  )
}

export default SearchInput
