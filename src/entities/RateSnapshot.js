const { EntitySchema } = require("typeorm");

const RateSnapshot = new EntitySchema({
  name: "RateSnapshot",
  tableName: "rate_snapshots",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    base: {
      type: "varchar",
    },
    target: {
      type: "varchar",
    },
    rate: {
      type: "float",
    },
    date: {
      type: "varchar",
    },
    createdAt: {
      name: "created_at",
      type: "datetime",
      createDate: true,
    },
  },
});

module.exports = { RateSnapshot };