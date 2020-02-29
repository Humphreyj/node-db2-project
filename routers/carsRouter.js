const express = require('express');

const data = require('../data/dbConfig');
const router= express.Router()

function getById(id) {
    return data('cars')
      .where({id})
      .first();
  }

router.get('/', (req, res) => {
    data('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    getById(id)
    .then(car => {
        if(car) {
            res.status(200).json(car);
        }else {
            res.status(404).json({message: "Car Not Found!"});
        }
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
    
})

router.post('/', (req, res) => {
  const newCarData = req.body;

  data('cars').insert(newCarData)
  .then(ids => {
      return getById(ids[0])
      .then(newCar => {
          res.status(201).json(newCar)
      })
  })
  .catch(err => {
      res.status(500).json({error: err.message})
  })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const newData = req.body;

    data('cars').where({id}).update(newData)
    .then(response => {
        if(response > 0) {
            res.status(200).json({message:'Car details updated.'})
        }else {
            res.status(404).json({message: 'This car was not found'})
        }
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
    
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    data('cars').where({id}).del()
    .then(count => {
        if(count > 0) {
            res.status(204).end()
        }
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})






module.exports = router;