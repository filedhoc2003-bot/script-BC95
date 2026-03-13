// tính tiền đi tắt xi
//1 km đầu:15.000(giá mở cửa)
//từ km 2->5:12.000/km
// từ trên 5km: 11.000/km
// trên 30km: giảm 10% tổng bill
const tinhTienTaxi = (soKM) => {
  if (soKM < 0) {
    console.log("số km phải lớn hơn 0");
    return "số km phải lớn hơn 0";
  }
  let tongTien = 0;
  if (soKM <= 1) {
    tongTien = 15000;
  } else if (soKM <= 5) {
    tongTien = 15000 + (5 - 1) * 12000;
  } else if (soKM <= 30) {
    tongTien = 15000 + (5 - 1) * 12000 + 25 * 11000;
  } else {
    tongTien = (15000 + (5 - 1) * 12000 + 25 * 11000) * 0.9;
  }
  return `quãng đường số ${soKM} =>số tiền là: ${tongTien} VND`;
};
console.log(tinhTienTaxi(0));
console.log(tinhTienTaxi(5));
console.log(tinhTienTaxi(30));
console.log(tinhTienTaxi(35));

// các thứ trong tuần
//
const ngayTrongTuan = (thu) => {
  switch (thu) {
    case 1:
      console.log("chủ nhật");
      break;
    case 2:
      console.log("thứ 2");
      break;
    case 3:
      console.log("thứ 3");
      break;
    case 4:
      console.log("thứ 4");
      break;
    case 5:
      console.log("thứ 5");
      break;
    case 6:
      console.log("thứ 6");
      break;
    case 7:
      console.log("thứ 7");
      break;
    default:
      console.log("không hợp lệ (nhập 1-7)");
      break;
  }
};
ngayTrongTuan(8);
ngayTrongTuan(5);
ngayTrongTuan(1);

///
//
// kiểm tra mùa
//
// nhập 1 tháng bất kỳ trong năm (1-12)
// mùa nào (xuân , hạ , thu , đông)
const kiemTraMua = (thang) => {
  switch (thang) {
    case 1:
    case 2:
    case 3:
    case "một":
    case "1":
      console.log("Mùa xuân");
      break;
    case 4:
    case 5:
    case 6:
      console.log("Mùa hạ");
      break;
    case 7:
    case 8:
    case 9:
      console.log("Mùa thu");
      break;
    case 10:
    case 11:
    case 12:
      console.log("Mùa đông");
      break;
    default:
      console.log("không hợp lệ (mời nhập lại từ tháng 1-12)");
      break;
  }
};

kiemTraMua("một");
kiemTraMua(7);
kiemTraMua(8);
kiemTraMua(4);
kiemTraMua(14);
kiemTraMua(2);
