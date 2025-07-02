import mongoose from "mongoose";
const loanApplySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  goldWeight: { type: Number, required: true },
  address: { type: String, required: true },
  agreeTerms: { type: Boolean, default: false },
  goldType: { type: String, required: true },
});

const LoanApply = mongoose.model("LoanApply", loanApplySchema);

export default LoanApply;
