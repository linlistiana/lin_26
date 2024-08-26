const a = document.getElementById('a');
a.innerHTML= ('Tugas DOM');
console.log(document.title)
console.log(document.body)
const body = document.body

   
const namasaya = document.createElement ('p')
namasaya.textContent= 'Nama : Ni Made Lin Listiana'
const kelas = document.createElement ('p')
kelas.textContent= 'Kelas : XI RPL 2'
const Absen = document.createElement ('p')
Absen.textContent= 'Absen : 26'

body.append (namasaya)
body.append (kelas)
body.append (Absen)