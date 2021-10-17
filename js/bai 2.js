/* 2. Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function alternatingSums(a) {
    
}

 */

let arr2=[60,40,55,75,64]

const alternatingSums=(array) =>{
    var Int = array.reduce(function(a, value,thisIndex) {
        if(thisIndex%2==0)
            a[0] += value;
        else
            a[1] += value;
        return a;
    }, [0,0]);
    return Int;
}

document.write(alternatingSums(arr2))