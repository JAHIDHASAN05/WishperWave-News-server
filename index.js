const express= require('express')

const app= express()
const port= 1212;
const cors= require('cors')
const categoryNews= require('./Data/Category.json');
const news= require('./Data/news.json')


app.use(cors())


app.get('/category',(req,res)=>{
    res.send(categoryNews)
})


app.get( '/category/:id', (req, res)=>{


   const id=req.params.id

   if(id==0){
    res.send(news)
   }
   else{
    
       const categoryNews= news.filter(n=> n.category_id === id)
       res.send(categoryNews)    
   }
})


app.get('/news/:id', (req, res)=>{
    const filterNews = news.find(n => n._id === req.params.id)
    res.send(filterNews)
})


app.listen(port, ()=>{
    console.log(`runinhg at ${port}`)
})