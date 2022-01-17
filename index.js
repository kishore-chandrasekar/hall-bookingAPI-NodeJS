const express = require("express");
const app = express();
const cors = require("cors");
let options = { origin: "*" }
app.use(cors(options))
let Createroom = [{
    "id": 1,
    "seatcount": 50,
    "amenities": [{ "one": "television", "two": "conferencetable", "three": "speakers", "four": "smartboard", "five": "projector" }],
    "price": 5000
}, {
    "id": 2,
    "seatcount": 45,
    "amenities": [{ "one": "television", "three": "speakers", "four": "smartboard", "five": "projector" }],

    "price": 4500
}, {
    "id": 3,
    "seatcount": 40,
    "amenities": [{ "one": "television", "two": "conferencetable", "three": "speakers", "five": "projector" }],

    "price": 4300
}, {
    "id": 4,
    "seatcount": 50,
    "amenities": [{ two: "conferencetable", three: "speakers", four: "smartboard", five: "projector" }],

    "   ": 4000
}, {
    "id": 5,
    "seatcount": 35,
    "amenities": [{ "one": "television", "two": "conferencetable", "three": "speakers", "four": "smartboard" }],

    "price": 4200
}, {
    "id": 6,
    "seatcount": 30,
    "amenities": [{ "one": "television", "two": "conferencetable", "three": "speakers", "five": "projector" }],

    "price": 3800
}, {
    "id": 7,
    "seatcount": 25,
    "amenities": [{ "one": "television", "two": "conferencetable", "five": "projector" }],

    "price": 3000
}]
app.use(express.json())
app.get("/users", function (req, res) {
    res.json(Createroom)
})
app.post("/create", function (req, res) {
    req.body = Createroom

    res.json({ message: "Rooms-added" })
})
app.put("/bookroom/:id", function (req, res) {
    let index = Createroom.findIndex(obj => obj.id == req.params.id);
    let keyarray = Object.keys(req.body);
    keyarray.forEach((obj) => {
        Createroom[index][obj] = req.body[obj]
    })
    res.json({ message: "room booked" })
})

app.listen(3000);
