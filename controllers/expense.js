const Expense = require("../models/expense");

// ✅ Create Expense
exports.addExpense = async (req, res) => {
  try {
    const { title, amount, category, description } = req.body;
    const expense = await Expense.create({ title, amount, category, description });
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get All Expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Expense.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: "Expense deleted successfully" });
    } else {
      res.status(404).json({ message: "Expense not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🎯 [Bonus] Update Expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, category, description } = req.body;

    const expense = await Expense.findByPk(id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });

    await expense.update({ title, amount, category, description });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.getExpense=async(req,res)=>{
  try {
    const { id } = req.params;
    const expense = await Expense.findByPk(id);
    if (expense) {
      res.json(expense.toJSON());
    } else {
      res.status(404).json({ message: "Expense not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}