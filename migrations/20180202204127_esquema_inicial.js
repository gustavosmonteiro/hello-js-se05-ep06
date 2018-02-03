
exports.up = knex => knex.schema.createTable("contact", tb => {
    tb.increments("idcontact")
    tb.string("namecontact").notNullable()
    tb.timestamp("birthdatecontact").notNullable()
    tb.string("telephonecontact")
    tb.timestamp("dtcriationcontact").notNullable().defaultTo(knex.fn.now())
})

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("contact")
};
