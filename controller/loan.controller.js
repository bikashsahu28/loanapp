import LoanApply from "../models/loan.model.js";
export const loanApplyController = async (req, res) => {
    try {
        const { name, phone, goldWeight, address, agreeTerms, goldType } = req.body;
        if (!name || !phone || !goldWeight || !address || !agreeTerms || !goldType) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        const loan = await LoanApply.create({
            name,
            phone,
            goldWeight,
            address,
            agreeTerms,
            goldType
        });
        return res.status(201).json({ message: "Loan application submitted successfully", data: loan });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }

}