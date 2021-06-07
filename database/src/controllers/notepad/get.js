const ObjectId = require('mongodb').ObjectId;

async function get(request, response) {
    const db = request.mongoClient.db();
    const UserCollection = db.collection('notepad');
    const requireData = await UserCollection.findOne({ _id: ObjectId(request.params.userId) });
    response.send({ success: true, data: requireData });
}

module.exports = get;
