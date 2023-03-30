// Định nghĩa lớp Ngành
class Nganh {
    constructor(maNganh, tenNganh, diemChuan) {
        this.maNganh = maNganh;
        this.tenNganh = tenNganh;
        this.diemChuan = diemChuan;
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


};

module.exports = Nganh;