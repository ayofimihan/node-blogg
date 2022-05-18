const fs = require('fs')

//reading files
// fs.readFile('./docs/doc1.txt', (err, data)=>{
//  if(err){
//   console.log(err);
//  }
//  console.log(data.toString());

// })

//writing files
// fs.writeFile('./docs/doc1.txt', 'ogunsina champion', ()=> {
//  console.log('file was written')
// })

//if the file didnt exist, it will create one
// fs.writeFile('./docs/doc2.txt', 'ogunsina champion', () => {
//   console.log('file was written')
// })

//creating directories
// if(!fs.existsSync('./assets')){
//  fs.mkdir('./assets', () => {
//    console.log('folder created')
//  })
// }
// else
// {
//  fs.rmdir('./assets', (err)=>{
//   if (err){
//    console.log(err);
//   }
//   console.log('folder deleted');

//  })
// }

//deleting files
if (fs.existsSync('./docs/doc1.txt')){
 fs.unlink('./docs/doc1.txt', ()=>{
  console.log('file deleted');
 })
}