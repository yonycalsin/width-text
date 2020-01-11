/**
 * @param {string} text 
 * @param {string} font 
 */
const WidthText: any = (text: string, font?: string) => {
    // re-use canvas object for better performance
    var canvas: HTMLCanvasElement = WidthText.canvas || (WidthText.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = WidthText;
    }
    exports.WidthText = WidthText;
}