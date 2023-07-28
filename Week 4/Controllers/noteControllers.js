const {v4} = require('uuid')
const mssql = require ('mssql');
const { sqlConfig } = require('../Config/config');

// Hold notes
const notes = [];

class Notes{
    constructor(id, title, content, timestamp){
        this.id = id,
        this.title = title,
        this.content = content,
        this.timestamp = timestamp
        
    }
}