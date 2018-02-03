const express = require("express")
const cfg = require("./knexfile")
const knex = require("knex")(cfg.development)
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.static("public"))
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/listcontacts", (req, res) => {
    knex("contact").select().then(ret => {
      res.send(ret)
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    })
  })

app.get("/listcontacts/:idcontact", (req, res) => {
    const id = req.params.idcontact
    knex("contact").select().where("idcontact", id).then(ret => {
      res.send(ret[0])
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    })
})

app.post("/addcontact", (req, res) => {
    const contact = req.body
    knex("contact").insert(contact, "idcontact").then(ret => {
        res.send(ret)
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    })
})

app.put("/editcontact/:idcontact", (req, res) => {
    const contact = req.body
    knex("contact").update(contact, "idcontact").then(ret => {
      res.send(ret[0])
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    })
})

app.delete("/removecontact/:idcontact", (req, res) => {
    const id = req.params.idcontact
    knex("contact").del().where("idcontact", id).then(ret => {
      res.send(ret[0])
    }).catch(err => {
      res.status(500).send(err)
      console.log(err)
    })
})

knex.migrate.latest().then(_ =>
    app.listen(3000, _ =>
        console.log("server online!")))