const { Coffee } = require('../models')

module.exports = {
    // ดึงข้อมูลทั้งหมด
    async index (req, res) {
        try {
            const coffees = await Coffee.findAll()
            res.send(coffees)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the coffees'
            })
        }
    },
    // สร้างข้อมูลใหม่
    async post (req, res) {
        try {
            const coffee = await Coffee.create(req.body)
            res.send(coffee)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the coffee'
            })
        }
    },
    // แก้ไขข้อมูล
    async put (req, res) {
        try {
            await Coffee.update(req.body, {
                where: {
                    id: req.params.coffeeId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to update the coffee'
            })
        }
    },
    // ลบข้อมูล
    async delete (req, res) {
        try {
            const {coffeeId} = req.params
            const coffee = await Coffee.findOne({
                where: {
                    id: coffeeId
                }
            })
            if (!coffee) {
                return res.status(403).send({
                    error: 'The coffee information was not found'
                })
            }
            await coffee.destroy()
            res.send(coffee)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete the coffee'
            })
        }
    },
    // ดูข้อมูลรายตัว
    async show (req, res) {
        try {
            const coffee = await Coffee.findByPk(req.params.coffeeId)
            res.send(coffee)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to show the coffee'
            })
        }
    }
}