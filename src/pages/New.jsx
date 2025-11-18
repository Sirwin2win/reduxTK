import React from 'react'

const New = () => {
  let arr = [
    {id:1, name:"John Doe"},
    {id:2, name:"Mary Doe"},
    {id:3, name:"Matthew Doe"},
  ]

  const res = arr.find((v)=>{
    return v.id ===3
  })
  console.log(res)
  return (
    <div>
      <h1>New Page</h1>
  
    </div>
  )
}

export default New
