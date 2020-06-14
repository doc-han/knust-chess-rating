class dbFunctions {
    constructor(model) {
        this.model = model;
    }

    getStoredData(){
        return new Promise((resolve, reject) => {
            this.model.findOne({ new: true }).then(data => { resolve(JSON.parse(data.data)) }).catch(err => reject(err));
        })
    }
    
    static init = _model => new this(_model);
    
}

module.exports = dbFunctions;

