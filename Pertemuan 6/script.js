function cekumur() {
    const umur = document.getElementById('umur').value;
    let hasil = '';


    if(umur>= 18){ 
        hasil = 'Dewasa';}
        else if (umur>0) {
            hasil = 'Anak anak';
        }
    else {
        hasil = 'masukan umur yang valid';
    }

    


    document.getElementById('hasilumur').innerText = hasil;

}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let Hasil = '';

    if (username === 'Amba' && password === '121212') {
        Hasil = 'Login berhasil';
    }
    else{ 
        Hasil = 'silahkan coba lagi';
    }
    document.getElementById('hasillogin').innerText = Hasil;
}


function cekDiskon() {
    let isMember = document.getElementById ('isMember').Checked;
    let totalbelanja = parseInt(document.getElementById('totalbelanja').value);
    let kantong = document.getElementById('kantong').Checked;
    let result='';

    if (isMember || totalbelanja>=100000 || !kantong) {
        result = `selamat anda mendapatkan diskon sebanyak 17% ${totalbelanja+2000}`;
    }
        else if (!isMember && totalbelanja>= 50000) { result = `Anda mendapatkan ongkir gratis`
          }
          else {
            result = `maaf kurang banyak untuk diskon nya`;
          }

          document.getElementById('hasilDiskon').innerText = result;
    
}

function ceknilai() {
    const nilai = document.getElementById('nilai').value;
    let Grade ='';

    if (nilai >= 85){
        Grade = 'A';
    }
    else if (nilai >=70){
        Grade='B';}
                else if (nilai >=60){
        Grade='C';}
        else {Grade='D';}
    
        document.getElementById('CekNilai').innerText = Grade;
}