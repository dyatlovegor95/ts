/////////////////////////////////////////////////////////////////////////////
// Вспомогательный операторы для работы с типами

interface IPerson {
    name: string
    age: number
}

type PersonKeys = keyof IPerson  // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'


/////////////////////////////////////////////////////////////////////////////
// Мы хотим воспользоваться типом User, но при этом создать свой тип и чтобы он не включал в себя поля _id, createdAt

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// 1 способ
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'

// 2 способ
type UserKeyNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta1 = 'name'
//u1 = '_id' // ошибка