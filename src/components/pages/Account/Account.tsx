import { useState } from "react"
import { Link } from "react-router"
import "./Account.css"
import RecipientForm from "../../common/Recipient/RecipientForm"
import RecipientList from "../../common/Recipient/RecipientList"

type Recipient = {
  name: string
  phone: string
  address: string
}

function Account() {
  const [showAddresses, setShowAddresses] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [recipients, setRecipients] = useState<Recipient[]>([])

  const addRecipient = () => {
    if (!name || !phone || !address) return
    setRecipients([...recipients, { name, phone, address }])
    setName("")
    setPhone("")
    setAddress("")
  }

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