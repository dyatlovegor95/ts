/////////////////////////////////////////////////////////////////////////////
// ИНТЕРФЕЙС - тип, который служит для объектов или классов, где мы указываем какие поля, какие функции нужны для объекта.
// Не компилируется, нужны только на этапе разработки
var rect1 = {
    id: '1234',
    size: {
        width: 50,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '1235',
    size: {
        width: 20,
        height: 10
    }
};
rect2.color = 'black';
//rect2.id = '0000' // ошибка readonly
// Можно указывать к какиу типу будет относиться объект
var rect3 = {}; // приведение типа новый способ
var rect4 = {}; // приведение типа старый способ
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 70
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    Clock.prototype.getTime = function () {
        return this.time;
    };
    return Clock;
}());
var css = {
    border: '1px',
    padding: '2px',
    width: '100px'
};
/////////////////////////////////////////////////////////////////////////////
