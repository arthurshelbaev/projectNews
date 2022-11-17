const News = require('../models/News.model')

module.exports.newsController = {
    getNews: (req, res) => {
        News.find().then((data) => {
            res.json(data)
        })
    },
    addNews: (req, res) => {
        News.create({
            tittle: req.body.tittle,
            text: req.body.text,
            category: req.body.category
        }).then((data) => {
            res.json(data)
        })
    },
    getNewsById: (req, res) => {
        News.findById(req.params.id).then((data) => {
            res.json(data)
        })
    },
    getNewsByCat: (req, res) => {
        News.find({category: req.params.id}).populate('category').then((data)=> {
            res.json(data)
        })
    },
    deleteNews: (req, res) => {
        News.findByIdAndDelete(req.params.id).then((data) => {
            res.json("Deleted news with tittle " + data.tittle)
        })
    },
    updateNews: (req, res) => {
        News.findByIdAndUpdate(req.params.id, {
            tittle: req.body.tittle,
            text: req.body.text
        }, { new: true }).then((data) => {
            res.json(data)
        })
    }
}