const express=require('express');
const app=express();
const path=require("path");

let quotes=[
    {
        quote:"MY NAME IS SAMARTH VOHRA",
        Author:"~Samarth Vohra"
    },
    {
        quote:"MY NAME IS KASHISH VOHRA",
        Author:"~Kashish Vohra"
    },
    {
        quote:"MY NAME IS RUPESH KUMAR",
        Author:"~Rupesh Kumar"
    },
    {
        quote:"MY NAME IS ZEESHAN ADEEN",
        Author:"~Zeeshan Adeen"
    },
    {
        quote:"BAHUT BADA AADMI BAN GAYA HU",
        Author:"~Sam"
    },{
        quote:"SAMARTH IS THE BEST MENTOR",
        Author:"~coding blocks"
    }
]

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("root route");
})


app.get('/allquotes',(req,res)=>{
    res.render('index',{quotes});
})


app.get('quote/input',(req,res)=>{
    res.render('input');
})

app.post('/quote/input',(req,res)=>{
    let {quote, Author} = req.body;
    quotes.push({quote, Author});
    res.redirect('/allquotes');
})

// app.post('/allquotes', (req,res)=>{
//     console.log(req.body);          //req. body gives undefined
//     let {Author, quotes} = req.body;
//     quotes.push({Author, quotes});
//     res.redirect('/allquotes');
// })

app.get('/quotes/:Author',(req,res)=>{
    let {Author}=req.params;
    let foundauthor=quotes.find((item)=>{return item.Author==Author})
    res.render('show', {foundauthor});
})


app.listen(8080,()=>{
    console.log("server connected at port 8080");
})









