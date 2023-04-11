
var one = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
var ten = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]

function numberToWords(n, s) {
    var str = ""
    if (n > 19)
        str += ten[parseInt(n / 10)] + " " + one[n % 10]
    else
        str += one[n]
    if (n != 0)
        str += s
    return str
}
function getWord(n) {
    var word = ""
    //lakh's place
    word += numberToWords(parseInt((n / 100000) % 100), " lakh ")
    //thousand's and ten thousand's place
    word += numberToWords(parseInt((n / 1000) % 100), " thousand ")
    //hundread's place
    word += numberToWords(parseInt((n / 100) % 10), " hundred ")
    if (n > 100 && n % 100 > 0) {
        word += "and "
    }
    //ones and tens place
    word += numberToWords(n % 100, "")

    document.write(word)
}

enterBtn.addEventListener("click", () => {
    let h = document.querySelector('input').value
    getWord(h)
})