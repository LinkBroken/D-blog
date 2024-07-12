import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

type ResponseData = {
  message: string;
};

// export function getHandler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   // if (req.method === "GET") {
//   //   // Handle GET request
//   //   return res.status(200).json({ message: 'Hello from GET handler' });
//   // } else {
//   //   // Handle other methods (e.g., POST, PUT, DELETE)
//   //   return res.status(405).json({ message: 'Method Not Allowed' });
//   // }
// }
const prisma = new PrismaClient()
export function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const username = req.body.username;
    const password = req.body.password;
  if (req.method === "POST") {
    
      console.log(username)
      // return res.status(400).json({ message: 'User already exists' });
    


  } else {
    // Handle other methods (e.g., GET, PUT, DELETE)
  }
}
