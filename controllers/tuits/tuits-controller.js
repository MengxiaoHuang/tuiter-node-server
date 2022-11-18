import posts from "./tuits.js";

let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuitsByID = (req, res) => {
    const tuitId = req.params.tid;
    const tuit = tuits
        .find(t => t._id === tuitId);
    res.json(tuit);
}

const findTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const tidUpdate = parseInt(tuitdIdToUpdate);
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id === tidUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const tidUpdate = parseInt(tuitdIdToDelete);
    //console.log(tuitdIdToDelete)
    tuits = tuits.filter((t) =>
        t._id !== tidUpdate);
    res.sendStatus(200);
}
export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
