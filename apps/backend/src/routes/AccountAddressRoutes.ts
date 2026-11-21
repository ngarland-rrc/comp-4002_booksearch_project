import { Router } from 'express';
import { AccountAddressController } from '../controllers/AccountAddressController';

const router = Router();
const accountAddressController = new AccountAddressController();

// Route: GET /api/addresses
// Description: Fetch all account address records
router.get('/', (req, res) => accountAddressController.getAccountAddressItems(req, res));

// Route: POST /api/addresses
// Description: Create a new account address record
router.post('/', (req, res) => accountAddressController.createAccountAddressItem(req, res));

export default router;