function hexToRgb(hex) {
    if(hex.charAt(0) !== 'r') {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
            'rgb(' + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ')'
            : null;
        }
    return hex;
}
 
function lightenDarkenColor(color, amt) {
    var code = hexToRgb(color).slice(4, -1);
    var numbers = code.split(',');
    var r = (parseInt(numbers[0]) + parseInt(amt) > 255) ? 255 : parseInt(numbers[0]) + parseInt(amt);
    r = (parseInt(numbers[0]) + parseInt(amt) < 0) ? 0 : parseInt(numbers[0]) + parseInt(amt);
    var g = (parseInt(numbers[1]) + parseInt(amt) > 255) ? 255 : parseInt(numbers[1]) + parseInt(amt);
    g = (parseInt(numbers[1]) + parseInt(amt) < 0) ? 0 : parseInt(numbers[1]) + parseInt(amt);
    var b = (parseInt(numbers[2]) + parseInt(amt) > 255) ? 255 : parseInt(numbers[2]) + parseInt(amt);
    b = (parseInt(numbers[2]) + parseInt(amt) < 0) ? 0 : parseInt(numbers[2]) + parseInt(amt);
 
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}