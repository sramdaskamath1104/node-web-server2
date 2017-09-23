const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;


var app = express();
app.set('View Engine', 'hbs');

app.use((req, res, next) =>{

var now = new Date().toString();
console.log(`Current time is ${now}`);
  next();
})


app.use((req, res, next) =>{

res.render('maint.hbs');

})


app.use(express.static(__dirname + '/public'));

app.listen(port, ()=>{
  console.log(`Server is up and running on port ${port} `);
});

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear()
});

app.get('/', (req, resp) =>{
  //resp.send("<h1>Hello Express</h1>");
resp.send({
name : 'Sudhi',
Age : 32,
Country : 'India'
})

});

app.get('/about', (req, resp) =>{
  //resp.send("<h1>Hello Express</h1>");
resp.render('about.hbs', {
  pageTitle : ' About Sudhi'

})

});

app.get('/bad', (req, resp) =>{
  //resp.send("<h1>Hello Express</h1>");
  resp.send({
    errorMessage : 'This application is under construction',
    StatusCode : [200, 300, 400, 500],
    StatusMessages : ['Under Build', 'Under construction', 'Test App']
  })

});
