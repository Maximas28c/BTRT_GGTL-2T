import {Tag} from "./tag";

export class Card {
  type!:string
  imgUrl?: string
  videoUrl?: string
  text?: string
  tags!: Tag[]
  price?: number
  name!: string
  id!: number
}
