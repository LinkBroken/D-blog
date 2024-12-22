import { Button } from "@/components/ui/button";
import navigate from "../actions/navigate";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type Prop = {
  usersInfo: {
    id: number | string;
    header?: string;
    content?: string;
    userId?: number;
  }[];
};

function PostData({ usersInfo }: Prop) {
  return (
    <section className="grid place-items-center place-content-center  text-wrap gap-x-7 gap-y-40 mb-10   pt-8 mt-8 w-10/12 text-slate-800 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {usersInfo.map((post, index) =>
        post.id ? (
          <Card
            className="flex border border-solid flex-col gap-4 items-center p-3 lg:p-7 hover:-rotate-1  rounded-2xl bg-white shadow-lg shadow-black hover:border-green-400 w-4/5"
            key={index}
          >
            <CardTitle className=" text-center">{post.header}</CardTitle>
            <CardContent className="p-2">
              {post.content?.substring(0, 200)} .....
            </CardContent>

            <form
              action={async () => {
                "use server";
                await navigate({ route: "posts", id: String(post.id) });
              }}
            >
              <Button
                variant="link"
                className=" self-end p-2 rounded-xl border border-black"
              >
                Read More
              </Button>
            </form>
          </Card>
        ) : (
          <span key={index}>No data available</span>
        )
      )}
    </section>
  );
}

export default PostData;
