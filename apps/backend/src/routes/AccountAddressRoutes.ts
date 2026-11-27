import { Router } from 'express';
import { AccountAddressController } from '../controllers/AccountAddressController';
import { validate } from '../middlewares/validate'; // 1. Import the validation middleware
import { createAddressSchema } from '../schemas/address.schema'; // 2. Import the corresponding validation schema

const router = Router();
const accountAddressController = new AccountAddressController();

// Keep GET request as is
router.get('/', (req, res) => accountAddressController.getAccountAddressItems(req, res));

// 3. Insert the validation middleware into the POST request
router.post(
  '/', 
  validate(createAddressSchema), // Validate before the request reaches the controller
  (req, res) => accountAddressController.createAccountAddressItem(req, res)
);

export default router;