import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

const transactionRouter = Router();

transactionRouter.post('/', async (request: Request, response: Response) => {
  try {
    console.log(`payerIdentifier: ${request.body.payerIdentifier}`);
    console.log(`value: ${request.body.value}`);
    console.log(`recieverIdentifier: ${request.body.recieverIdentifier}`);
    var jsonString = JSON.stringify(request.body);
    var qrCodeString = bcrypt.hashSync(jsonString, 8);
    console.log(`qrCodeString: ${qrCodeString}`);
    response.json({ qrCodeString: qrCodeString });
  } catch (err) {
    console.log('Error');
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
