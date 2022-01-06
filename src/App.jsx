import Header from './components/Header'
import {useState} from 'react'
import initialEmails from './data/emails'

import './App.css'

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  console.log(initialEmails)

  function toggleRead (email){
    return !email.read 

  }

  function toggleHideRead() {
    setHideRead(!hideRead);
  }
  
    let emailsToDisplay = emails
    if(hideRead === true){
      emailsToDisplay= emailsToDisplay.filter( function(email) {
        return !email.read
      })
    }
  
  function updateEmailRead (id, read){
    const findIndex = emails.findIndex( function (email){
      return email.id === id
    })
    emails[findIndex].read = read
    const newArray = [...emails]
    setEmails(newArray)
  }
  function toggleStarred (email){
    return !email.starred 

  }

  function updatedStarredEmail (id, starred){
    const findIndex = emails.findIndex( function (email){
      return email.id === id
    })
    emails[findIndex].starred = starred
    const newStarred = [...emails]
    setEmails(newStarred)
  }
  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={() => {toggleHideRead()
              
              }}

            />
          </li>
        </ul>
      </nav>
      <main className="emails">{
          emailsToDisplay.map(function (email){
          return (
            <li className={email.read ? "email read" : "email unread"} > 
            <input type="checkbox" onClick = {function (){
              const updated = toggleRead(email)
              updateEmailRead (email.id, updated)
            }}
            checked = {email.read}/>
            <input  type="checkbox" className="star-checkbox" onClick = {function (){
              const updated = toggleStarred(email)
              updatedStarredEmail (email.id, updated)
            }}
            checked = {email.starred}/>
            <span>{email.sender}</span>
            <span className='title'>{email.title}</span>


            </li>
          )
        })
      }
        
      </main>
    </div>
  )
}

export default App
