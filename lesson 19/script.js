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

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
    alert(sum)
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(".test > input").click( function () {
    $("body").css("color", $(this).attr("class"))
    $("body").css("background-color", $(this).attr("extra"))
});