let variable1 = 10, variable2 = "Hello", variable3 = true;
console.log(variable1, variable2, variable3)


// 5 legal variable names

// var _abd
// var $def
// var fed
// var car2
// var psi!

// 5 illegal variable names

// var !sun
// var 3num
// var @wed
// var *day
// var |try


var heading = '<h1>' + 'Rules for naming JS variables' + '</h1>'
document.write(heading)


var az = "letters(A-Z) and (a-z)"
var nums = " Numbers(0-9)"
var _ = " Underscore sign(_)"
var $ = "Dollar sign($)"

document.write("Variable names can only contain " + az + ', ' + nums + "," + _ + ' and ' + $ + '.' + '<br/>')

var dollar = 'Dollar sign($)'
var underScore = ' Underscore sign(_)'
var abcd = 'letters(A-Z) and (a-z)'

document.write('Variables must begin with a ' + dollar + ', ' + underScore + ' or ' + abcd + '.' + '<br/>')

document.write(' Variable names are case ' + 'sensitive.' + '<br/>')

document.write(' Variable names should not be JS reserved keywords.' + '<br/>')