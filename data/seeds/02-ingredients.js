
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('table_name').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('table_name').insert([
				{ id: 1, name: 'a box' },
				{ id: 2, name: 'water gallon' },
				{ id: 3, name: 'drink mix' },
				{ id: 4, name: 'package' },
				{ id: 5, name: 'slice' },
				{ id: 6, name: 'packet' }
			]);
		});
};
