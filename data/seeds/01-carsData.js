
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'Vx7ydA7yh777',make: 'Ford',model: 'F-150',mileage: 94542, transmission: 'Auto', titleStatus: 'Clear'},
        {id: 2, VIN: 'Vx7ydA456456',make: 'Toyota',model: 'Tacoma',mileage: 65054, transmission: 'Manual', titleStatus: 'Clear'},
        {id: 3, VIN: 'Crygerhy6432',make: 'Nissan',model: 'Titan',mileage: 75435, transmission: 'Auto', titleStatus: 'Clear'},
        
      ]);
    });
};
