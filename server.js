// const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())
const Library = {
    'science':{
        'chemistry':'Subseries, Kov-Series, Aki-Ola',
        'Physics': 'Aki-OLA, Atta-Kay, Physics GAST',
        'Elective Maths': 'Aki-OLA,',
        'Biology':'Biology-GAST, Modern Biology, Fast Track',
    },
    'business':{
        'Accounting':'Accounting All in One, Accounting All in One',
        'Economics':'Freakonomics, The Wealth of Nations',
        'Costing': 'Cost Accounting, The Time Driven Activity Base On Costing',
        'Business Management':'Advance Management Accounting, Introduction Of Management Accounting',

    },
    'home_economics':{
        'Management In Living':'Understanding Management In Living, Apo Galore Management in Living',
        'Food And Nutrition':'food and nutrition Guide, food Politics',
        'Clothing and Textiles':'Clothing and Fashion, Garment and Textile Dictionary',
        'Biology':'Biology-GAST, Modern Biology, Fast Track',
    },
    'general_art':{
        'E-math':'Aki-Oli',
        'Government':'Economic Report Of The President, Cabinet Governmnet',
        'Economics':'Freakonomics, The Wealth Of Nations',
        'Geography':'Prisoner Of Geography, The power of Geography, World Regional Geography',
    },
    'Core_Subject':{
        'Core-Maths':'Aki OLA, Core-Maths for Senior High School, Core Math A+',
        'English':'Charlottes Web E.B. White, Mieko and the Fifth Treasure Eleanor Coerr, The Outsiders S.E. Hinton',
        'Integrated Science':'Aki-OLA, Approaches',
        'Social Studies':'AKI-OLA',
    }
    
}


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:librarybooks',(req, res)=>{
    const librarybooks = req.params.librarybooks.toLowerCase()
    if(Library[librarybooks]){
        res.json(Library[librarybooks])
    }else{
        
        res.json(Library['Core Subject'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`you are Listening to Port number ${PORT}`)
})