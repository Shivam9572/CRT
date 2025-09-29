const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense");

router.post("/", expenseController.addExpense);         // Add Expense
router.get("/", expenseController.getExpenses);         // Get All Expenses
router.delete("/:id", expenseController.deleteExpense); // Delete Expense
router.put("/:id", expenseController.updateExpense);
router.get("/:id", expenseController.getExpense);    // [Bonus] Edit Expense

module.exports = router;
