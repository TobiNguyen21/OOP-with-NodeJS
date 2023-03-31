// Định nghĩa lớp Ngành
class Nganh {
    constructor(maNganh, tenNganh, diemChuan, soChiTieu) {
        this.maNganh = maNganh;
        this.tenNganh = tenNganh;
        this.diemChuan = diemChuan;
        this.soChiTieu = soChiTieu;
    };

    getMaNganh() {
        return this.maNganh;
    }
    setMaNganh(maNganh) {
        this.maNganh = maNganh;
    }

    getTenNganh() {
        return this.tenNganh;
    }
    setTenNganh(tenNganh) {
        this.tenNganh = tenNganh;
    }

    getDiemChuan() {
        return this.diemChuan;
    }
    setDiemChuan(diemChuan) {
        this.diemChuan = diemChuan;
    }

    getSoChiTieu() {
        return this.soChiTieu;
    }
    setSoChiTieu(soChiTieu) {
        this.soChiTieu = soChiTieu;
    }
};

module.exports = Nganh;