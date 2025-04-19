const ObjectModel = require('../models/objectModel');

let objects = []; // In-memory storage for objects

const createObject = (req, res) => {
    const { id, name, description, status } = req.body;
    const newObject = new ObjectModel(id, name, description, status);
    objects.push(newObject);
    res.status(201).json(newObject);
};
const getAllObjects = (req, res) => {
    res.status(200).json(objects);
};
const getObject = (req, res) => {
    const { id } = req.params;
    const object = objects.find(obj => obj.id === id);
    if (object) {
        res.status(200).json(object);
    } else {
        res.status(404).json({ message: 'Object not found' });
    }
};

const updateObject = (req, res) => {
    const { id } = req.params;
    const { name, description, status } = req.body;
    const objectIndex = objects.findIndex(obj => obj.id === id);
    if (objectIndex !== -1) {
        objects[objectIndex] = { id, name, description, status };
        res.status(200).json(objects[objectIndex]);
    } else {
        res.status(404).json({ message: 'Object not found' });
    }
};

const deleteObject = (req, res) => {
    const { id } = req.params;
    const objectIndex = objects.findIndex(obj => obj.id === id);
    if (objectIndex !== -1) {
        objects.splice(objectIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Object not found' });
    }
};

module.exports = {
    createObject,
    getAllObjects,
    getObject,
    updateObject,
    deleteObject
};