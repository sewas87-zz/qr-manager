const db = require('_helpers/db');
const Scan = db.Scan;

module.exports = {
    scan,
};

async function scan(scanParam) {
    const scan = new Scan(scanParam);

    // save user
    await scan.save();
}

