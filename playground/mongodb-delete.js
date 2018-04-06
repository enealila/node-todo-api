// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    //deletet many
    // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result)=>{
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text:'Something to do'}).then((result)=>{
    //     console.log(result);
    // });

    //find one and delete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // })

    db.collection('users').findOneAndDelete({_id: new ObjectID('57ejkncjabueoj323j2n2')}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    });

    // db.close();
 
});