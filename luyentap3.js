let choice;
do{
    choice=+prompt(
        `               MENU
        1. Tính diện tích hình tròn
        2. Tính chu vi hình tròn  
        3. Tính diện tích hình chữ nhật 
        4. Tính chu vi hình chữ nhật
        5. Thoát
        Lựa chọn của bạn là:
        `)
        switch(choice){
            case 1:
                // Tính diện tích hình tròn
                let R=+prompt("Nhập bán kính hình tròn:");
                let acreage=3.14*R*R;
                console.log("S hình tròn bằng:",acreage);
                break;
            case 2:
                let r=+prompt("Nhập bán kính hình tròn:");
                let acr=r*2*3.14;
                console.log("Chu vi hình tròn bằng:",acr);
            case 3:
                let dai=+prompt("Nhập chiều dài hcn:");
                let rong=+prompt("Nhập chiều rộng hcn:");
                let Shcn=dai*rong;
                console.log("S hình chữ nhật bằng:",Shcn);
                break;
            case 4:
                let Dai=+prompt("Nhập chiều dài hcn:");
                let Rong=+prompt("Nhập chiều rộng hcn:");
                let Chcn=(Dai+Rong)*2;
                console.log("Chu vi hình chữ nhật bằng:",Chcn);
                break;
        }
    }while(choice!=5);