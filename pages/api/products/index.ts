import { ServerResponse } from "http";
import enablePublicAccess from 'cors'
import axios from "axios";
import {NextApiRequest} from "next";
const products = async (req: NextApiRequest, res: ServerResponse) => {
    await enablePublicAccess(req, res)
    switch (req.method){
        case 'GET':
            try {
                const products = await axios.get('http://localhost:8000/api/v1.0/products/products/');
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Methods', 'GET')
                res.end(JSON.stringify({ length:products.data.length, data: products.data }))
            } catch (e) {
                console.log("errrossss", e);
                res.statusCode = 500
                res.end(
                    JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
                )
            }
            break;
        case 'POST':
            try {
                const params = req.body;
                try {
                    const products = await axios.post('http://localhost:8000/api/v1.0/products/products/', params, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                }catch (e){
                }

                res.statusCode = 200
                res.setHeader('Content-Type', 'Application/json')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Methods', 'GET')
                res.end(JSON.stringify({ length:1, data:[] }))
            } catch (e) {
                res.statusCode = 200
                res.end(
                    JSON.stringify({ length: 0, data: [], error: 'Something went wrong', exception:e})
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
export default products