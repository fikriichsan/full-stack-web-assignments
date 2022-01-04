const express = require("express")
const Sequelize = require("sequelize")
const mysql2 = require("mysql2")
const Hewan = require('./models').hewan

const app = express()
port = 3007;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize('hewan_databases', 'root', 'fikri3112',{
    host: "localhost",
    dialect: "mysql"
})

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .then(() => {
        Hewan.sync().then(() => {
          console.log("Table Has been Created");
        });
      })
      .catch((err) => {
        console.log("Unable to Connect", err);
    });
    
// Route
app.get('/', (req,res)=>{
    res.send("test server is ready")
    console.log("server is ready")
})

// Get All
app.get("/hewan", (req, res) => {
    Hewan.findAll().then((result) => {
      res.send({
        msg: "succes",
        data: result
      });
    });
  });
  
  // Get Data By Id
  app.get("/hewan/:id", (req, res) => {
    const hewanId = req.params.id;
    Hewan.findOne({
      where: {
        id: hewanId,
      },
    })
      .then((result) => {
        res.send({
          msg : `menampilkan data hewan dengan id : ${hewanId}`,
          data : result
        });
      })
      .catch((err) => {
        res.send({
          msg: err.message,
        });
      });
  });
  
  // Post Data
  app.post("/hewan", async (req, res) => {
    const body = req.body;
    const hewan = {
      nama: body["nama"],
      namaspesies: body["namaspesies"],
      umur: body["umur"],
    };
  
    try {
      await Hewan.create(hewan);
      res.status(201).send({
        msg: `success menambahkan data hewan`,
        data: hewan,
      });
    } catch (error) {
      res.status(500).send({
        message: error.message,
      });
    }
  });
  
  // Put Data
  app.patch("/hewan/:id", async (req, res) => {
    try {
      const hewanId = req.params.id;
      const body = req.body;
      const hewan = {
        nama: body["nama"],
        namaspesies: body["namaspesies"],
        umur: body["umur"],
      };
  
      await Hewan.update(hewan, {
        where: {
          id: hewanId,
        },
      });
  
      res.status(200).json({
        msg: `success mengupdate data hewan dengan id : ${hewanId}`,
      });
    } catch (error) {
      res.status(500).send({
        msg: error,
      });
    }
  });
  
  // Delete Data By Id
  app.delete("/hewan/:id", (req, res) => {
    const hewanId = req.params.id;
    Hewan.destroy({
      where: {
        id: hewanId,
      },
    })
      .then((result) => {
        res.send({
          msg: `hewan dengan id : ${hewanId} berhasil di delete`,
          jumlahygterdelete : result
        });
      })
      .catch((err) => {
        res.send({
          msg: err.message,
        });
      });
  });

app.listen(port, ()=>{
    console.log("server is listening on", port)
})