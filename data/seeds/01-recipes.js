
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipes').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('recipes').insert([
				{ id: 1, name: 'Cheese', text: "Individually wrapped." },
				{ id: 2, name: 'Kool Aid', text: "Drink it." },
				{ id: 3, name: 'Pop Tarts', text: "Need more fruit." }
			]);
		});
};
