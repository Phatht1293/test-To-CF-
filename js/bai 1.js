
/*1. Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)
[JavaScript] Syntax Tips
// Prints help message to the console
// Returns a string
function adjacentElementsProduct(array) {
    
}
*/


let arr = [2, 3, -5, -2, 4]

const adj_E_Product= (array) => {
    let lst_int = array[0] * array[1];
    for(let i = 0; i < array.length - 1; i++) {
        let tmpNo = array[i]*array[i + 1];
        if(tmpNo > lst_int){
            lst_int = tmpNo;
        }
    }
    return lst_int;
}

document.write(adj_E_Product(arr))