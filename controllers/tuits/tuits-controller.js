import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

const findTuitsByID = (req, res) => {
    const tuitId = req.params.tid;
    const tuit = tuits
        .find(t => t._id === tuitId);
    res.json(tuit);
}

const findTuits = async(req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const updateTuit = async(req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const tidUpdate = parseInt(tuitdIdToUpdate);
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tidUpdate,
            updates);
    res.json(status);
}

const deleteTuit = async(req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const tidUpdate = parseInt(tuitdIdToDelete);
    const status = await tuitsDao
        .deleteTuit(tidUpdate);
    //console.log(tuitdIdToDelete)

    res.json(status);
}
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
