import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {
  const [user, setUser] = useState('mario')
  
  if (!user) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>This Website will allow you to look up a area to see if there are any seats available.</p>
      <p>While at a coffeeshop/place of study update the seating status to receive points on towards a surprise.</p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}