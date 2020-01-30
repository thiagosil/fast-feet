module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'thunder',
  password: 'thundercats!23',
  database: 'fastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  'migrations-path': './database/migrations',
};
