/////////////////////////////////////////////////////////////////////////////
// ENUM - вспомогательная сущность, которая позволяет лучше структурировать ваш код, если присутсвуют однотипные элементы
/////////////////////////////////////////////////////////////////////////////
// Первый тип записи
/////////////////////////////////////////////////////////////////////////////
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
console.log(membership); // вернет индекс enum.Standard
var membershipReverse = Membership[2];
console.log(membershipReverse); // вернет строку 'Premium'
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK Name";
    SocialMedia["FACEBOOK"] = "FACEBOOK Name";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM Name";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// Второй тип записи
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
