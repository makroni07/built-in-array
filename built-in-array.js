var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

function dataHandling2(arr){
	     input.splice(1, 1, "Roman Alamsyah Elsharawy")
	     input.splice(2, 1, "Provinsi Bandar Lampung")
	     input.splice(4, 1, "Pria", "SMA Internasional Metro")
	     console.log(arr)

	     var arrbulan = ["Januari", "Febuari", "Maret", "April", "Mei"]
	     var bulan = arrbulan[4]
	     console.log(bulan)

	     var tahun = '1989/21/05'
	     var re = /\s*;\s*/;
	     var tahunList = tahun.split(re);
	     console.log(tahunList);

	     var ttl = ['21', '05', '1989']
	     var variable1 = ttl.join('-')
	     console.log(variable1)

	     var Nama = arr[1]
	     console.log(Nama.slice(0, 15))


}
dataHandling2(input)






