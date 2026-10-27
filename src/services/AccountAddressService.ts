import { mockRecipients } from '../mockData/mockRecipient';
import type { Recipient } from '../mockData/mockRecipient';
import { accountAddressRepository } from '../repositories/AccountAddressRepository';

export const recipientService = {
  /**
   * Fetch the list of recipients.
   * Priority is given to localStorage via repository. If empty, falls back to default mock data.
   */
  getRecipients(): Recipient[] {
    const savedData = accountAddressRepository.getStoredRecipients();
    if (savedData) {
      return savedData;
    }
    // Return initial mock data if no local storage data exists
    return mockRecipients;
  },

  /**
   * Add a new recipient, persist the updated list via repository, and return it.
   */
  addRecipient(newRecipientData: Omit<Recipient, 'id'>): Recipient[] {
    const currentList = this.getRecipients();
    
    // Generate a unique ID using current timestamp
    const newRecipient: Recipient = {
      id: 'rec_' + Date.now(),
      ...newRecipientData,
    };

    // Prepend the new recipient so it appears at the top of the list
    const updatedList = [newRecipient, ...currentList];
    
    // Save updated list via repository
    accountAddressRepository.saveRecipients(updatedList);
    
    return updatedList;
  }
};