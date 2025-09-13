import wan from "@/assets/images/wan-2.2.jpg"
import flux from "@/assets/images/flux-1.jpg"
import videoGen from "@/assets/images/video-gen.png"
import enhancer from "@/assets/images/enhacer.png"
import realtime from "@/assets/images/realtime.png"

export const slides: Model[] = [
  {
    id: 'wan-2-2',
    modelTypeName: 'NEW IMAGE MODEL',
    imgUrl: wan.src,
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    description:
      'Generate new and complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
    ctaLabel: 'Try WAN 2.2',
  },
  {
    id: 'flux-1',
    modelTypeName: 'OPEN SOURCE MODEL',
    imgUrl: flux.src,
    title: 'Open Sources',
    subtitle: 'FLUX.1 Krea',
    description:
      "We're making the weights of our FLUX 1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea image.",
    ctaLabel: 'Explore FLUX.1',
  },
  {
    id: 'video-gen',
    modelTypeName: 'VIDEO MODEL',
    imgUrl: videoGen.src,
    title: 'Video Generation',
    subtitle: 'AI-Powered Motion',
    description:
      'Create dynamic AI-powered videos with smooth motion and realistic detail. Generate trailers, animations, and more in minutes.',
    ctaLabel: 'Generate Video',
  },
  {
    id: 'enhancer',
    modelTypeName: 'IMAGE ENHANCER',
    imgUrl: enhancer.src,
    title: 'Super Resolution',
    subtitle: 'Enhance Images',
    description:
      'Boost image resolution up to 4x without losing detail. Perfect for prints, digital projects, and high-quality design workflows.',
    ctaLabel: 'Enhance Now',
  },
  {
    id: 'realtime',
    modelTypeName: 'REALTIME MODEL',
    imgUrl: realtime.src,
    title: 'Realtime Canvas',
    subtitle: 'Live Rendering',
    description:
      'Paint, edit, and animate directly on a realtime canvas. See your prompts evolve instantly with powerful AI rendering.',
    ctaLabel: 'Try Realtime',
  },
]

