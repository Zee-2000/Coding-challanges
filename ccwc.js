const fs  = require('fs');
//Read the file 
if(fs.existsSync('./test'))
{
    console.log('File exists !');
}
else
{
    console.log('Try to create the file !');
}
fs.readFile('./test' ,'utf-8', (err, data)=>
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data);
    //count the number of lines in the file
    const lines  =  data.split('\n');
    console.log(`Number of lines: ${lines.length}`);
    //count the number of words in the file
    const words = data.split('/s+');
    console.log(`Number of words:{words.length}`);
    const char = data.length;
    console.log(`Number of characters:{char.length}`);
}
);