const ObjectId = require('mongodb').ObjectId;

function put(request, response) {
    const db = request.mongoClient.db();
    const UserCollection = db.collection('notepad');
    UserCollection.findOneAndUpdate({
        _id: ObjectId(request.params.userId)
    }, {
        $set: request.body,
    });
    response.send({ success: true });
}

module.exports = put;
