const mongoose= require("mongoose");

const useSchema= new mongoose.Schema({


    name: {

        type: String
    },

    age: {

        type: Number
    },

    isValid: {

        type: Boolean
    }
})

module.exports= mongoose.model("user",useSchema);