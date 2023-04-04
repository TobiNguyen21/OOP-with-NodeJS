// Định nghĩa lớp Hồ sơ đăng ký
class HoSoDangKy {
    constructor(sinhVien, nganhHoc, maHoSo) {
        this.sinhVien = sinhVien;
        this.nganhHoc = nganhHoc;
        this.maHoSo = maHoSo;
    };

    get getSinhVien() {
        return this.sinhVien;
    }
    set setSinhVien(sinhVien) {
        this.sinhVien.setTen = sinhVien.getTen;
        this.sinhVien.setDiaChi = sinhVien.getDiaChi;
        this.sinhVien.setMaSo = sinhVien.getMaSo;
        this.sinhVien.setDiem3Mon = sinhVien.getDiem3Mon;
    }

    get getNganhHoc() {
        return this.nganhHoc;
    }

    set setNganhHoc(nganhHoc) {
        this.nganhHoc.setMaNganh = nganhHoc.maNganh;
        this.nganhHoc.setTenNganh = nganhHoc.tenNganh;
        this.nganhHoc.setDiemChuan = nganhHoc.diemChuan;
    }

    get getMaHoSo() {
        return this.maHoSo;
    }
    set setMaHoSo(maHoSo) {
        this.maHoSo = maHoSo;
    }
};
module.exports = HoSoDangKy;
