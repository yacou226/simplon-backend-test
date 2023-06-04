
const Client = require('../models/client');


exports.createClient  =  (async(req,res)=>{
  try {
       Client.create(req.body);
    res.status(201).json({ success: true, message: 'client creer avec success' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'veillez remplir tout les champs' });
  }

});

exports.getAllClient = (async (req,res)=>{
  const clients = await Client.find({});
  if(!clients){
    return res.status(500).json({message:'liste invalide'})
  } else{
    return res.status(200).json({clients:clients})

  }
})

exports.deleteOne = (async(req,res)=>{
  try {
    const id = req.params.id;
    await Client.deleteOne({_id:id});
    return res.status(200).json({message:'client is deleted'})
    
  } catch (error) {
    return res.status(500).json({error:error})
  }
  
  
})
// router.delete("/delete/:id",async(req,res)=>{
//   const id= req.params.id
//   const result= await client.deleteOne({ _id:id})
//   res.status(200).json({message:"element supprimé de la db"})
  
// })

exports.test = ((req,res)=>{
  res.send('hello');
});
