async function getAll(request, response) {
    const db = request.mongoClient.db();
    const UserCollection = db.collection('notepad');
    const allData = await UserCollection.find({}).project({ password: false }).toArray();
    
    response.send(allData);
}

module.exports = getAll;
