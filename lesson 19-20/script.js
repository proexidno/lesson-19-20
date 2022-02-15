// let arr = ["a", "b", "c"]
// alert(arr)
// console.log(arr[0], arr[1], arr[2])
// let arr1 = ["a", "b", "c", "d"]
// console.log(arr1[0] + "+" + arr1[1] + ", " + arr1[2] + "+" + arr1[3])
// arr2 = [2, 5, 3, 9]
// result = arr2[0] * arr2[1] + arr2[2] * arr2[3]
// console.log(result)

// let divs = $("div")
// divs.text("test")

// divs[0].innerText = "test"

// divs.eq(1).text("aha")

// a.forEach((value, index) => {
//     console.log(value, index)
// });

// divs.each((index) => {
//     console.log(index, this.text());
// });

// $("button").click(function () {
//     alert($(this).text()) только с func
// })

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let A = ["Monday", "Tuesday", "Wednesday", "Thursady", "Friday", "Sturday", "Sunday"];
A.forEach((value, index) => {
    console.log(index + 1 + " - " + value);
});

let B = [92, 63, 10, 76, 55, 21, 60, 87, 6, 51], C = $("li"), s = 0;
B.forEach((value, index) => {
    B[index] = value ** 2 + (10 * ((-1) ** (1 + ((value ** 2) % 2))))
    s += B[index]
    C.eq(index).text(B[index])
});
B[10] = s
C.eq(10).text(B[10])

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let sum = 0;
$("#T3W1").click( function () {
    $(".color > div").each(function (index) {
        let A1 = $(this).text()
        console.log(A1)
        if (A1 % 2){
            $(this).css("background-color", "turquoise");
        }else{
            $(this).css("background-color", "orange");
        };
        sum += Number(A1);
    });
    alert(sum);
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(".test > input").click( function () {
    $("body").css("color", $(this).attr("class"));
    $("body").css("background-color", $(this).attr("extra"));
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(".WorkingSpace1 > input").click( function () {
    let A = $(this).attr("id")
    $(".WorkingSpace1 > label").each( function () {
        if ($(this).attr("for") == A){
            if (document.getElementById(A).checked) {
                $(this).css("text-decoration", "line-through")
            }else{
                $(this).css("text-decoration", "none")
            }
        };
    })
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function PicSizeW() {
    $(".colorBox").css("width", document.getElementById("wSize").value);
};
function PicSizeH() {
    $(".colorBox").css("height", document.getElementById("hSize").value);
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$("#buttonWS3").click( () => {
    $("#box").append($("<li>").text($("#inputer").val()).append($("<button>").text("X").attr("class", "buttonDel")));
    $("#inputer").val("");
    $(".buttonDel").click( function () {
        $(this).parent().detach();
    });
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let c = Number(prompt("Введите число")), i = 0;
while (i <= c){
    console.log(i);
    i += 1;
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

i = 0
while (i < c){
    console.log(i * i);
    i += 1;
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let K = []

while (true) {
    K.push(Number(prompt("Введите число")));
    if (!(K[K.length - 1])){
        K.pop()
        break
    }
};

let Min, Max = 0, Sum = 0, evenC = 0, negativeC = 0;
i = 0

while (i < K.length){
    if (K[i] > Max){
        Max = K[i]
    }
    if (K[i] < Min || !(i)) {
        Min = K[i]
    }
    if (!(K[i] % 2)){
        evenC += 1
    }
    if (K[i] < 0){
        negativeC += 1
    }
    Sum += K[i]
    i += 1
};
console.log(K.length, Sum, Math.round(Sum/K.length, 2), evenC, negativeC, Min, Max)
