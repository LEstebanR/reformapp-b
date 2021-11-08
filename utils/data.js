const mongoose = require('mongoose');
const Categories = require('../models/categories.model');
const User = require('../models/users.models');

console.log(process.env.ATLAS_URI);

mongoose.connect('mongodb+srv://LEsteban:lestebanMongo2021@cluster0.3c36m.mongodb.net/reformapp', { useNewUrlParser: true },);
mongoose.connection.on('error', function (e) {});

async function run (){
  const category = [
    'propietario',
    'carpintería',
    'cielos',
    'electricidad',
    'enchape',
    'pintura',
    'pisos',
    'plomería',
  ]
   
  //Categories
  for(let i = 0; i < category.length; i++){
    const categories = new Categories({
      subject: category[i],
    }
    )
    await categories.save()
  }

  //Users
  // for(let i = 0; i < 10; i++){
  //   const user = new User({
  //     name: 'User' + i,
  //     email: 'user' + i + '@gmail.com',
  //     password: '123456',
  //     role: 'owner',
  //     avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
 
  //   })
  //   await user.save()
  // }
  mongoose.disconnect() 
}
run()

