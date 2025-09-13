'use client'
import { Bell, Folder, GalleryHorizontalEnd, Home, ImageIcon, ImagesIcon, MessageCircleQuestionIcon, Paintbrush, Video, WandSparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { usePathname } from "next/navigation"
import { WorkspaceDropdown } from "./workspace-dropdown"
import { ModeToggle } from "./mode-toggle"

export const Navbar = ()=> {
    const currentPath = usePathname()
    const navigation = [
        { name:'Home', link:'/',icon: Home },
        { name:'Generate image', link:'/image',icon: ImageIcon },
        { name:'Generate Video', link:'/video',icon: Video },
        { name:'Retouch Image', link:'/retouch-image',icon: WandSparkles },
        { name:'Retouch Video', link:'/retouch-video',icon: Paintbrush },
        { name:'Retouch Video', link:'/projects',icon: Folder },
    ]
    return(
        <header className="w-full px-6 py-4 flex items-center justify-between" >
            <div className="flex items-center gap-2" >
                <WorkspaceDropdown/>
            </div>
            <div>
                <div className="bg-zinc-100 dark:bg-zinc-900 flex rounded-2xl not-md:hidden p-1.5 gap-2" >
                    {
                        navigation.map((n,i)=>(
                            <Button
                                key={i} 
                                className={`text-black dark:text-white w-12 rounded-xl cursor-pointer 
                                    ${ currentPath === n.link 
                                    ? 'bg-white hover:bg-zinc-100  dark:bg-black dark:hover:bg-zinc-900 ' 
                                    : 'bg-transparent hover:bg-white shadow-none dark:bg-transparent dark:hover:bg-black'}`}
                                 >
                                <n.icon  />
                            </Button>
                        ))
                    }
                </div>
            </div>
            <div className="space-x-2 flex items-center" >
                <Button variant={'secondary'} className="not-md:hidden" >
                    <ImagesIcon/>
                    Gallery
                </Button>
                <Button variant={'secondary'} className="not-md:hidden" >
                    <MessageCircleQuestionIcon/>
                    Support
                </Button>
                <Button size={'icon'} variant={'secondary'} >
                    <Bell/>
                </Button>
                <ModeToggle/>
                <Avatar>
                    <AvatarImage src={"https://github.com/evilrabbit.png"} />
                    <AvatarFallback>PK</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}