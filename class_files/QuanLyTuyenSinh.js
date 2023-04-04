const Nganh = require('./Nganh');
const HoSoDangKy = require('./HoSoDangKy');

// Định nghĩa lớp Quản lý tuyển sinh
class QuanLyTuyenSinh {
    constructor() {
        this.dsHoSoDangKy = [];
        this.dsNganhCuaTruong = [];
        this.dsHoSoDau = [];
    }

    get getDsNganhCuaTruong() {
        return this.dsNganhCuaTruong;
    }
    get getDsHoSoDangKy() {
        return this.dsHoSoDangKy;
    }
    get getDsHoSoDau() {
        return this.dsHoSoDau;
    }

    // Phương thức thêm hồ sơ đăng ký
    themHoSoDangKy(hoSoDangKy) {
        this.dsHoSoDangKy.push(hoSoDangKy);
    }

    //Phương thức sửa hồ sơ
    suaHoSoDangKy(maHoSoCanSua, sinhVien_new, nganhHoc_new) {
        this.dsHoSoDau.splice(0, this.dsHoSoDau.length);// reset list
        this.dsHoSoDangKy.forEach((hoSoHienTai) => {
            if (hoSoHienTai.getMaHoSo === maHoSoCanSua) {
                hoSoHienTai.setSinhVien = sinhVien_new;
                hoSoHienTai.setNganhHoc = nganhHoc_new;
            }
        })
    }

    // Phương thức xóa hồ sơ đăng ký
    xoaHoSoDangKy(hoSoDangKy) {
        let index = this.dsHoSoDangKy.indexOf(hoSoDangKy);
        if (index !== -1) {
            this.dsHoSoDangKy.splice(index, 1);
        }
    }

    // Phương thức xử lý hồ sơ đăng ký
    xuLyHoSoDangKy() {
        this.dsHoSoDau.splice(0, this.dsHoSoDau.length);// reset list
        this.dsHoSoDangKy.forEach((hoSoHienTai) => {
            this.dsNganhCuaTruong.forEach((nganhHienTai) => {
                if (hoSoHienTai.nganhHoc.getMaNganh === nganhHienTai.getMaNganh && hoSoHienTai.sinhVien.getDiem3Mon >= nganhHienTai.getDiemChuan) {
                    this.dsHoSoDau.push(hoSoHienTai);
                }
            })
        })
    }
}

// Tạo các đối tượng quan lý tuyển sinh
const quanLyTuyenSinh = new QuanLyTuyenSinh();

// Khởi tạo các đối tượng
const CNTT = new Nganh('CNTT', "Công nghệ thông tin", 27, 400);
quanLyTuyenSinh.dsNganhCuaTruong.push(CNTT);
const KHMT = new Nganh('KHMT', "Khoa học máy tính", 28, 160);
quanLyTuyenSinh.dsNganhCuaTruong.push(KHMT);
const KHDL = new Nganh('KHDL', "Khoa học dữ liệu", 25.5, 150);
quanLyTuyenSinh.dsNganhCuaTruong.push(KHDL);
const DTVT = new Nganh('DTVT', "Điện Tử Viễn Thông", 24.5, 300);
quanLyTuyenSinh.dsNganhCuaTruong.push(DTVT);

module.exports = quanLyTuyenSinh;