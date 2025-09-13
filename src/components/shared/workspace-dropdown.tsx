"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ChevronDown } from "lucide-react"

const workspaces: Workspace[] = [
    {
        name: "Poye Kitoye Workspace",
        avatarUrl: "https://github.com/shadcn.png",
        fallback: "PK",
    },
    {
        name: "Design Team Workspace",
        avatarUrl: "https://github.com/leerob.png",
        fallback: "DT",
    },
    {
        name: "Marketing Workspace",
        avatarUrl: "https://github.com/evilrabbit.png",
        fallback: "MW",
    },
]

export function WorkspaceDropdown() {
    const [selected, setSelected] = useState(workspaces[0])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    <Avatar>
                        <AvatarImage src={selected.avatarUrl} />
                        <AvatarFallback>{selected.fallback}</AvatarFallback>
                    </Avatar>
                    <span className="not-md:hidden" >
                        {selected.name}
                    </span>
                    <ChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>Switch Workspace</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {workspaces.map((ws) => (
                    <DropdownMenuItem
                        key={ws.name}
                        onSelect={() => setSelected(ws)}
                        className="flex items-center gap-2"
                    >
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={ws.avatarUrl} />
                            <AvatarFallback>{ws.fallback}</AvatarFallback>
                        </Avatar>
                        {ws.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
