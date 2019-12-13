
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipes').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('recipes').insert([
				{ id: 1, name: 'Cheese'},
				{ id: 2, name: 'Kool Aid'},
				{ id: 3, name: 'Pop Tarts' }
			]);
		});
};
