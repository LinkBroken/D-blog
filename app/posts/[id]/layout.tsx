import primsa from "@/app/api/_base";
import PostData from "@/app/components/postData";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    cache: "force-cache",
  }).then((res) => res.json());
  return (
    <main className="flex items-center flex-col-reverse">
      <section>
        <PostData preview="shortcut" usersInfo={posts} />
      </section>
      {children}
    </main>
  );
};

export default layout;
