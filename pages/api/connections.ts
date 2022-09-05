import { NextApiRequest, NextApiResponse } from "next";

import { getConnectionProfiles, getFeaturedUsers } from "../../lib/services/ConnectionsService";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    
    if(req.method === "GET"){

        let result;

        if('featured' in req.query) {
            result = await getFeaturedUsers(3);
        }
        else{
            result= await getConnectionProfiles();
        }

        return res.status(200).json(result)
    }
    
    return res.status(405).json({status: "Invalid Request"});
}