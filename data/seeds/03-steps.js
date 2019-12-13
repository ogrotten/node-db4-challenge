
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('table_name').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('table_name').insert([
				{
					id: 1,
					recipe_id: 1,
					step_number: 1,
					instruction: "Remove small pkg from big pkg"
				},
				{
					id: 2,
					recipe_id: 1,
					step_number: 2,
					instruction: "Pull wrap off cheese food product"
				},
				{
					id: 3,
					recipe_id: 1,
					step_number: 3,
					instruction: "Eat"
				},
				{
					id: 4,
					recipe_id: 2,
					step_number: 1,
					instruction: "Get pitcher of water."
				},
				{
					id: 5,
					recipe_id: 2,
					step_number: 2,
					instruction: "Stir in drink mix"
				},
				{
					id: 6,
					recipe_id: 2,
					step_number: 3,
					instruction: "Drink."
				},
				{
					id: 7,
					recipe_id: 3,
					step_number: 1,
					instruction: "Toast the poptart."
				}
			]);
		});
};
