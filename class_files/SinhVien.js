// Định nghĩa lớp Sinh viên
class SinhVien {
    constructor(ten, diaChi, maSo, diem3Mon) {
        this.ten = ten;
        this.diaChi = diaChi;
        this.maSo = maSo;
        this.diem3Mon = diem3Mon;
    };

    //getter, setter
    get getTen() {
        return this.ten;
    }
    set setTen(ten) {
        this.ten = ten;
    }

    get getDiaChi() {
        return this.diaChi;
    }
    set setDiaChi(diaChi) {
        this.diaChi = diaChi;
    }

    get getMaSo() {
        return this.maSo;
    }
    set setMaSo(maSo) {
        this.maSo = maSo;
    }

    get getDiem3Mon() {
        return this.diem3Mon;
    }
    set setDiem3Mon(diem3Mon) {
        this.diem3Mon = diem3Mon;
    }
};

module.exports = SinhVien;




