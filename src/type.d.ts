type Model = {
  id: string | number;
  modelTypeName: string;
  title?: string;                       
  subtitle?: string;                 
  description?: string;
  imgUrl?: string;               
  ctaLabel?: string;               
}


type Workspace = {
    name: string
    avatarUrl?: string
    fallback: string
}


type Feature = {
  name: string
  details?: string
  link?: string
  isNew: boolean
  icon: React.ComponentType<{ className?: string }>
}