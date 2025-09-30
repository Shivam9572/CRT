const BookPurchase = require("../models/bookPuchase");
const ReturnBooks = require("../models/returnBooks");
const returnBook=require("../models/returnBooks");
 
function fine(id){
  setTimeout(async()=>{
     let book=await BookPurchase.findByPk(id);
     if(book){
        await BookPurchase.update({fine:350},{where:{id:id}});
     }
  },60*60*1000);
}
// ✅ Create Book
exports.addBook = async (req, res) => {
  try {
    const { title} = req.body;
    const book = await BookPurchase.create({ title:title,returned:new Date(Date.now()+60*60*1000) });
    fine(book.id);
    res.status(201).json(book.toJSON());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get All Books
exports.getBooks = async (req, res) => {
  try {
    const books = await BookPurchase.findAll();
    res.json(books.map((b)=>(b.toJSON())));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Delete Book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    
    console.log(req.body);
    const deleted = await BookPurchase.destroy({ where: { id } });
    console.log(deleted);
    if (deleted ) {
      let result=await ReturnBooks.create({title:req.body.title,fine:req.body.fine});
      res.send(result.toJSON());
      return;
    }
     else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.returnBooks=async(req,res)=>{
  try {
    const books = await ReturnBooks.findAll();
    res.json(books.map((b)=>(b.toJSON())));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}



exports.getBook=async(req,res)=>{
  try {
    const { id } = req.params;
    const book = await BookPurchase.findByPk(id);
    if (book) {
      res.json(book.toJSON());
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}