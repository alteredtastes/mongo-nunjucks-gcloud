//artist routes
module.exports.findArtists = require('./artist/find.artists');
module.exports.findArtistById = require('./artist/find.artist.by.id.js');
module.exports.insertArtist = require('./artist/insert.artist.js');
module.exports.updateArtist = require('./artist/update.artist.js');
module.exports.deleteArtist = require('./artist/delete.artist.js');

//work routes
module.exports.findWorks = require('./work/find.works');
module.exports.findWorkById = require('./work/find.work.by.id.js');
module.exports.insertWork = require('./work/insert.work.js');
module.exports.updateWork = require('./work/update.work.js');
module.exports.deleteWork = require('./work/delete.work.js');
