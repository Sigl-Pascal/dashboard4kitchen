import dbConnect from "../../../config/db"
import Recipe from "../../../models/Recipe"

const handler = async (req, res) => {
    const { method } = req
    await dbConnect()

    switch(method){
        case"GET":
            try {
                const recipes = await Recipe.find({})
                res.status(200).json({success: true, data:recipes})
            } catch (err) {
                res.status(400).json({success: false})
            }
        break
        case"POST":
            try {
                const recipe = await Recipe.create(req.body)
                res.status(200).json({success: true, data: recipe})
            } catch (err) {
                res.status(400).json({success: false})
            }
        break
        default:
            res.status(400).json({ success: false })
        break
    }
}

export default handler
