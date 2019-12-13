
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
			recipe_id: 1,
			ingredient_id: 4,
			ingredient_amt: 1
		},
        {
			recipe_id: 1,
			ingredient_id: 5,
			ingredient_amt: 1
		},
        {
			recipe_id: 2,
			ingredient_id: 2,
			ingredient_amt: 1
		},
        {
			recipe_id: 2,
			ingredient_id: 3,
			ingredient_amt: 1
		},
        {
			recipe_id: 3,
			ingredient_id: 1,
			ingredient_amt: 1
		},
        {
			recipe_id: 3,
			ingredient_id: 6,
			ingredient_amt: .5
		},
      ]);
    });
};
