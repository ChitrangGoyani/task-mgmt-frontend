
/* 
1. Refactor the code to distribute it into components - Done
2. Change colors themes and styles
3. Convert to use shadcn cards and explore more shadcn components

*/
import { Board } from "@/components/Dashboard/Board";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Command,
    CommandInput
  } from "@/components/ui/command"

export const DashHome = () => {
    return(
        <div className="bg-white">
            <div className="flex my-2 gap-14 justify-around items-center">
                <div className="">
                    <h1 className="text-2xl font-bold tracking-tight lg:text-2xl text-violet-900">
                        Task.io
                    </h1>
                </div>
                <div className="w-1/3">
                    <Command className="rounded-lg border shadow-md">
                        <CommandInput className="text-center focus:!outline-none focus:ring-0 border-transparent focus:border-transparent " placeholder="Search" />
                    </Command>
                </div>
                <div className="">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="flex items-center justify-around">
                <div className="flex flex-col gap-2 rounded-md border px-2 border-black">
                    <div className="text-lg font-bold tracking-tight lg:text-2xl text-black-900">
                        Date
                    </div>
                    <div className="text-lg font-bold tracking-tight lg:text-2xl text-orange-500">
                        Weather
                    </div>
                </div>
                <div className="w-1/2 px-2 rounded-md border border-black">
                    <div className=" text-center text-2xl font-bold tracking-tight lg:text-3xl text-orange-500">
                            Analytics
                    </div>
                </div>
            </div>
            <div className="h-1/2 w-full text-black">
                <Board />
            </div>
        </div>
        
    );
}