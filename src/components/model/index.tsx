import { Button } from "../ui/button"
interface Props {
    model: Model
}

export const ModelCard = ({model}:Props)=>{
    return(
        <div 
            style={{backgroundImage: `url(${model.imgUrl})`}}
            className="w-[90vw] md:w-[70vw] lg:w-[55dvw] flex-shrink-0 inline-block bg-no-repeat bg-cover aspect-[9/7] md:aspect-[9/6] lg:aspect-[9/5] selection:bg-transparent bg-zinc-200 dark:bg-zinc-800 rounded-3xl border overflow-hidden transition-all" >
                <div className="w-full h-full grid grid-rows-3 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 sm:p-6 text-white" >
                    <div>
                        <span className="text-xs sm:text-sm font-light drop-shadow-xl drop-shadow-black" >
                            {model.modelTypeName}
                        </span>
                    </div>
                    <div className="flex items-center justify-center" >
                        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold drop-shadow-xl drop-shadow-black/50" >
                            {model.title}
                        </h3>
                    </div>
                    <div className="flex  justify-between items-end gap-4" >
                        <div>
                            <span className="sm:text-lg md:text-2xl lg:text-3xl font-medium" >
                                {model.subtitle}
                            </span>
                            <p className="max-w-xs sm:max-w-md md:max-w-lg md:mt-1.5 leading-tight font-light pr-0 sm:pr-10 md:pr-20 text-xs lg:text-sm" >
                                {model.description}  
                            </p>
                        </div>
                        <div>
                            <Button variant={'secondary'} 
                                className="rounded-full bg-white dark:bg-black text-xs sm:text-base not-md:scale-80 py-2" >
                                {model.ctaLabel}
                            </Button>
                        </div>
                    </div>
                </div>
        </div>
    )
}