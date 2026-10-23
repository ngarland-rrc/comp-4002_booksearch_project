import { useState } from "react"
import { Link } from "react-router"
import "./Account.css"

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
    if (!name || !phone || !address) {
      return
    }

    const newRecipient: Recipient = {
      name: name,
      phone: phone,
      address: address
    }

    setRecipients([...recipients, newRecipient])

    setName("")
    setPhone("")
    setAddress("")
  }

  const deleteRecipient = (index: number) => {
    setRecipients(
      recipients.filter((_, i) => i !== index)
    )
  }

  return (
    <main className="account-page">

      <Link className="home-link" to="/">Home</Link>

      {!showAddresses && (
        <>
            <h2>Your Account</h2>
            <div 
                className="account-panel" 
                onClick={() => setShowAddresses(true)}
            >
                <h2>Mailing Addresses</h2>
                <p>Manage your recipients and delivery addresses.</p>
            </div>
        </>
      )}

      {showAddresses && (
        <section className="address-section">

          <h2>Add Recipient</h2>

          <input
            type="text"
            placeholder="Recipient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button onClick={addRecipient}>
            Add Recipient
          </button>

          <div className="saved-recipients">

            <h2>Saved Recipients</h2>

            <div className="recipient-list">

              {recipients.map((recipient, index) => (
                <div
                  className="recipient-card"
                  key={index}
                >
                  <p>
                    <strong>Name:</strong> {recipient.name}
                  </p>

                  <p>
                    <strong>Phone:</strong> {recipient.phone}
                  </p>

                  <p>
                    <strong>Address:</strong> {recipient.address}
                  </p>

                  <button
                    onClick={() => deleteRecipient(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}

            </div>

          </div>

        </section>
      )}

    </main>
  )
}

export default Account
