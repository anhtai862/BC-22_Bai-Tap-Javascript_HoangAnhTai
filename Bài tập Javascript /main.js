/**
 * Bài Tập 1:
 * Đầu Vào:
 * - tienLuongNgay
 * - songaylam
 * Xử lý : 
 * - tienLuongNgay * songaylam
 * Đầu ra : Hiển Thị Thông Báo
 */



document.getElementById("btnTinh").onclick = function(){
    var songaydilam = document.getElementById("songaylam").value;
    tienLuongNgay = 100000;
    var tongTienLuong = songaydilam * tienLuongNgay;
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var ketqua = "Tổng Tiền Lương Là :" + currentFormat.format(tongTienLuong)+ "VNĐ";
    
    document.getElementById("footerTienLuong").innerHTML = ketqua;

} ;

/**
 * Bài Tập 2 :
 * Đầu Vào :
 * - Gía trị 5 số thực
 * - number1
 * - number2
 * - number3
 * - number4
 * - number5

 * Xử lý 
 * - ( number1 + number2 + number3 + number4 + number5 ) / 5
 * Đầu ra : Hiển Thị Thông Báo
 * 
 */

document.getElementById("btnTong").onclick = function(){
    var number1 = document.getElementById("sothu1").value * 1;
    var number2 = document.getElementById("sothu2").value * 1;
    var number3 = document.getElementById("sothu3").value * 1;
    var number4 = document.getElementById("sothu4").value * 1;
    var number5 = document.getElementById("sothu5").value * 1;
    
    var tong = number1 + number2 + number3 + number4 + number5;
    var trungBinh = tong / 5;
    var ketqua = "Trung Bình Tổng 5 Số :" + trungBinh ;
document.getElementById("btnTrungBinh").innerHTML = ketqua ;

    



    
};



/**
 * Bài Tập 3:
 * 
 * Đầu Vào :
 * giatri1do
 * soDolaCanDoi
 * XỬ lý : soDolaCanDoi * giatri1do
 * Đầu ra : Hiển Thị Thông Báo
 * 
 */




document.getElementById("btnNutDoi").onclick = function() {
    var soDolaCanDoi = document.getElementById("txtDolaCanDoi").value;
    giatri1do = 23500;
    var quydoitien = giatri1do * soDolaCanDoi ;
    var currentFormat = new Intl.NumberFormat('vn-VN');
    var ketQua = "Số Tiền Quy Đổi : " + currentFormat.format(quydoitien) + " " + "VNĐ";
document.getElementById("btnDoiTien").innerHTML = ketQua ;
};




/**
 * Bài Tập 4
 * 
 * Đầu Vào :
 * - chieuDai
 * - chieuRong
 * XỬ lý :
 * chuVi = (chieuDai + chieuRong) * 2 ;
 * dienTich = chieuDai * chieuRong;
 * Đầu ra : Hiển Thị Thông Báo
 * 
 */ 

document.getElementById("btnNutBam").onclick = function (){
 var chieuDai = document.getElementById("txtchieudai").value * 1;
 var chieuRong = document.getElementById("txtchieurong").value * 1;
 var chuVi = (chieuDai + chieuRong) * 2 ;
 var dienTich = chieuDai * chieuRong ;
 
 var ketQuaChuVi = " Chu Vi Hình Chữ Nhật :" + chuVi + " " + "Cm";
 var ketQuaDienTich = " Diện Tích Hình Chữ Nhật :" + dienTich + " " + "Cm";

document.getElementById("btnbaocao").innerHTML = ketQuaChuVi + "<br/>" + ketQuaDienTich ;


};



/**
 * Bài Tập 5:
 * 
 * Đầu Vào :
 * - so2KySo
 * XỬ Lý :
 * - tách số hàng đơn vị : n%10
 * - tách số hàng chục : Math.floor(n%100/10)
 * - đơn vị + hàng chục => tổng 2 ký số ?
 * Đầu ra : Hiển Thị Thông Báo
 * 
 * 
 */


document.getElementById("btnNutTinh").onclick = function() {
    var so2KySo = document.getElementById("txt2KySo").value;
    var hangDonVi = so2KySo%10;
    var hangchuc = Math.floor(so2KySo%100/10);
    var tong2KySo = hangDonVi + hangchuc ;
    var ketQua = "Tổng 2 Ký Số :" + tong2KySo;
document.getElementById("btnKetQua").innerHTML = ketQua;




};