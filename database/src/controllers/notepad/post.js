async function post(request, response) {
    const db = request.mongoClient.db();
    const UserCollection = db.collection('notepad');
    const insert = await UserCollection.insertOne({
        notepadId:  request .body.notepadId,
        note:   request.body.note,
        title:request.body.title
    });
    response.send({ success: true, id: insert.insertedId });
}

module.exports = post;
