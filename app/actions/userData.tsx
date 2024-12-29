"use server";

import prisma from "../api/_base";

export default async function userData(route: string) {
  const data = prisma.user.findMany({
    where: {
      id: parseInt(route),
    },
    include: {
      posts: true,
    },
  });
  return await data;
}


// export const createUser = (age:number, email:string, image:string, username:string )=> { return prisma.user.create({
//   data:{
//     age,
//     email,
//     image,
//     username,
//     posts:{
//       create:{
//         dateAdded: new Date().getHours().toString(),
//        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"+String(Math.random()),
//        header:"Lorem Ipsum",
//        image:  "https://marketing4ecommerce.net/wp-content/uploads/2023/04/webs-para-crear-un-blog-gratis.jpg"
//     }
//   }}})};

//     const name = ["john", "david", "doe", "manuel"];

//   for (let i = 0; i < name.length; i++) {
//     createUser(
//       23, 
//       `${name[i]}@gmail.com`, 
//       "https://i.dailymail.co.uk/1s/2019/09/24/14/18870210-0-image-a-25_1569331604556.jpg", 
//       `${name[i]} Writer`,
      
//     );
//   }

