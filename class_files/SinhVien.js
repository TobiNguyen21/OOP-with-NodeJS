// Định nghĩa lớp Sinh viên
class SinhVien {
    constructor(ten, diaChi, maSo, diem3Mon) {
        this.ten = ten;
        this.diaChi = diaChi;
        this.maSo = maSo;
        this.diem3Mon = diem3Mon;
    };

    //getter, setter
    getTen() {
        return this.ten;
    }
    setTen(ten) {
        this.ten = ten;
    }

    getDiaChi() {
        return this.diaChi;
    }
    setDiaChi(diaChi) {
        this.diaChi = diaChi;
    }

    getMaSo() {
        return this.maSo;
    }
    setMaSo(maSo) {
        this.maSo = maSo;
    }

    getDiem3Mon() {
        return this.diem3Mon;
    }
    setDiem3Mon(diem3Mon) {
        this.diem3Mon = diem3Mon;
    }
};

module.exports = SinhVien;




