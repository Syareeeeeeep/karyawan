const daftarKaryawan = []


// READ
const tampilkanKaryawan = () => {
    const tblKaryawan = document.getElementById('tblKaryawan')
    tblKaryawan.innerHTML = '<tr><th>No</th><th>NIK</th><th>Nama</th><th>Masa Kerja</th><th>Status</th><th>Gaji</th><th scope="col">Edit</th><th scope="col">Hapus</th></tr>'

    for(let idx in daftarKaryawan) {
        console.log(`${parseInt(idx) + 1}. nama ${daftarKaryawan[idx].nama} nik ${daftarKaryawan[idx].nik} bekerja selama ${daftarKaryawan[idx].masaKerja} tahun, dengan gaji ${daftarKaryawan[idx].gaji} berstatus ${daftarKaryawan[idx].status}.`)

        tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarKaryawan[idx].nik}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].status}</td><td>${daftarKaryawan[idx].gaji}</td><th><button type="button" class="btn btn-warning" onclick="editKaryawan('${daftarKaryawan[idx].nik}')">Edit</button></th><th><button type="button" class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}') + tampilkanKaryawan()">Delete</button></th></tr>`
    }
}


let mode = "tambah"

// CREATE
const tambahKaryawan = () => {
    const nik = document.getElementById("txtNik").value
    const nama = document.getElementById("txtNama").value
    const masaKerja = document.getElementById("txtMasa").value


    const karyawanBaru = {
        nik : nik,
        nama : nama,
        masaKerja : masaKerja,
        status : masaKerja< 6 ? "Karyawan Junior" : "Karyawan Senior",
        gaji : masaKerja< 6 ? "Rp.4.000.000" : "Rp.7.000.000"
    }

    // jika tambah
    if(mode == "tambah") {
            if(karyawanBaru.nik.length == 10) {
                daftarKaryawan.push(karyawanBaru)
            } else {
                alert("NIK yang anda masukan tidak valid. Mohon isi ulang")
                document.getElementById("txtNik").value =''
                document.getElementById("txtNama").value = daftarKaryawan[indexEdit].nama;
                document.getElementById("txtMasa").value = daftarKaryawan[indexEdit].masaKerja;
            }
        // daftarKaryawan.push(karyawanBaru) 
    } else {
        // jika edit
        if(karyawanBaru.nik.length == 16) {
            daftarKaryawan[mode] = karyawanBaru
        } else {
            alert("NIK yang anda masukan tidak valid. Mohon isi ulang(isi dengan 16 digit)")
            document.getElementById("txtNik").value =''
            document.getElementById("txtNama").value = daftarKaryawan[indexEdit].nama;
            document.getElementById("txtMasa").value = daftarKaryawan[indexEdit].masaKerja;
        }
        // daftarKaryawan[mode] = karyawanBaru
    }



    document.getElementById("txtNik").value = ""
    document.getElementById("txtNama").value = ""
    document.getElementById("txtMasa").value = ""

    mode = "tambah"
}


// MENGHAPUS
const cariIndex = (nik) => {
    // tampilkan index jika nama karyawan === nama
    for(let i=0; i<daftarKaryawan.length; i++) {
        if(daftarKaryawan[i].nik == nik) {
            // console.log(i)
            return i
        }
    }
}

const hapusKaryawan = (target) => {
    const indexDihapus = cariIndex(target)
    // menghapus element dari dalam array
    daftarKaryawan.splice(indexDihapus, 1)
}


// MENGGANTI
const editKaryawan = (target) => {
    const indexEdit = cariIndex(target)
    
    console.log(target)
    console.log(indexEdit)

    console.log(daftarKaryawan[indexEdit])

    document.getElementById("txtNik").value = daftarKaryawan[indexEdit].nik;
    document.getElementById("txtNama").value = daftarKaryawan[indexEdit].nama;
    document.getElementById("txtMasa").value = daftarKaryawan[indexEdit].masaKerja;

    mode = indexEdit

}

// MEMBATALKAN
const cancel = () => {
    document.getElementById("txtNik").value = ""
    document.getElementById("txtNama").value = ""
    document.getElementById("txtMasa").value = ""

    mode = "tambah"
}


// CARA MEMBUAT NIK MENJADI PRIMARY KEY BAGAIMANA YAA??? 😭😭😭