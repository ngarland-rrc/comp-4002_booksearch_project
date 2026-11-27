import { Request, Response } from 'express';
import { AccountAddressService } from '../services/AccountAddressService';

const accountAddressService = new AccountAddressService();

export class AccountAddressController {
  
  /**
   * Handles GET request to retrieve all account address items
   * Route: GET /api/addresses
   */
  public getAccountAddressItems = async (req: Request, res: Response): Promise<void> => {
    try {
      // Fixed method name to match AccountAddressService
      const items = await accountAddressService.getAllAccountAddressItems();
      res.status(200).json(items);
    } catch (error: any) {
      // Log the real error to the backend console for debugging
      console.error("Internal Error Caught:", error);
      
      // Return a 500 status code with error details for frontend troubleshooting
      res.status(500).json({ 
        error: 'Failed to retrieve account address data', 
        details: error.message 
      });
    }
  };

  /**
   * Handles POST request to create a new account address item
   * Route: POST /api/addresses
   */
  public createAccountAddressItem = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, phone, address } = req.body; // Extract required fields from request body
      const newRecord = await accountAddressService.createAccountAddressItem({ name, phone, address });
      res.status(201).json(newRecord);
    } catch (error: any) {
      // Log creation errors to the backend console
      console.error("Creation Error Caught:", error);
      res.status(400).json({ error: error.message || 'Failed to create account address record' });
    }
  };
}