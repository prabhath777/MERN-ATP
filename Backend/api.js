import {app} from './server'





app.get('/users', (req, res) => {
  // handle get request
  res.json({message:"hellooooooooo"})
})

//route to handle post request
app.post('/users', (req, res) => {
  // handle post request
   res.json({message:"update"})
})

//route to handle put request
app.put('/users', (req, res) => {
  // handle put request
 res.json({message:"put re quest"})
})

//route to handle delete request
app.delete('/users', (req, res) => {
  // handle delete request
  res.json({message:"delee"})
})



