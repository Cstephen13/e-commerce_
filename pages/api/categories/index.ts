import {IncomingMessage, ServerResponse} from "http";
import axios from "axios";
import enablePublicAccess from 'cors'
import {NextApiRequest} from "next";
import {URL_CATEGORIES} from "../../../utils/utils";

const categories = async (req: NextApiRequest, res: ServerResponse) => {
    await enablePublicAccess(req, res)
    switch (req.method){
        case 'GET':
            try {
                const products = await axios.get(URL_CATEGORIES);
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
        case 'POST':
            try {
                const params = req.body;
                const products = await axios.post(URL_CATEGORIES, params);
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