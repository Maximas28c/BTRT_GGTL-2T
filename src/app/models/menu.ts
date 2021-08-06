export class Menu {
    public name!: string
    public url?: string
    public menuItems!: MenuItem[]

    constructor() {
        
    }
}

export class MenuItem{
    public url!: string
    public name!: string

    constructor () {

    }

}
