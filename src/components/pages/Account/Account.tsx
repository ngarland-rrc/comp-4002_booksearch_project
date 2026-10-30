import { useState, useEffect } from "react"
import { Link } from "react-router"
import "./Account.css"
import RecipientForm from "../../common/Recipient/RecipientForm"
import RecipientList from "../../common/Recipient/RecipientList"
import { recipientService } from "../../../services/AccountAddressService"
import type { Recipient } from "../../../mockData/mockRecipient"

function Account() {
  const [showAddresses, setShowAddresses] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [recipients, setRecipients] = useState<Recipient[]>([])

  // Fetch initial recipient data on component mount (with mock data & localStorage fallback)
  useEffect(() => {
    const data = recipientService.getRecipients()
    setRecipients(data)
  }, [])

  // Add a new recipient, persist it to localStorage, and update state
  const addRecipient = () => {
    if (!name || !phone || !address) return
    
    // Call service to save the new recipient and get the updated list
    const updatedList = recipientService.addRecipient({ name, phone, address })
    
    // Update local state to trigger a re-render
    setRecipients(updatedList)
    
    // Clear form inputs
    setName("")
    setPhone("")
    setAddress("")
  }

  // Delete a recipient from the list by its index
  const deleteRecipient = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index))
  }

  return (
    <main className="account-page">
      <Link className="home-link" to="/">Home</Link>

      {!showAddresses && (
        <>
          <h2>Your Account</h2>
          <div className="account-panel" onClick={() => setShowAddresses(true)}>
            <h2>Mailing Addresses</h2>
            <p>Manage your recipients and delivery addresses.</p>
          </div>
        </>
      )}

      {showAddresses && (
        <>
          <RecipientForm 
            name={name} setName={setName}
            phone={phone} setPhone={setPhone}
            address={address} setAddress={setAddress}
            onAdd={addRecipient}
          />
          <RecipientList 
            recipients={recipients} 
            onDelete={deleteRecipient} 
          />
        </>
      )}
    </main>
  )
}

export default Account