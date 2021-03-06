/////////////////////////////////////////////////////////////////////////////
// ENUM - вспомогательная сущность, которая позволяет лучше структурировать ваш код, если присутсвуют однотипные элементы




/////////////////////////////////////////////////////////////////////////////
// Первый тип записи
/////////////////////////////////////////////////////////////////////////////
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
console.log(membership) // вернет индекс enum.Standard

const membershipReverse = Membership[2]
console.log(membershipReverse) // вернет строку 'Premium'
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
// Второй тип записи
/////////////////////////////////////////////////////////////////////////////
enum SocialMedia {
    VK = 'VK Name',
    FACEBOOK = 'FACEBOOK Name',
    INSTAGRAM = 'INSTAGRAM Name'
}

const social = SocialMedia.INSTAGRAM
console.log(social)
/////////////////////////////////////////////////////////////////////////////








