import { Tag } from "./tag"

export class Artist {
    public id!: number
    public name!: string
    public picture!: string
    public price!: number
    public tags!: Tag[]
    public video!: string

    constructor () {

    }

}