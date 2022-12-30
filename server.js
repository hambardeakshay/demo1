const exprss=require('express');
const path=require('path');
const app=exprss();
app.get('/',(req,res)=>
{
    res.send("<h1>this is web</h1>");

});
app.get('/aky',(req,res)=>
{
    res.sendFile(path.join(__dirname,'./aky.html'))

})
app.listen(3000),()=>
{
    console.log("server listening at 4000");

}
