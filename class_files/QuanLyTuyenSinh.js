const Nganh = require('./Nganh');
const HoSoDangKy = require('./HoSoDangKy');
const SinhVien = require('./SinhVien');
// Định nghĩa lớp Quản lý tuyển sinh
class QuanLyTuyenSinh {
    constructor() {
        this.dsHoSoDangKy = [];
        this.dsNganh = [];
        this.dsHoSoDau = [];
    }

    // Phương thức thêm hồ sơ đăng ký
    themHoSoDangKy(hoSoDangKy) {
        this.dsHoSoDangKy.push(hoSoDangKy);
    }

    //Phương thức sửa hồ sơ
    suaHoSoDangKy(hoSoCanSua) {
        this.dsHoSoDangKy.forEach((hoSoHienTai) => {
            if (hoSoHienTai.getMaHoSo() === hoSoCanSua.maHoSo) {
                hoSoHienTai.setSinhVien(hoSoCanSua.sinhVien);
                hoSoHienTai.setNganhHoc(hoSoCanSua.nganhHoc);
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
            this.dsNganh.forEach((nganhHienTai) => {
                if (hoSoHienTai.nganhHoc.getMaNganh() === nganhHienTai.getMaNganh() && hoSoHienTai.sinhVien.getDiem3Mon() > nganhHienTai.getDiemChuan()) {
                    this.dsHoSoDau.push(hoSoHienTai);
                }
            })
        })
    }
}

// Tạo các đối tượng quan lý tuyển sinh
const quanLyTuyenSinh = new QuanLyTuyenSinh();

// Khởi tạo các đối tượng
const CNTT = new Nganh('CNTT', "Công nghệ thông tin", 27, 50);
quanLyTuyenSinh.dsNganh.push(CNTT);
const KHMT = new Nganh('KHMT', "Khoa học máy tính", 28, 40);
quanLyTuyenSinh.dsNganh.push(KHMT);
const KTMT = new Nganh('KTMT', "Khoa học và kỹ thuật máy tính", 22, 30);
quanLyTuyenSinh.dsNganh.push(KTMT);
const DTVT = new Nganh('DTVT', "Điện Tử Viễn Thông", 24.50, 50);
quanLyTuyenSinh.dsNganh.push(DTVT);

module.exports = quanLyTuyenSinh;