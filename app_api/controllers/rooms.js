const mongoose = require('mongoose');
const model = mongoose.model('rooms');

const roomsList = async(req, res) => {
    model
        .find({})
        .exec((err,rooms) => {
            if (!rooms){
                return res
                    .status(404)
                    .json({"message":"rooms not found"});
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            } else {
                return res  
                    .status(200)
                    .json(rooms);
            }
        });
};

const roomsFindCode = async(req, res) => {
    model
        .find({'code': req.params.roomCode })
        .exec((err,room) => {
            if (!room){
                return res
                    .status(404)
                    .json({"message":"room not found"});
            } else if (err){
                return res
                    .status(404)
                    .json(err);
            } else {
                return res  
                    .status(200)
                    .json(room);
            }
        });
};

module.exports = {
    roomsList,
    roomsFindCode
};