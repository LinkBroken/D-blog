


import { PrismaClient } from "@prisma/client";
import Userdata from "../components/Userdata";

export default async function Posts() {
  // const [add,setAdd] = useState(false); wanted to show the add the post part conditionally but no
  const prisma = new PrismaClient()
  const usersInfo = await prisma.post.findMany()
  
 
  return(
    <div className="flex flex-col w-screen items-center">
    <Userdata usersInfo={usersInfo}>
      
    </Userdata>
    </div>
    
  );
}
