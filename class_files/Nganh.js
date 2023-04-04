// Định nghĩa lớp Ngành
class Nganh {
    constructor(maNganh, tenNganh, diemChuan, soChiTieu) {
        this.maNganh = maNganh;
        this.tenNganh = tenNganh;
        this.diemChuan = diemChuan;
        this.soChiTieu = soChiTieu;
    };

    get getMaNganh() {
        return this.maNganh;
    }
    set setMaNganh(maNganh) {
        this.maNganh = maNganh;
    }

    get getTenNganh() {
        return this.tenNganh;
    }
    set setTenNganh(tenNganh) {
        this.tenNganh = tenNganh;
    }

    get getDiemChuan() {
        return this.diemChuan;
    }
    set setDiemChuan(diemChuan) {
        this.diemChuan = diemChuan;
    }

    get getSoChiTieu() {
        return this.soChiTieu;
    }
    set setSoChiTieu(soChiTieu) {
        this.soChiTieu = soChiTieu;
    }
};
module.exports = Nganh;