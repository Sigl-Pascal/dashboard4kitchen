import dbConnect from '../../../config/db'
import Recipe from '../../../models/Recipe'

const handler = async (req, res) => {
    const { query: { id }, method } = req

    await dbConnect()

    switch(method){
        case'GET':
            try {
                const recipe = await Recipe.findById(id)
                res.status(200).json({success: true, data: recipe})
            } catch (err) {
                res.status(400).json({success: false})
            }
        break
        case'PUT':
            try {
                const recipe = await Recipe.findByIdAndUpdate(id, req.body)
                res.status(200).json({success: true, data: recipe})
            } catch (err) {
                res.status(400).json({success: false})
            }
        break
        case'DELETE':
        try {
            const recipe = await Recipe.findByIdAndDelete(id)
            res.status(200).json({success: true, data: recipe})
        } catch (err) {
            res.status(400).json({success: false})            
        }
        break
        default:
            res.status(400).json({success: false})
        break
    }
}

export default handler
