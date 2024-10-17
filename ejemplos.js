// function cotilla() {
//     logInfo('Soy ejemplos.js')
// }
const cotilla = function () {
    logInfo('Soy ejemplos.js')
}
'use strict'
function ejemplos() { // para evitar variables globales
    /*
    logInfo('hola mundooooooo');
    logInfo('otra linea');
    */
    // num = 0
    // if (num) {
    //   logInfo(10 / num + 100)
    // } else {
    //   logInfo('Divide by 0')
    // }
    // logInfo(`El resultado de 100 / ${num} 
    // es ${100/num}`)
    // logInfo(`El resultado de 100 / ` + num + `es ${100/num}`)
    // var a = 2
    // var b = '2'
    // logInfo(a == b)
    // try {      
    //   logInfo(a === bb)
    // } catch (error) {
    //   logInfo(error.message)
    // }
    // logInfo(a + parseInt(b))
    // logInfo(+a + +b)
    // logInfo(a * b)
    // b = 2
    // logInfo(a + -b)
    // a = 1
    // logInfo(++a < 2)
    // logInfo(a)
    // a = 1
    // logInfo(a++ < 2)
    // logInfo(a)
    // logInfo(typeof (a))
    // a = '1'
    // logInfo(typeof (a))
    // logInfo(typeof (a) === 'string' ? 'Cadena' : typeof (a) === 'number' ? 'Numero' : 'Otra cosa')
    // logInfo((typeof (a) === 'string' ? 'Cadena' : 'Otra cosa') + ' el tipo')
    // if (typeof (a) === 'string') {
    //   logInfo('Cadena')
    //   if (a === '1')
    //     logInfo('es uno')
    // } else {
    //   logInfo('Otra cosa')
    // }
    // logInfo('algo mas')
    // logInfo(typeof (+a))

    let c = 'global'
    logInfo('---------')
    function kk() {
        let a = 1;
        let b = 1;
        if (true) {
            let b = 2;
            b = 7
        }
        let c = a + b;
        return c;
    }
    // logInfo(c)      
    var aqui = 'es global'
    const id = 333
    logInfo(kk())
    // if(kk() === c) {
    //   logInfo(`si es ${c}`)
    // } else {
    //   logInfo(`no es ${c}`)      
    // }
    // logInfo(aqui)
    // c = 'lo canbie'
    console.log(globalThis)
    let tab = [10, 20, 30]
    // let [x, y, z, w] = tab
    // logInfo(x)
    // logInfo(y)
    // logInfo(z)
    // logInfo(w)
    let obj = { x: 100, y: 200 }
    // var { x, y } = obj
    // x = obj.x
    // x = obj['x']
    // y = obj.y
    // logInfo(x)
    // logInfo(y)
    // c = '11'
    // switch (c) {
    //   case 1:
    //   case 3:
    //     logInfo('uno o tres')
    //     break
    //   case 2:
    //     logInfo('dos')
    //     break
    //   default:
    //     logInfo('otro')
    //     break
    //   case 5:
    //     logInfo('cinco')
    //     break
    //   case '11':
    //     logInfo('once')
    //     break
    // }

    // let a = 10
    // c = 22
    // switch (c) {
    //   default:
    //   case 3:
    //     a++
    //   case 2:
    //     a++
    //   case 1:
    //     a++
    // }
    // logInfo(a)
    let i = 0;
    // while(i < tab.length) {
    //   logInfo(tab[i])
    //   i++
    // }
    // tab[7]='70'
    // tab[7]=log
    // tab.push(80)
    // tab.splice(1, 1)
    // for (let i = 0; i < tab.length; i++) {
    //   logInfo(tab[i])
    // }
    // for (let i = 0, j = 1; i < tab.length;i+=2, ++j) {
    //   logInfo(tab[i])
    // }
    // for(let v in tab) {
    //   logInfo(`${v}: ${tab[v]}`)
    // }
    // for(let v of tab) {
    //   logInfo(v)
    // }
    // for(let v in obj) {
    //   logInfo(`${v}: ${obj[v]}`)
    // }
    // let otro = []
    // otro = [0,...tab,100]
    // for(let v in otro) {
    //   logInfo(`${v}: ${otro[v]}`)
    // }
    // tab.push(80)
    // tab[7] = log
    // while (i++ < tab.length) {
    //   if (!tab[i]) break
    //   if (tab[i] % 20 === 0) continue
    //   logInfo(tab[i])
    // }
    let cmp = 'x'
    //obj = null
    obj = { x: 100, y: 200 }
    with (obj) {
        logInfo(x)
        logInfo(y)
    }
    try {
        logInfo(obj.x)
        logInfo()
        logInfo('sin error')
    } catch (error) {
        logInfo(`${error.name}: ${error.message}`)
    } finally {
        logInfo('lo hago siempre')
    }
    logInfo('pero sigo')
}
logInfo('Cargo ejemplos.js')
// ejemplos()
