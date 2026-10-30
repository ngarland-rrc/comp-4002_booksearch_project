import type { Recipient } from '../mockData/mockRecipient';

const STORAGE_KEY = 'user_recipients_list';

export const accountAddressRepository = {
  /**
   * Retrieve raw recipient data from localStorage.
   */
  getStoredRecipients(): Recipient[] | null {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return null;
    
    try {
      return JSON.parse(savedData);
    } catch (e) {
      console.error('Failed to parse local storage data', e);
      return null;
    }
  },

  /**
   * Save the recipient list to localStorage.
   */
  saveRecipients(recipients: Recipient[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipients));
  }
};