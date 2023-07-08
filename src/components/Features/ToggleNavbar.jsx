import  { useState } from 'react'

export default function ToggleNavbar() {
  const [Toggle,setToggle]=useState(false)

  return [Toggle,setToggle]
}
