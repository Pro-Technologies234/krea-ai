import { features } from "@/lib/features"
import { FeatureLink } from "../shared/feature-link"

export const Features = ()=>{
    return(
        <div className="max-w-7xl m-auto px-4" >
            <h2 className="text-2xl font-medium" >
                Generate
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 " >
                {
                    features.map((f,i)=>(
                        <FeatureLink key={i} feature={f} />
                    ))
                }
            </div>
        </div>
    )
}