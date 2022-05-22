class ConNguoi {
    ten: string;
    tuoi: number;
    gioiTinh: number;
    diaChi: string;

    constructor(ten: string, tuoi: number, gioiTinh: number, diaChi: string) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
    }
    gt(): string {
        if (this.gioiTinh == 1) {
            return 'nam'
        } else if (this.gioiTinh == 2) {
            return 'nữ'
        } else {
            return 'khác'
        }
    }

    hienThiThongTin(): void {
        var tbody = document.getElementById("tbody");
        tbody.innerHTML +=
            `<tr>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.gt()}</td>
                <td>${this.diaChi}</td>   
            </tr>`;
    }
}
var cn1 = new ConNguoi('nam', 19, 1, 'sài gòn')
cn1.hienThiThongTin();
var cn2 = new ConNguoi('thiện', 19, 1, 'mỹ đình')
cn2.hienThiThongTin();
var cn3 = new ConNguoi('yến', 1, 2, 'bạc liêu')
cn3.hienThiThongTin();
var cn4 = new ConNguoi('quân', 5, 3, 'sơn la')
cn4.hienThiThongTin();

class sinhVien extends ConNguoi {
    msv: string;
    diemToan: number;
    diemLy: number;
    diemHoa: number;

    constructor(ten: string, tuoi: number, gioiTinh: number, diaChi: string, msv: string, diemToan: number, diemLy: number, diemHoa: number,) {
        super(ten, tuoi, gioiTinh, diaChi);
        this.msv = msv;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    diemTB(): number {
        return (this.diemToan + this.diemLy + this.diemHoa) / 3;
    }
    xepLoai(): string {
        let avg = this.diemTB();
        if (avg < 5) {
            return 'yếu'
        } else if (avg >= 5 && avg < 8) {
            return 'khá'
        } else {
            return 'giỏi'
        }
    }
    hienThi(): void {
        var _tbody = document.getElementById("tbody-list");
        _tbody.innerHTML +=
            `<tr>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.gt()}</td>
                <td>${this.diaChi}</td>   
                <td>${this.msv}</td>   
                <td>${this.diemToan}</td>   
                <td>${this.diemLy}</td>   
                <td>${this.diemHoa}</td>   
                <td>${this.diemTB().toFixed(2)}</td>   
                <td>${this.xepLoai()}</td>   
            </tr>`;
    }
}
var sv1 = new sinhVien('nam', 16, 1, 'sài gòn', 'A1', 8, 5, 9)
sv1.hienThi();
var sv2 = new sinhVien('thiện', 19, 1, 'mỹ đình', 'A2', 6, 4, 4)
sv2.hienThi();
var sv3 = new sinhVien('yến', 1, 2, 'bạc liêu', 'A3', 9, 6, 7)
sv3.hienThi();
var sv4 = new sinhVien('quân', 5, 3, 'sơn la', 'A4', 7, 9, 7)
sv4.hienThi();

class NhanVien extends ConNguoi {
    mnv: string;
    luongCB: number;
    soNgayCong: number;

    constructor(ten: string, tuoi: number, gioiTinh: number, diaChi: string, mnv: string, luongCB: number, soNgayCong: number) {
        super(ten, tuoi, gioiTinh, diaChi);
        this.mnv = mnv;
        this.luongCB = luongCB;
        this.soNgayCong = soNgayCong;
    }
    tinhLuong(): number {
        return this.luongCB * this.soNgayCong;
    }
    xepLoaiNV(): string {
        let luong = this.tinhLuong();
        if (luong < 4000000) {
            return 'thấp'
        } else if (luong >= 5000000 && luong < 8000000) {
            return 'trung bình'
        } else {
            return 'cao'
        }
    }
    nhanVien(): void {
        var _tbodybot = document.getElementById("tbody-bot");
        _tbodybot.innerHTML +=
            `<tr>
                <td>${this.ten}</td>
                <td>${this.tuoi}</td>
                <td>${this.gt()}</td>
                <td>${this.diaChi}</td>   
                <td>${this.mnv}</td>   
                <td>${this.luongCB}</td>   
                <td>${this.soNgayCong}</td>   
                <td>${this.tinhLuong()}</td>    
                <td>${this.xepLoaiNV()}</td>   
            </tr>`;
    }
}
var nv1 = new NhanVien('nam', 16, 1, 'sài gòn', 'A1', 200000, 29)
nv1.nhanVien();
var nv2 = new NhanVien('thiện', 19, 1, 'mỹ đình', 'A2', 400000, 26)
nv2.nhanVien();
var nv3 = new NhanVien('yến', 1, 2, 'bạc liêu', 'A3', 120000, 30)
nv3.nhanVien();
var nv4 = new NhanVien('quân', 5, 3, 'sơn la', 'A4', 100000, 30)
nv4.nhanVien();