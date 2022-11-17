const Category = require('../models/Category.model')

module.exports.categoriesController = {
    addCategory: (req, res) => {
        Category.create({
            name: req.body.name
        }).then((data) => {
            res.json(data)
        })
    },
    getCategories: (req, res) => {
        Category.find().then((data) => {
            res.json(data)
        })
    }
}