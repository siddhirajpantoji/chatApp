function sendResponse(err, data, req, res) {
    if (err) {
        res.status(err.status).json(err);
    }
    else {
        res.status(200).json(data);
    }
}
module.exports = {
    send:sendResponse
};