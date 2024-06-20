function cek(){
    let inputkhodam = document.querySelector(".inputKhodam");
    let loading = document.querySelector(".loading");
    let awal = document.querySelector(".awal");
    let btn = document.querySelector(".btn");
    let desc = document.getElementById("desc"); 
    let khodamHasil = document.getElementById("khodam"); 
    let btnBack = document.getElementById("btn-back");

    if(inputkhodam.value !== ""){
        awal.style.display = "none";
        btn.style.display = "none";
        loading.style.display = "flex";
        setTimeout(function() {
            loading.style.display = "none";
            let khodam = {
                "boboiboy": "Seorang pahlawan yang memiliki kekuatan elemen.",
"nenek sihir": "Nenek sihir dengan kekuatan sihir yang luar biasa.",
"ular sawah": "Ular mistis yang tinggal di sawah dan memiliki kekuatan magis.",
"cekelawai": "Makhluk misterius yang menjaga hutan.",
"Raju Sang Pengembara": "Seorang pengembara yang memiliki kemampuan membaca pikiran.",
"Putri Bulan": "Putri dari kerajaan bulan yang memiliki kekuatan mengendalikan air.",
"Harimau Besi": "Harimau mekanik dengan kekuatan dan kecepatan luar biasa.",
"Dewi Angin": "Dewi yang dapat mengendalikan angin dan terbang dengan cepat.",
"Naga Api": "Naga legendaris yang mampu mengeluarkan api yang sangat panas.",
"Kucing Hutan": "Kucing besar yang hidup di hutan dan memiliki kemampuan menghilang.",
"Prajurit Baja": "Prajurit yang tubuhnya terbuat dari baja, sangat kuat dan tahan lama.",
"Elang Emas": "Elang raksasa dengan bulu emas dan pandangan tajam.",
"Pangeran Awan": "Pangeran yang mampu mengendalikan awan dan cuaca.",
"Bidadari Matahari": "Bidadari dengan kekuatan matahari yang bisa menyembuhkan luka.",
"Penjaga Gerbang": "Makhluk besar yang menjaga gerbang dunia lain.",
"Ratu Laut": "Ratu dari kerajaan laut yang dapat mengendalikan ombak.",
"Ksatria Kegelapan": "Ksatria yang mampu mengendalikan kegelapan dan bayangan.",
"Pahlawan Petir": "Pahlawan yang memiliki kekuatan mengendalikan petir.",
"Pawang Hujan": "Orang yang bisa memanggil dan menghentikan hujan.",
"Dewa Gunung": "Dewa yang menguasai gunung dan gempa bumi.",
"Putri Pelangi": "Putri dengan kekuatan menciptakan pelangi.",
"Pencuri Bayangan": "Pencuri yang mampu menghilang dalam bayangan.",
"Raksasa Batu": "Raksasa yang tubuhnya terbuat dari batu keras.",
"Penyihir Hitam": "Penyihir dengan kekuatan gelap yang menakutkan.",
"Peri Hutan": "Peri kecil yang hidup di hutan dan menjaga flora.",
"Penunggang Naga": "Pahlawan yang memiliki naga sebagai tunggangannya.",
"Kesatria Emas": "Kesatria dengan armor emas yang sangat kuat.",
"Dewi Bunga": "Dewi yang dapat membuat bunga mekar di mana saja.",
"Pangeran Kegelapan": "Pangeran dengan kekuatan kegelapan dan bayangan.",
"Prajurit Cahaya": "Prajurit yang memerangi kegelapan dengan kekuatan cahaya.",
"Sang Penembak": "Ahli panah yang tak pernah meleset.",
"Ratu Salju": "Ratu dengan kekuatan mengendalikan es dan salju.",
"Pemburu Hantu": "Pemburu yang ahli menangkap dan mengusir hantu.",
"Dewa Api": "Dewa yang menguasai api dan panas.",
"Putri Es": "Putri yang dapat membekukan apa saja dengan sentuhannya.",
"Penguasa Bayangan": "Penguasa yang dapat mengendalikan dan memanipulasi bayangan.",
"Penjaga Waktu": "Makhluk yang dapat menghentikan dan memutar balik waktu.",
"Raja Angin": "Raja yang memiliki kekuatan angin dan badai.",
"Pencipta Ilusi": "Makhluk yang dapat menciptakan ilusi yang menipu mata.",
"Prajurit Air": "Prajurit dengan kekuatan mengendalikan air.",
"Penunggang Harimau": "Pahlawan yang memiliki harimau sebagai tunggangannya.",
"Naga Kristal": "Naga yang tubuhnya terbuat dari kristal.",
"Kesatria Kembar": "Dua kesatria yang selalu bertarung bersama.",
"Ratu Petir": "Ratu yang dapat mengendalikan petir dan badai.",
"Penjaga Alam": "Makhluk yang melindungi keseimbangan alam.",
"Penyihir Angin": "Penyihir dengan kekuatan mengendalikan angin.",
"Raksasa Api": "Raksasa yang tubuhnya terdiri dari api yang membara.",
"Peri Laut": "Peri yang hidup di lautan dan menjaga kedamaian bawah laut.",
"Dewa Hujan": "Dewa yang dapat mengendalikan hujan dan badai.",
"Pangeran Angin": "Pangeran yang dapat berlari secepat angin.",
"Prajurit Hutan": "Prajurit yang melindungi hutan dan penghuninya.",
"Pengendali Batu": "Makhluk yang dapat mengendalikan batu dan tanah.",
"Pencuri Mimpi": "Pencuri yang bisa mencuri mimpi orang lain.",
"Bidadari Hutan": "Bidadari yang menjaga hutan dengan kekuatan alam.",
"Penunggang Serigala": "Pahlawan yang memiliki serigala sebagai tunggangannya.",
"Naga Air": "Naga yang dapat mengendalikan air dan lautan.",
"Kesatria Salju": "Kesatria dengan kekuatan mengendalikan salju dan es.",
"Ratu Bunga": "Ratu yang dapat membuat bunga tumbuh di mana saja.",
"Penjaga Bintang": "Makhluk yang menjaga bintang-bintang di langit.",
"Penyihir Badai": "Penyihir dengan kekuatan mengendalikan badai.",
"Raksasa Es": "Raksasa yang tubuhnya terbuat dari es dingin.",
"Peri Angin": "Peri yang dapat terbang dengan kecepatan angin.",
"Dewa Matahari": "Dewa yang menguasai kekuatan matahari.",
"Putri Kegelapan": "Putri dengan kekuatan mengendalikan kegelapan.",
"Penguasa Hutan": "Penguasa yang melindungi hutan dan penghuninya.",
"Prajurit Bayangan": "Prajurit yang mampu bergerak dalam bayangan.",
"Sang Pengembara": "Pengembara yang memiliki pengetahuan luas tentang dunia.",
"Ratu Bulan": "Ratu yang memerintah kerajaan bulan.",
"Pemburu Bayangan": "Pemburu yang ahli menangkap makhluk bayangan.",
"Dewa Bintang": "Dewa yang menguasai kekuatan bintang-bintang.",
"Putri Angin": "Putri dengan kekuatan mengendalikan angin.",
"Penguasa Ombak": "Penguasa yang dapat mengendalikan ombak dan lautan.",
"Penjaga Matahari": "Makhluk yang menjaga kekuatan matahari.",
"Raksasa Bumi": "Raksasa yang tubuhnya terbuat dari tanah dan batu.",
"Peri Salju": "Peri yang hidup di pegunungan salju dan menjaga es.",
"Dewi Hujan": "Dewi yang dapat mengendalikan hujan dan badai.",
"Putri Air": "Putri dengan kekuatan mengendalikan air.",
"Penguasa Angin": "Penguasa yang dapat mengendalikan angin dan badai.",
"Prajurit Salju": "Prajurit yang melindungi pegunungan salju.",
"Penunggang Elang": "Pahlawan yang memiliki elang sebagai tunggangannya.",
"Naga Petir": "Naga yang dapat mengeluarkan petir dari mulutnya.",
"Kesatria Bulan": "Kesatria dengan kekuatan mengendalikan bulan.",
"Ratu Kegelapan": "Ratu dengan kekuatan mengendalikan kegelapan.",
"Penjaga Ombak": "Makhluk yang menjaga kedamaian di lautan.",
"Penyihir Es": "Penyihir dengan kekuatan mengendalikan es.",
"Raksasa Angin": "Raksasa yang tubuhnya terdiri dari angin yang kuat.",
"Peri Bunga": "Peri yang menjaga bunga-bunga dan tanaman.",
"Dewa Bulan": "Dewa yang menguasai kekuatan bulan.",
"Putri Matahari": "Putri dengan kekuatan mengendalikan matahari.",
"Penguasa Salju": "Penguasa yang dapat mengendalikan salju dan es.",
"Penjaga Bumi": "Makhluk yang menjaga keseimbangan bumi.",
"Ratu Angin": "Ratu dengan kekuatan mengendalikan angin.",
"Pemburu Hutan": "Pemburu yang ahli menangkap makhluk hutan.",
"Dewa Kegelapan": "Dewa yang menguasai kekuatan kegelapan.",
"Putri Bintang": "Putri dengan kekuatan mengendalikan bintang-bintang.",
"Penguasa Badai": "Penguasa yang dapat mengendalikan badai.",
"Penjaga Hujan": "Makhluk yang menjaga kekuatan hujan.",
"Raksasa Petir": "Raksasa yang tubuhnya terdiri dari petir yang menyambar.",
"Peri Matahari": "Peri yang hidup di bawah sinar matahari.",
"Dewi Angkasa": "Dewi yang menguasai angkasa dan bintang-bintang.",
"Putri Awan": "Putri dengan kekuatan mengendalikan awan.",
"Penguasa Es": "Penguasa yang dapat mengendalikan es dan salju.",
"Prajurit Bintang": "Prajurit yang melindungi bintang-bintang di langit.",
"Penunggang Naga Api": "Pahlawan yang memiliki naga api sebagai tunggangannya.",
"Naga Hutan": "Naga yang hidup di hutan dan menjaga flora.",
"Kesatria Petir": "Kesatria dengan kekuatan mengendalikan petir.",
"Ratu Hutan": "Ratu dengan kekuatan mengendalikan flora dan fauna.",
"Penjaga Badai": "Makhluk yang menjaga kedamaian di tengah badai.",
"Penyihir Hutan": "Penyihir dengan kekuatan mengendalikan flora.",
"Raksasa Hujan": "Raksasa yang tubuhnya terdiri dari air hujan.",
"Peri Bulan": "Peri yang hidup di bawah sinar bulan.",
"Dewa Angin": "Dewa yang menguasai kekuatan angin.",
"Putri Bumi": "Putri dengan kekuatan mengendalikan tanah.",
"Penguasa Laut": "Penguasa yang dapat mengendalikan lautan.",
"Penjaga Petir": "Makhluk yang menjaga kekuatan petir.",
"Raksasa Bintang": "Raksasa yang tubuhnya terdiri dari bintang-bintang.",
"Peri Hujan": "Peri yang hidup di bawah hujan.",
"Dewi Bintang": "Dewi yang menguasai kekuatan bintang-bintang.",
"Putri Salju": "Putri dengan kekuatan mengendalikan salju.",
"Penguasa Matahari": "Penguasa yang dapat mengendalikan matahari.",
"Prajurit Kegelapan": "Prajurit yang melindungi dari kekuatan kegelapan.",
"Penunggang Harimau Putih": "Pahlawan yang memiliki harimau putih sebagai tunggangannya.",
"Naga Emas": "Naga yang tubuhnya terbuat dari emas.",
"Kesatria Awan": "Kesatria dengan kekuatan mengendalikan awan.",
"Ratu Awan": "Ratu dengan kekuatan mengendalikan awan dan cuaca.",
"Penjaga Awan": "Makhluk yang menjaga keseimbangan awan.",
"Penyihir Bintang": "Penyihir dengan kekuatan mengendalikan bintang-bintang.",
"Raksasa Salju": "Raksasa yang tubuhnya terdiri dari salju tebal.",
"Peri Ombak": "Peri yang hidup di tengah ombak laut.",
"Dewa Badai": "Dewa yang menguasai kekuatan badai.",
"Putri Laut": "Putri dengan kekuatan mengendalikan laut.",
"Penguasa Bumi": "Penguasa yang dapat mengendalikan tanah dan batu.",
"Penjaga Bulan": "Makhluk yang menjaga kekuatan bulan.",
"Raksasa Matahari": "Raksasa yang tubuhnya terdiri dari api matahari.",
"Peri Petir": "Peri yang hidup di tengah petir dan badai.",
"Dewi Kegelapan": "Dewi yang menguasai kekuatan kegelapan.",
"Putri Petir": "Putri dengan kekuatan mengendalikan petir.",
"Penguasa Awan": "Penguasa yang dapat mengendalikan awan dan cuaca.",
"Prajurit Petir": "Prajurit yang melindungi dari kekuatan petir.",
"Penunggang Serigala Putih": "Pahlawan yang memiliki serigala putih sebagai tunggangannya.",
"Naga Batu": "Naga yang tubuhnya terbuat dari batu keras.",
"Kesatria Ombak": "Kesatria dengan kekuatan mengendalikan ombak.",
"Ratu Ombak": "Ratu dengan kekuatan mengendalikan ombak dan laut.",
"Penjaga Ombak": "Makhluk yang menjaga keseimbangan ombak.",
"Penyihir Laut": "Penyihir dengan kekuatan mengendalikan laut.",
"Raksasa Ombak": "Raksasa yang tubuhnya terdiri dari ombak besar.",
"Peri Angkasa": "Peri yang hidup di angkasa dan menjaga bintang-bintang.",
"Dewa Ombak": "Dewa yang menguasai kekuatan ombak.",
"Putri Badai": "Putri dengan kekuatan mengendalikan badai.",
"Penguasa Hutan": "Penguasa yang dapat mengendalikan hutan dan penghuninya.",
"Penjaga Hutan": "Makhluk yang menjaga keseimbangan hutan.",
"Raksasa Badai": "Raksasa yang tubuhnya terdiri dari badai yang mengamuk.",
"Peri Badai": "Peri yang hidup di tengah badai dan angin kencang.",
"Dewi Hutan": "Dewi yang menguasai kekuatan hutan.",
"Putri Hutan": "Putri dengan kekuatan mengendalikan hutan.",
"Penguasa Bintang": "Penguasa yang dapat mengendalikan bintang-bintang.",
"Prajurit Angkasa": "Prajurit yang melindungi angkasa dan bintang-bintang.",
"Penunggang Naga Kristal": "Pahlawan yang memiliki naga kristal sebagai tunggangannya.",
"Naga Bayangan": "Naga yang dapat mengendalikan bayangan.",
"Kesatria Kristal": "Kesatria dengan kekuatan mengendalikan kristal.",
"Ratu Kristal": "Ratu dengan kekuatan mengendalikan kristal dan permata.",
"Penjaga Kristal": "Makhluk yang menjaga kekuatan kristal.",
"Penyihir Kristal": "Penyihir dengan kekuatan mengendalikan kristal.",
"Raksasa Kristal": "Raksasa yang tubuhnya terbuat dari kristal.",
"Peri Kristal": "Peri yang hidup di dalam gua kristal.",
"Dewa Kristal": "Dewa yang menguasai kekuatan kristal.",
"Putri Kristal": "Putri dengan kekuatan mengendalikan kristal.",
"Penguasa Kristal": "Penguasa yang dapat mengendalikan kristal dan permata.",
"Prajurit Kristal": "Prajurit yang melindungi kekuatan kristal.",
"Penunggang Naga Hitam": "Pahlawan yang memiliki naga hitam sebagai tunggangannya.",
"Naga Emas Putih": "Naga yang tubuhnya terbuat dari emas dan permata putih.",
"Kesatria Hitam": "Kesatria dengan kekuatan mengendalikan kegelapan.",
"Ratu Hitam": "Ratu dengan kekuatan mengendalikan kegelapan.",
"Penjaga Hitam": "Makhluk yang menjaga kekuatan kegelapan.",
"Penyihir Hitam": "Penyihir dengan kekuatan mengendalikan kegelapan.",
"Raksasa Hitam": "Raksasa yang tubuhnya terdiri dari kegelapan.",
"Peri Hitam": "Peri yang hidup di tengah kegelapan.",
"Dewa Hitam": "Dewa yang menguasai kekuatan kegelapan.",
"Putri Hitam": "Putri dengan kekuatan mengendalikan kegelapan.",
"Penguasa Hitam": "Penguasa yang dapat mengendalikan kegelapan.",
"Prajurit Hitam": "Prajurit yang melindungi dari kekuatan kegelapan.",
"Penunggang Naga Biru": "Pahlawan yang memiliki naga biru sebagai tunggangannya.",
"Naga Perak": "Naga yang tubuhnya terbuat dari perak.",
"Kesatria Biru": "Kesatria dengan kekuatan mengendalikan air.",
"Ratu Biru": "Ratu dengan kekuatan mengendalikan air.",
"Penjaga Biru": "Makhluk yang menjaga kekuatan air.",
"Penyihir Biru": "Penyihir dengan kekuatan mengendalikan air.",
"Raksasa Biru": "Raksasa yang tubuhnya terdiri dari air.",
"Peri Biru": "Peri yang hidup di dekat air terjun.",
"Dewa Biru": "Dewa yang menguasai kekuatan air.",
"Putri Biru": "Putri dengan kekuatan mengendalikan air.",
"Penguasa Biru": "Penguasa yang dapat mengendalikan air.",
"Prajurit Biru": "Prajurit yang melindungi dari kekuatan air.",
"Penunggang Naga Hijau": "Pahlawan yang memiliki naga hijau sebagai tunggangannya.",
"Naga Perunggu": "Naga yang tubuhnya terbuat dari perunggu.",
"Kesatria Hijau": "Kesatria dengan kekuatan mengendalikan tumbuhan.",
"Ratu Hijau": "Ratu dengan kekuatan mengendalikan tumbuhan.",
"Penjaga Hijau": "Makhluk yang menjaga kekuatan tumbuhan.",
"Penyihir Hijau": "Penyihir dengan kekuatan mengendalikan tumbuhan.",
"Raksasa Hijau": "Raksasa yang tubuhnya terdiri dari tumbuhan.",
"Peri Hijau": "Peri yang hidup di hutan belantara.",
"Dewa Hijau": "Dewa yang menguasai kekuatan tumbuhan.",
"Putri Hijau": "Putri dengan kekuatan mengendalikan tumbuhan.",
"Penguasa Hijau": "Penguasa yang dapat mengendalikan tumbuhan.",
"Prajurit Hijau": "Prajurit yang melindungi dari kekuatan tumbuhan.",
"Penunggang Naga Ungu": "Pahlawan yang memiliki naga ungu sebagai tunggangannya.",
"Naga Baja": "Naga yang tubuhnya terbuat dari baja.",
"Kesatria Ungu": "Kesatria dengan kekuatan mengendalikan sihir.",
"Ratu Ungu": "Ratu dengan kekuatan mengendalikan sihir.",
"Penjaga Ungu": "Makhluk yang menjaga kekuatan sihir.",
"Penyihir Ungu": "Penyihir dengan kekuatan mengendalikan sihir.",
"Raksasa Ungu": "Raksasa yang tubuhnya terdiri dari sihir.",
"Peri Ungu": "Peri yang hidup di dalam gua misterius.",
"Dewa Ungu": "Dewa yang menguasai kekuatan sihir.",
"Putri Ungu": "Putri dengan kekuatan mengendalikan sihir.",
"Penguasa Ungu": "Penguasa yang dapat mengendalikan sihir.",
"Prajurit Ungu": "Prajurit yang melindungi dari kekuatan sihir.",
"Penunggang Naga Perak": "Pahlawan yang memiliki naga perak sebagai tunggangannya.",
"Naga Berlian": "Naga yang tubuhnya terbuat dari berlian.",
"Kesatria Perak": "Kesatria dengan kekuatan mengendalikan logam.",
"Ratu Perak": "Ratu dengan kekuatan mengendalikan logam.",
"Penjaga Perak": "Makhluk yang menjaga kekuatan logam.",
"Penyihir Perak": "Penyihir dengan kekuatan mengendalikan logam.",
"Raksasa Perak": "Raksasa yang tubuhnya terdiri dari logam.",
"Peri Perak": "Peri yang hidup di dalam tambang logam.",
"Dewa Perak": "Dewa yang menguasai kekuatan logam.",
"Putri Perak": "Putri dengan kekuatan mengendalikan logam.",
"Penguasa Perak": "Penguasa yang dapat mengendalikan logam.",
"Prajurit Perak": "Prajurit yang melindungi dari kekuatan logam.",
"Penunggang Naga Emas": "Pahlawan yang memiliki naga emas sebagai tunggangannya.",
"Naga Zamrud": "Naga yang tubuhnya terbuat dari zamrud.",
"Kesatria Emas": "Kesatria dengan kekuatan mengendalikan cahaya.",
"Ratu Emas": "Ratu dengan kekuatan mengendalikan cahaya.",
"Penjaga Emas": "Makhluk yang menjaga kekuatan cahaya.",
"Penyihir Emas": "Penyihir dengan kekuatan mengendalikan cahaya.",
"Raksasa Emas": "Raksasa yang tubuhnya terdiri dari cahaya.",
"Peri Emas": "Peri yang hidup di dalam gua berlian.",
"Dewa Emas": "Dewa yang menguasai kekuatan cahaya.",
"Putri Emas": "Putri dengan kekuatan mengendalikan cahaya.",
"Penguasa Emas": "Penguasa yang dapat mengendalikan cahaya.",
"Prajurit Emas": "Prajurit yang melindungi dari kekuatan cahaya.",
"Penunggang Naga Zamrud": "Pahlawan yang memiliki naga zamrud sebagai tunggangannya."
            };
            
            let keys = Object.keys(khodam);
            let hasilKhodam = keys[Math.floor(Math.random() * keys.length)];

            
            khodamHasil.textContent = "Khodam "+ inputkhodam.value +" : " + hasilKhodam;
            desc.textContent = khodam[hasilKhodam];
            khodamHasil.style.display = 'flex';
            desc.style.display = 'flex';
            btnBack.style.display = 'flex';
            
        }, 2000); 
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Input tidak boleh kosong!',
            toast: true,
            position: 'center',
            showConfirmButton: false,
            timer: 2000
        });
        return false;
    }
    
}

function back(){
    window.location.reload();
}