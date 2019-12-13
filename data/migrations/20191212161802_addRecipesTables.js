
exports.up = function (knex) {
	return knex.schema
		.createTable("recipes", tbl => {
			tbl.increments();

			tbl.string("name", 255)
				.notNullable();
		})

		.createTable("ingredients", tbl => {
			tbl.increments();

			tbl.string("name", 255)
				.notNullable();
		})

		.createTable("recipe_ingredients", tbl => {
			tbl.primary(["recipe_id", "ingredient_id"]);

			tbl.integer("recipe_id")
				.notNullable()
				.references("id")
				.inTable("recipes")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			tbl.integer("ingredient_id")
				.notNullable()
				.references("id")
				.inTable("ingredients");

			tbl.float("ingredient_amt")
				.notNullable()

		})

		.createTable("steps", tbl => {
			tbl.increments();

			tbl.integer("step_number")
				.notNullable()
				.unsigned();
			tbl.text("instruction")
				.notNullable();
			tbl.integer("recipe_id")
				.notNullable()
				.references("id")
				.inTable("recipes");
		})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('steps')
		.dropTableIfExists('recipe_ingredients')
		.dropTableIfExists('ingredients')
		.dropTableIfExists('recipes');
};
