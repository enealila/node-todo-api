const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5ac7815b2e478308d91a5104').then((todo)=>{
	console.log(todo);
});

Todo.findOneAndRemove({_id: '5ac782172e478308d91a5106'}).then((todo)=>{

});