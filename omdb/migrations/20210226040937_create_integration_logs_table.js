exports.up = function(knex) {
	return knex.schema.createTable('integration_logs', function(table) {
		table.increments();
		table.string('url');
		table.json('headers');
		table.json('payload');
		table.json('response');
		table.string('status');
		table.string('errno');
		table.timestamp('created_at').defaultTo(knex.fn.now())
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('integration_logs');
};
