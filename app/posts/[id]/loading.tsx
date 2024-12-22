import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <>
      <Skeleton className="rounded-full w-80 h-80"></Skeleton>

      <Skeleton className="text-xl self-center p-1 mt-4 text-center"></Skeleton>

      <Skeleton className="flex w-screen mt-4  gap-8 flex-col items-center rounded-2xl">
        <Skeleton className="text-2xl p-4 border border-black shadow-lg shadow-black"></Skeleton>
      </Skeleton>

      <Skeleton className="flex flex-col rounded-2xl mt-10 p-4 gap-4 items-center mb-6">
        <Skeleton className="text-xl w-2/3 tracking-widest break-words "></Skeleton>
      </Skeleton>
    </>
  );
}
