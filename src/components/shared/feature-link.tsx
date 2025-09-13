import Link from "next/link"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

interface Props {
    feature: Feature
}


export const FeatureLink = ({feature}:Props)=> {
    return(
        <Link href={feature.link ?? '/'} >
            <div className="p-4 rounded-2xl hover:bg-zinc-50 items-center grid grid-cols-8 gap-2">
                <div className="w-15 h-15 flex justify-center items-center text-white col-span-2 bg-gradient-to-tr from-zinc-950 to-zinc-600 rounded-2xl" >
                    <feature.icon/>
                </div>
                <div className="col-span-5" >
                    <div className="flex gap-2 items-center" >
                        <span className="text-sm" >
                            {feature.name} 
                        </span>
                        { feature.isNew && <Badge  className="bg-blue-700 rounded-full text-white">New</Badge>}
                    </div>
                    <p className="text-xs leading-tight" >
                        {feature.details}
                    </p>
                </div>
                <div className="col-span-1" >
                    <Button className="rounded-full text-xs h-6 w-10" size={'sm'} variant={'secondary'} >
                        Open
                    </Button>
                </div>
            </div>
        </Link>
    )
}