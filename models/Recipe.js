import mongoose from "mongoose"

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unitOfMessure: {
        type: String,
        required: true
    }
})

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients:{
        type: [IngredientSchema],
        required: true
    },
    rating: {
        type: Number,
        required: false,
        min: 1,
        max: 5
    }
})

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema)
