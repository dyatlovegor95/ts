/////////////////////////////////////////////////////////////////////////////
// CLASS

class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}


/* class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel // можно перезаписывать поля readonly, но только внутри конструктора
    }
} */

// лаконично
class Car {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {}
}
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
// Модификатор: protected, private, public
// protected - свойства достпуны в классе и в дочерних классах, но не у их экземляров 
// private - свойства доступны только в собственном классе
// public - свойства доступны во всех случаях
/////////////////////////////////////////////////////////////////////////////
class Animal {
    protected voice: string = '123' 
    public color: string = 'black'

    private go() {
        console.log('GO')
    }
}


class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
// Абстрактные классы и методы, они нужны на этапе разработки, для того чтобы от них наследоваться
/////////////////////////////////////////////////////////////////////////////
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('RENDER')
    }

    info(): string {
        return 'INFO'
    }
}
/////////////////////////////////////////////////////////////////////////////

