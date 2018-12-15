const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {}, (err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log('connected')
  }
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  _id : {type: Number , unique : true, index: true},
  ownerId: Number,
  name: String,
  avatar : String, 
  repo:{ 
    // repoId:Number, 
    url:String, 
    name : String, 
    description: String, 
    watcher: Number 
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data, callback) => {
  // console.log(data)
  if(data){
    data.forEach((indRepo)=>{
      let Repos = new Repo({
        _id: indRepo.id,
        ownerId : indRepo.owner.id,
        name: indRepo.owner.login.toLowerCase(),
        avatar: indRepo.owner.avatar_url,
        repo:{
          // repoId: indRepo.id,
          url: indRepo.url,
          name: indRepo.name,
          description: indRepo.description,
          watcher: indRepo.watcher
        }
      })
      Repos.save() 
      // Repos.save()
    })
  }

  callback()
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

let find =( data ,callback)=>{
    Repo.find(data , callback)
}

module.exports ={
  save,
  find
} 
  