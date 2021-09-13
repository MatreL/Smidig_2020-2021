const express = require("express");
const router = express.Router();

const repairs = [

];

router.get("/", (req, res) => {
    console.log(repairs);
    res.json(repairs);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const repair = repairs.find((b) => b.id === id);
    res.json(repair);
});

router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const repairIndex = repairs.findIndex((b) => b.id === id);
    const { serialNumber, part, camp, date } = req.body;
    repairs[repairIndex] = { serialNumber, part, camp, id, date };
    res.status(200).end();
});

router.post("/", (req, res) => {
    const { serialNumber, part, camp, date } = req.body;
    console.log(req.body);
    repairs.push({ id: repairs.length + 1, serialNumber, part, camp, date });
    res.status(201).end();
});

module.exports = router;