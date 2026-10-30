import { useState, useEffect } from "react"
import { Link } from "react-router"
import "./Account.css"
import RecipientForm from "../../common/Recipient/RecipientForm"
import RecipientList from "../../common/Recipient/RecipientList"
import { recipientService } from "../../../services/AccountAddressService"
import type { Recipient } from "../../../mockData/mockRecipient"
import { useFormInput } from "../../../hooks/useAccountAddress"

function Account() {
  // State to toggle between account overview and address management view
  const [showAddresses, setShowAddresses] = useState(false)

  // Use the custom useFormInput hook to manage form inputs efficiently
  const name = useFormInput("")
  const phone = useFormInput("")
  const address = useFormInput("")

  // State to store the list of saved recipients
  const [recipients, setRecipients] = useState<Recipient[]>([])

  // Fetch initial recipient data on component mount (with mock data & localStorage fallback)
  useEffect(() => {
    const data = recipientService.getRecipients()
    setRecipients(data)
  }, [])

  // Adapter functions: RecipientForm expects a string-based setter ((val: string) => void),
  // but useFormInput provides an event-based onChange. These handlers bridge the two.
  const handleNameChange = (value: string) => {
    name.onChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>)
  }

  const handlePhoneChange = (value: string) => {
    phone.onChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>)
  }

  const handleAddressChange = (value: string) => {
    address.onChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>)
  }

  // Add a new recipient, persist it to localStorage, and update state
  const addRecipient = () => {
    // Check if any of the field values are empty
    if (!name.value || !phone.value || !address.value) return
    
    // Call service to save the new recipient and get the updated list
    const updatedList = recipientService.addRecipient({ 
      name: name.value, 
      phone: phone.value, 
      address: address.value 
    })
    
    // Update local state to trigger a re-render
    setRecipients(updatedList)
    
    // Clear all form inputs using the hook's built-in reset function
    name.reset()
    phone.reset()
    address.reset()
  }

  // Delete a recipient from the list by its index
  const deleteRecipient = (index: number) => {
    setRecipients(recipients.filter((_, i) => i !== index))
  }

  return (
    <main className="account-page">
      <Link className="home-link" to="/">Home</Link>

      {/* Account Overview Panel */}
      {!showAddresses && (
        <>
          <h2>Your Account</h2>
          <div className="account-panel" onClick={() => setShowAddresses(true)}>
            <h2>Mailing Addresses</h2>
            <p>Manage your recipients and delivery addresses.</p>
          </div>
        </>
      )}

      {/* Address Management View */}
      {showAddresses && (
        <>
          <RecipientForm 
            name={name.value} 
            setName={handleNameChange}
            phone={phone.value} 
            setPhone={handlePhoneChange}
            address={address.value} 
            setAddress={handleAddressChange}
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