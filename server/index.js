import express from 'express'
import cors from 'cors'
import db from './db.js'

const app = express()

app.use(express.json())

app.use(cors())


app.get("/", (req, res) => {
    res.json("Hello to the Server")
})

app.get("/post", (req, res) => {
    const q = "SELECT * FROM digest";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/post", (req, res) => {
    const q = "INSERT INTO digest (`category`, `title`, `desc`, `date`, `cover`) VALUES (?)"
    const values = [
        req.body.category,
        req.body.title,
        req.body.desc,
        req.body.date,
        req.body.cover,    
    ]
    
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Post has been created successfully")
    })
})

app.get("/postdesign", (req, res) => {
    const q = "SELECT * FROM design";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/postdesign", (req, res) => {
    const q = "INSERT INTO design (`category`, `title`, `desc`, `date`, `cover`) VALUES (?)"
    const values = [
        req.body.category,
        req.body.title,
        req.body.desc,
        req.body.date,
        req.body.cover,    
    ]
    
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Post has been created successfully")
    })
})

app.get("/posttutorials", (req, res) => {
    const q = "SELECT * FROM tutorials";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/posttutorials", (req, res) => {
    const q = "INSERT INTO tutorials (`category`, `title`, `desc`, `date`, `cover`) VALUES (?)"
    const values = [
        req.body.category,
        req.body.title,
        req.body.desc,
        req.body.date,
        req.body.cover,    
    ]
    
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("Post has been created successfully")
    })
})

app.get("/post/:id", (req, res) => {
    const postId = req.params.id
    const q = "SELECT * FROM digest WHERE id=?";
    db.query(q, postId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/postdesign/:id", (req, res) => {
    const postId = req.params.id
    const q = "SELECT * FROM design WHERE id=?";
    db.query(q, postId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/posttutorials/:id", (req, res) => {
    const postId = req.params.id
    const q = "SELECT * FROM tutorials WHERE id=?";
    db.query(q, postId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/recdigest", (req, res) => {
    const q = "SELECT * FROM recdigest";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/recdesign", (req, res) => {
    const q = "SELECT * FROM recdesign";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/rectutorials", (req, res) => {
    const q = "SELECT * FROM rectutorials";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8001, () => {
    console.log("Connected to Server")
})