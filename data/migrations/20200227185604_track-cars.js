
exports.up = function(knex) {
  //don't forget the RETURN statement
  return knex.schema.createTable('cars', tbl => {
      //creates a primary key called id
      tbl.increments();
      //creates a text field called name which is both required and unique.
      tbl.integer('VIN', 128).unique().notNullable();
      tbl.text('make',20).notNullable();
      tbl.text('model', 20).notNullable();
      tbl.decimal('mileage').notNullable();
      tbl.text('transmission',20);
      tbl.text('titleStatus',20);

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars');
};
