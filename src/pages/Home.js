import React from 'react';

export default function Home() {
    const handleSubmit = event => {
      event.preventDefault();
      alert('You have submitted the form!!!!!')
    }
    const handleNewAccount = event => {
      event.preventDefault();
      alert('New Account requested!!!!')
    }

    return (
      <div className="home">
        <h2>Welcome to Capacity</h2>
        <p>This application lets you know if any place of study is at capacity or not, before you arrive.</p>
        <form> 
          <fieldset>
            <label>
              <p>User Name</p>
              <input name="name"/>
            </label>
          </fieldset>
        </form>
        <form onSubmit={handleSubmit}> 
          <fieldset> 
            <label>
              <p>Password</p>
              <input name="name"/>
            </label>
          </fieldset>
          <button type="submit">Login</button>
          <button type="sign-up" onClick={handleNewAccount}>Sign-up</button>
        </form>
      </div>
    )
  }