import { NextApiRequest, NextApiResponse } from "next";

import { getConnectionProfiles, getFeaturedUsers } from "../../lib/services/ConnectionsService";
import logger from "../../lib/util/logger";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    
    const child = logger.child({
        auth0_Issuer: process.env.AUTH0_BASE_URL,
        referer: req.headers.referer,
        method: req.method    
    })

    child.info("Connection Route")
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