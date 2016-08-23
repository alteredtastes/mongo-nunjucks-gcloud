module.exports.artist = {
  findAll: require('./artist/find.all'),
  findOneById: require('./artist/find.one.by.id'),
  insertOne: require('./artist/insert.one'),
  updateOne: require('./artist/update.one'),
  deleteOne: require('./artist/delete.one')
}

module.exports.work = {
  findAll: require('./work/find.all'),
  findOneById: require('./work/find.one.by.id'),
  insertOne: require('./work/insert.one'),
  updateOne: require('./work/update.one'),
  deleteOne: require('./work/delete.one')
}
