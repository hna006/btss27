let choice;
let arr=[];
do{
    choice=+prompt(
        `              STUDENT MANAGEMENT 
        1. Nhập danh sách sinh viên
        2. Hiển thị danh sách sinh viên
        3. Tìm sinh viên theo tên
        4. Xóa sinh viên khỏi danh sách
        5. Thoát
        `)
        switch(choice){
            case 1:
                //Nhập danh sách sinh viên
                let lenght=+prompt("Nhập số lượng sinh viên:");
                for(let i=0; i<lenght;i++){
                    arr.push(+prompt("Nhập lần lượt đầy đủ từng sinh viên "+(i+1)+":"))
                }
                console.log(arr);
                break;
            case 2:
                //Hiển thị danh sách sinh viên
                console.log(arr);
                break;
            case 3:
                
                break;
            }
}while(choice!=5);