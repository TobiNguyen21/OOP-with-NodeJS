
const quanLyTuyenSinh = require('../class_files/QuanLyTuyenSinh');
const SinhVien = require('../class_files/SinhVien');
const Nganh = require('../class_files/Nganh');
const HoSoDangKy = require('../class_files/HoSoDangKy');

let maHoSo = 0;
let maHoSoCanSua, maHoSoCanXoa;
let dsNganhCuaTruong = quanLyTuyenSinh.getDsNganhCuaTruong();

//---------------Methods get-------------------------
const getHomePage = (req, res) => {
    const dsHoSoDangKy = quanLyTuyenSinh.getDsHoSoDangKy();
    const dsHoSoDau = quanLyTuyenSinh.getDsHoSoDau();

    console.log("ds Nganh cua truong: ", dsNganhCuaTruong);
    console.log("ds ho so dk: ", dsHoSoDangKy);
    console.log("ds hoso dau, sau khi nhan xuly: ", dsHoSoDau);

    res.render('home.ejs', { listHoSo: dsHoSoDangKy, listHoSoDau: dsHoSoDau });
}

const getCreatePage = (req, res) => {
    res.render('create.ejs', { listNganh: dsNganhCuaTruong });
}

const getEditPage = (req, res) => {
    maHoSoCanSua = +req.params.id;

    let hoSoCanSua = quanLyTuyenSinh.getDsHoSoDangKy().find((hoSo) => {
        return hoSo.maHoSo === maHoSoCanSua;
    })
    console.log("ma ho so can sua: ", maHoSoCanSua);

    res.render('edit.ejs', { hoSoCanSua: hoSoCanSua, listNganh: dsNganhCuaTruong });
}

//--------------------Methods post-----------------------------
const postCreateUser = (req, res) => {
    const ten = req.body.ten;
    const diaChi = req.body.diaChi;
    const maSo = req.body.maSo;
    const diem3Mon = +req.body.diem3Mon;
    const maNganh = req.body.nganhHoc;

    const sinhVien = new SinhVien(ten, diaChi, maSo, diem3Mon);
    maHoSo++;
    const nganhHoc_beFound = dsNganhCuaTruong.find((nganhHienTai) => {
        return nganhHienTai.getMaNganh() === maNganh;
    })
    const nganhHoc = new Nganh(nganhHoc_beFound.getMaNganh(), nganhHoc_beFound.getTenNganh(), nganhHoc_beFound.getDiemChuan(), nganhHoc_beFound.getSoChiTieu());
    const hoSoDangKy = new HoSoDangKy(sinhVien, nganhHoc, maHoSo);

    quanLyTuyenSinh.themHoSoDangKy(hoSoDangKy);

    res.redirect('/');
}

const postUpdateUser = (req, res) => {
    const ten_new = req.body.ten;
    const diaChi_new = req.body.diaChi;
    const maSo_new = req.body.maSo;
    const diem3Mon_new = +req.body.diem3Mon;
    const maNganh_new = req.body.nganhHoc;

    const nganhHoc_beFound = dsNganhCuaTruong.find((nganhHienTai) => {
        return nganhHienTai.getMaNganh() === maNganh_new;
    })

    const nganhHoc_new = Object.assign({}, nganhHoc_beFound);
    const sinhVien_new = new SinhVien(ten_new, diaChi_new, maSo_new, diem3Mon_new);

    console.log("Nganh sau khi edit: ", nganhHoc_new);
    console.log("Sinh vien sau khi edit: ", sinhVien_new);

    quanLyTuyenSinh.suaHoSoDangKy(maHoSoCanSua, sinhVien_new, nganhHoc_new);

    res.redirect('/');
}

const postDeleteUser = (req, res) => {
    maHoSoCanXoa = +req.params.id;

    let hoSoCanXoa = quanLyTuyenSinh.getDsHoSoDangKy().find((hoSo) => {
        return hoSo.maHoSo === maHoSoCanXoa;
    })
    quanLyTuyenSinh.xoaHoSoDangKy(hoSoCanXoa);
    res.redirect('/');
}

const postHandleUser = (req, res) => {
    quanLyTuyenSinh.xuLyHoSoDangKy();
    console.log(quanLyTuyenSinh.getDsHoSoDau());
    res.redirect('/');
}

module.exports = {
    getHomePage,
    getCreatePage,
    getEditPage,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleUser
}