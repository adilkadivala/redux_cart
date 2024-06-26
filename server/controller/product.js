const connectDB = require("../database/connect");
const fs = require("fs");
const path = require("path");

// get data
const getProduct = async (req, res) => {
  try {
    const Que = "SELECT * FROM item";
    connectDB.query(Que, (err, data) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: "internel server error" });
      }
      return res.json(data);
    });
  } catch (error) {
    console.error("error from getting product data");
  }
};

// insert data
const insertProduct = async (req, res) => {
  try {
    const { title, price } = req.body;
    const image = req.file ? req.file.filename : null;

    const Que = "INSERT INTO item (title,price,image) VALUES(?,?,?)";
    const data = [title, price, image];

    connectDB.query(Que, data, (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: "internal server error" });
      }
      return res.sendStatus(200);
    });
  } catch (error) {
    console.error(error);
  }
};

// update data
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price } = req.body;

    let image;
    if (req.file) {
      image = req.file.filename;
    } else {
      image = req.body.image || null;
    }

    const Que = `UPDATE item SET title = ?, price = ?, image = ? WHERE id = ?`;
    const data = [title, price, image, id];

    connectDB.query(Que, data, (err) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: "Internal server error" });
      }
      return res.sendStatus(200);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// deleting product
const deleteProdcut = async (req, res) => {
  try {
    const { id } = req.params;
    const getImage = `SELECT image from item WHERE id =?`;
    connectDB.query(getImage, [id], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({
          message: "error got from deleting product while getting image",
        });
      }

      if (result.length > 0) {
        const image = result[0].image;

        // deleting the data record from database
        const deleteData = `DELETE FROM item WHERE id=?`;
        connectDB.query(deleteData, [id], (err) => {
          if (err) {
            console.error(err.message);
            return res.status(500).json({
              message: "error got from deleting data from database",
            });
          }

          const filepath = path.join(
            __dirname,
            "../../client/public/uploads",
            image
          );

          //   checking the file if it's exist

          fs.access(filepath, fs.constants.F_OK, (err) => {
            if (err) {
              console.error(`File not exist:${filepath}`);
              return res.status(500).json({ message: "File not found" });
            }

            // deleting the image from local directory

            fs.unlink(filepath, (err) => {
              if (err) {
                console.error(
                  `error got while deleting image: ${err.message} `
                );
                return res
                  .status(500)
                  .json({ message: "Internal server error" });
              }
              return res.sendStatus(200);
            });
          });
        });
      } else {
        return res.status(404).json({ message: "Record not found" });
      }
    });
  } catch (error) {
    console.error(`Unexpected error: ${error.message}`);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProduct,
  insertProduct,
  updateProduct,
  deleteProdcut,
};
