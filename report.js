const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/30950277-0d75c2c5-6925-491d-8589-73935dfdff05?access_key=${process.env.pmatKey}`,
    //collection:require('./collection/dmoney-user-api-collection.json'), // statically collection ta genetate korar jonno (static : generate collection by "Export")
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});