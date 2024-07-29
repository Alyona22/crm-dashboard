export interface UserTypes {
  name: string
  photo: PhotoTypes
  position: string
}

export interface PhotoTypes {
  src: string
  alt: string
  width: number
  height: number
}
