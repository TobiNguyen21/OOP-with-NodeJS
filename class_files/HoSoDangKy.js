const Nganh = require('./Nganh');
const SinhVien = require('./SinhVien');
// Định nghĩa lớp Hồ sơ đăng ký
class HoSoDangKy {
    constructor(sinhVien, nganhHoc, maHoSo) {
        this.sinhVien = sinhVien;
        this.nganhHoc = nganhHoc;
        this.maHoSo = maHoSo;
    };

    getSinhVien() {
        return this.sinhVien;
    }
    setSinhVien(sinhVien) {
        this.sinhVien.setTen(sinhVien.ten);
        this.sinhVien.setDiaChi(sinhVien.diaChi);
        this.sinhVien.setMaSo(sinhVien.maSo);
        this.sinhVien.setDiem3Mon(sinhVien.diem3Mon);
    }

    getNganhHoc() {
        return this.nganhHoc;
    }
    setNganhHoc(nganhHoc) {
        this.nganhHoc.setMaNganh(nganhHoc.maNganh);
        this.nganhHoc.setTenNganh(nganhHoc.tenNganh);
        this.nganhHoc.setDiemChuan(nganhHoc.diemChuan);
    }

    getMaHoSo() {
        return this.maHoSo;
    }
    setMaHoSo(maHoSo) {
        this.maHoSo = maHoSo;
    }
};
module.exports = HoSoDangKy;
