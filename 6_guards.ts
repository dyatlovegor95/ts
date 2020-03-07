/////////////////////////////////////////////////////////////////////////////
// GUARDS - вспомогательные конструкции, которые позволяют работать с типами


function strip(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    return x.trim
}
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////
// Принадлежность к классу
/////////////////////////////////////////////////////////////////////////////
class MyResponse {
    header = 'header'
    result = 'result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

// Есть функция которая обрабатывает и запрос и ошибку
function hadle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    }
    return {
        info: res.header + res.message
    }
}

// Есть специальный тип AlertType

type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType) {

}

setAlertType('success')
setAlertType('warning')
setAlertType('danger')

/////////////////////////////////////////////////////////////////////////////

