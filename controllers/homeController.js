
const quanLyTuyenSinh = require('../class_files/QuanLyTuyenSinh');
const SinhVien = require('../class_files/SinhVien');
const Nganh = require('../class_files/Nganh');
const HoSoDangKy = require('../class_files/HoSoDangKy');

let maHoSo = 0;
let maHoSoCanSua, maHoSoCanXoa;

const getHomePage = (req, res) => {
    const dsHoSoDangKy = quanLyTuyenSinh.dsHoSoDangKy;
    const dsHoSoDau = quanLyTuyenSinh.dsHoSoDau;
    res.render('home.ejs', { listHoSo: dsHoSoDangKy, listHoSoDau: dsHoSoDau });
}


const getCreatePage = (req, res) => {
    const dsNganh = quanLyTuyenSinh.dsNganh;
    res.render('create.ejs', { listNganh: dsNganh });
}

const getEditPage = (req, res) => {
    maHoSoCanSua = +req.params.id;
    const dsNganh = quanLyTuyenSinh.dsNganh;
    //console.log(typeof maHoSoCanSua);
    console.log(dsNganh);

    //console.log(quanLyTuyenSinh.dsHoSoDangKy);

    let hoSoCanSua = quanLyTuyenSinh.dsHoSoDangKy.find((hoSo) => {
        return hoSo.maHoSo === maHoSoCanSua;
    })
    //console.log(hoSoCanSua);

    res.render('edit.ejs', { hoSoCanSua: hoSoCanSua, listNganh: dsNganh });
}



const postCreateUser = (req, res) => {
    const maNganh = req.body.nganhHoc;
    const ten = req.body.ten;
    const diaChi = req.body.diaChi;
    const maSo = req.body.maSo;
    const diem3Mon = req.body.diem3Mon;

    const sinhVien = new SinhVien(ten, diaChi, maSo, diem3Mon);
    maHoSo++;
    const nganhHoc = quanLyTuyenSinh.dsNganh.find((nganhHienTai) => {
        return nganhHienTai.getMaNganh() === maNganh;
    })
    //console.log(nganhHoc);

    const hoSoDangKy = new HoSoDangKy(sinhVien, nganhHoc, maHoSo);

    quanLyTuyenSinh.themHoSoDangKy(hoSoDangKy);
    // Code xử lý các trường dữ liệu ở đây
    //console.log(nganh);

    res.redirect('/');
    //console.log(quanLyTuyenSinh.dsHoSoDangKy);

}

const postUpdateUser = (req, res) => {
    const maNganh_new = req.body.nganhHoc;
    const ten_new = req.body.ten;
    const diaChi_new = req.body.diaChi;
    const maSo_new = req.body.maSo;
    const diem3Mon_new = req.body.diem3Mon;

    const sinhVien_new = new SinhVien(ten_new, diaChi_new, maSo_new, diem3Mon_new);

    const nganhHoc_new = quanLyTuyenSinh.dsNganh.find((nganhHienTai) => {
        return nganhHienTai.getMaNganh() === maNganh_new;
    })

    console.log(nganhHoc_new);

    const hoSoCanSua = new HoSoDangKy(sinhVien_new, nganhHoc_new, maHoSoCanSua);

    quanLyTuyenSinh.suaHoSoDangKy(hoSoCanSua);

    res.redirect('/');
}

const postDeleteUser = (req, res) => {
    maHoSoCanXoa = +req.params.id;


    //console.log(quanLyTuyenSinh.dsHoSoDangKy);

    let hoSoCanXoa = quanLyTuyenSinh.dsHoSoDangKy.find((hoSo) => {
        return hoSo.maHoSo === maHoSoCanXoa;
    })
    quanLyTuyenSinh.xoaHoSoDangKy(hoSoCanXoa);
    res.redirect('/');
}

const postHandleUser = (req, res) => {
    quanLyTuyenSinh.xuLyHoSoDangKy();
    console.log(quanLyTuyenSinh.dsHoSoDau);
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