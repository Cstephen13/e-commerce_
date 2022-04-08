import {NextApiRequest} from "next";
import {ServerResponse} from "http";
import axios from "axios";
import enablePublicAccess from 'cors'

const categories = async (req: NextApiRequest, res: ServerResponse) => {
    await enablePublicAccess(req, res)
    const id = req.query.id;
    switch (req.method){
        case 'GET':
            try {
                const products = await axios.get(`http://localhost:8000/api/v1.0/categories/categories/${id}`);
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Methods', 'GET')
                res.end(JSON.stringify({ length:products.data.length, data: products.data }))
            } catch (e) {
                res.statusCode = 500
                res.end(
                    JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
                )
            }
            break;
        case 'PUT':
            try {
                const params = req.body;
                const products = await axios.put(`http://localhost:8000/api/v1.0/categories/categories/${id}`, params);
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Methods', 'GET')
                res.end(JSON.stringify({ length:1, data: products.data }))
            } catch (e) {
                res.statusCode = 500
                res.end(
                    JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
                )
            }
            break;
        case 'DELETE':
            try {
                const products = await axios.delete(`http://localhost:8000/api/v1.0/categories/categories/${id}`);
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Methods', 'GET')
                res.end(JSON.stringify({ length:1, data: products.data }))
            } catch (e) {
                res.statusCode = 500
                res.end(
                    JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
                )
            }
            break;
        default:
            res.statusCode = 405;
            res.end(
                JSON.stringify({ length: 0, data: [], error: 'Method ot allowed' })
            )
            break
    }
}
export default categories