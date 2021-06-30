constexpress = require('express');
constrouter = express.Router()
constTopics = require('../controllers/stundenplan.controller')
 
router.get('/about', async (req,res)=>{​​​​​​​​
constlist = awaitTopics.findAll();
res.render('about',{​​​​​​​​title:'list', list}​​​​​​​​);
}​​​​​​​​)
 
router.get('/', async (req,res)=>{​​​​​​​​
if (req.query.titel && req.query.content){​​​​​​​​
constdata = {​​​​​​​​tittel:req.query.titel, content:req.query.content}​​​​​​​​
awaitTopics.create(data);
returnres.redirect(req.originalUrl.split("?").shift());
 

    }​​​​​​​​
constlist = awaitTopics.findAll();
res.send(list)

}​​​​​​​​)
 
router.post('/create',async (req,res) => {​​​​​​​​
constdata = {​​​​​​​​
name:req.body.name,
weekday:req.body.weekday,
start:req.body.start,
end:req.body.end
    }​​​​​​​​ 
consttopic = awaitTopics.create(data)
console.log(topic)
res.send(topic);
}​​​​​​​​)
router.get('/creattopic', (req,res) => {​​​​​​​​
res.render('creattopic')
}​​​​​​​​)
 
router.get('/:topicId', async (req,res) => {​​​​​​​​
consttopic = awaitTopics.find(req.params.topicId)
res.send(topic)
}​​​​​​​​)
 
router.post('/update/:topicId', async (req,res) => {​​​​​​​​
constupdate = {​​​​​​​​tittel:req.body.tittel,content:req.body.content}​​​​​​​​
consttopic = awaitTopics.update(req.params.topicId,update)
res.send(topic)

}​​​​​​​​)
 
router.post('/delete/:topicId', async (req,res) => {​​​​​​​​
consttopics = awaitTopics.remove(req.params.topicId)
constlist = awaitTopics.findAll();
res.send(list)
}​​​​​​​​)
 
module.exports = router

