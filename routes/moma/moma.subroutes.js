//artist routes
module.exports.findArtists = require('./artist/find.artists');
module.exports.findArtistById = require('./artist/find.artist.by.id');
module.exports.insertArtist = require('./artist/insert.artist');
module.exports.updateArtist = require('./artist/update.artist');
module.exports.deleteArtist = require('./artist/delete.artist');

//work routes
module.exports.findWorks = require('./work/find.works');
module.exports.findWorkById = require('./work/find.work.by.id');
module.exports.insertWork = require('./work/insert.work');
module.exports.updateWork = require('./work/update.work');
module.exports.deleteWork = require('./work/delete.work');
