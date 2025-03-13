let choice;
let a=+prompt("Nhập giá trị 1:");
let b=+prompt("Nhập giá trị 2:");
do{
    choice=+prompt(
        `               MENU
        1. Cộng hai số 
        2. Trừ hai số 
        3. Nhân hai số
        4. Chia hai số
        5. Thoát
        Lựa chọn của bạn là:
        `)
        switch(choice){
            case 1:
                // Cộng hai số
                let tatal=a+b;
                console.log("Kết quả phép cộng:",tatal);
                break;
            case 2:
                // Trừ hai số 
                let signal=a-b;
                console.log("Kết quả phép trừ:",signal);
                break;
            case 3:
                //Nhân hai số
                let accumulation=a*b;
                console.log("Kết quả phép nhân:",accumulation);
                break;
            case 4:
                //Chia hai số
                let divide=a/b;
                console.log("Kết quả phép chia:",divide);
                break;
        }
}while(choice!=5)