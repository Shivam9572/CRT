const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/bookPurchase");

router.post("/", expenseController.addBook);         // Add Expense
router.get("/", expenseController.getBooks);         // Get All Expenses
router.delete("/:id", expenseController.deleteBook); // Delete Expense

router.get("/:id", expenseController.getBook);
router.get("/returnbooks/all",expenseController.returnBooks);    // [Bonus] Edit Expense

module.exports = router;
