import express from 'express';
import {loanApplyController} from '../controller/loan.controller.js';
const router = express.Router();
router.route('/getloan').post(loanApplyController);
export default router;