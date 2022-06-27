export interface IReports {
  id: number
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
}

export interface IArticle {
  id: number
  featured?: boolean
  title: string
  url?: string
  imageUrl: string
  newsSite?: string
  summary?: string
  publishedAt?: string
  launches?: ILaunch[]
  events?: IEvent[]
}

export interface ILaunch {
  id: string
  provider: string
}

export interface IEvent {
  id: string
  provider: string
}