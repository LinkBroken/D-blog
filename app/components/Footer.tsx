import { faCaravan as icon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return (
        <>
        
        <div className="flex  flex-col gap-4 items-center relative mt-10 bottom-0 w-full">
        <FontAwesomeIcon className="w-44" icon={icon}/>

      <h2 className="text-2xl font-bold">D-Blog</h2>
      <p className="text-sm mt-2">Your daily dose of insightful articles and updates.</p>
        </div>
        </>
    )
}