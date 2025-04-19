class ObjectModel {
    constructor(id, name, description, value) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.value = value;
    }

    save() {
        // Logic to save the object to a database or in-memory storage
    }

    static findById(id) {
        // Logic to find an object by its ID
    }

    static update(id, updatedData) {
        // Logic to update an object by its ID
    }

    static delete(id) {
        // Logic to delete an object by its ID
    }
}

module.exports = ObjectModel;