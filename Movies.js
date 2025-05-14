const movies = [
    { title: "Laialy El 7elmia", category: "Drama", image: "Assets/laialy El 7elmia.png", video: "Assets/laialy El 7elmia.mp4" },
    { title: "Ragel W 6 staat", category: "Comedy", image: "Assets/Ragel W 6 staat.jpeg", video: "Assets/ragel_w_6_staat.mp4" },
      { title: "3ssam W El Mwsba7", category: "Genre:Animation", image: "Assets/3ssam w el mwsba7.jpeg" , video: "Assets/essam_mesbah.mp4"},
    { title: "Bogy & Tamtam", category: "Genre:Animation", image: "Assets/bogy.jpeg" , video: "Assets/bogy_tamtam.mp4"},
    { title: "Bassant & Diasty", category: "Genre:Animation", image: "Assets/bassant & daiasty.jpeg", video: "Assets/bassant_diasty.mp4" },
    { title: "Bakaar", category: "Genre:Animation", image: "Assets/bakaar.jpeg", video: "Assets/bakar.mp4" },
    { title: "3alm Sism Simsim", category: "Genre:Animation", image: "Assets/3alm smsm.jpeg", video: "Assets/3alam_semsem.mp4" },
    { title: "Super Henedy", category: "Genre:Animation", image: "Assets/super.jpg", video: "Assets/super_henedy.mp4" },
    { title: "Korombo", category: "Genre:Animation", image: "Assets/korombo.jpeg" , video: "Assets/korombo.mp4"},
    { title: "El Ragol El 3nab", category: "Genre:Comedy", image: "Assets/3nab.jpeg" , video: "Assets/el_ragol_el_3enab.mp4"},
    { title: "Al Noom Fi Asal", category: "Genre:Drama", image: "Assets/el nom fel asal.jpg", video: "Assets/el_nom_fel_3asal.mp4" },
    { title: "Elly Baly Balak", category: "Genre:Comedy", image: "Assets/eli baly balak.jpg" , video: "Assets/ely_baly_balak.mp4"},
    { title: "3sal Eswed", category: "Genre:Comedy", image: "Assets/Asal eswed.jpg" , video: "Assets/3sal_eswd.mp4"},
     { title: "Welad Rizk", category: "Action", image: "Assets/welad rezk.jpg", video: "Assets/welad_rizk_1.mp4", quote: "انتوا فاكرين اني راقد على 2 مليون ولا فاكرين ان انا هاخدكوا من ايديكو و ننزل نعملنا كام مصلحح" },
       { title: "Welad Rizk 2", category: "Action", image: "Assets/welad rezk 2.jpg",video: "Assets/welad_rizk_2.mp4", quote: "احنا ولاد رزق ... نلفك في سجارة من غير تبه"},
    { title: "El Basha Telmeez", category: "Comedy", image: "Assets/el basha telmeez.jpg",video: "Assets/el_basha_telmeez.mp4", quote: "حازم حازم .. بسيوني بسيوني" },
    { title: "Nems Bond", category: "Comedy", image: "Assets/nems bond.jpg",video: "Assets/nems_bond.mp4", quote: "الرائد شريف النمس" },
    { title: "Teer Enta", category: "Comedy", image: "Assets/teer enta.jpg", video: "Assets/teer_enta.mp4", quote: "بهيييج ... طير انت" },
    { title: "Samir W Shahir W Bahir", category: "Comedy", image: "Assets/samir w shahir w bahir.jpg", video: "Assets/samir_w_shahir_w_bahir.mp4", quote: "المرة الجاية يبقى فيها بيبسي يا سمير!" },
    { title: "La tarago3 wala estslam", category: "Comedy", image: "Assets/La tarago3 wala estslam.jpg",video: "Assets/la_tarago3_wla_esteslam.mp4", quote: "و اسمه حزمبول؟ و انت اسمك ايه؟ جيرمين .. اسم صايص ولا انت محصله جيهان ولا محصله نرمين"},
    { title: "El Nazer", category: "Comedy", image: "Assets/el nazer.jpg", video: "Assets/el_nazer.mp4", quote: "و طرابيظات بلياردو و بينج"},
    { title: "X Large", category: "Comedy", image: "Assets/x large.jpg", video: "Assets/x_large.mp4", quote: "والله م هسيبك .. اموت معاك"},
    { title: "Zaky Chan", category: "Comedy", image: "Assets/zaky chan.jpg",video: "Assets/zaki_chan.mp4",  quote: "تفف و قال له؟ ايه الكلمة الغريبة دي"},
    { title: "Fool el Sen el 3azeem", category: "Comedy", image: "Assets/Fool el Sen el 3azeem.jpg",video: "Assets/fol_el_sen_el_3azem.mp4",  quote: "افتكر اني قولتلك بلاااش" },
    { title: "Teta Raheeba", category: "Comedy", image: "Assets/Teta Raheeba.jpg", video: "Assets/teta_raheeba.mp4", quote: "انت لسة مركبتش سنترلوك؟ وحت للواجل و قالي خطو على الموتوو"},
    { title: "Yana ya 5alty", category: "Comedy", image: "Assets/yana ya 5alty.jpg",video: "Assets/yana_ya_khalty.mp4",  quote: "كلها بتاكل بروتينات و عارفة بعضها" },
    { title: "Omar W Salma", category: "Comedy", image: "Assets/omar w salma.jpg", video: "Assets/omar_salma_1.mp4", quote: "اتت ترا بت تت ترا بت تت ادي"},
    { title: "Omar W Salma 2", category: "Comedy", image: "Assets/omar w salma 2.jpg", video: "Assets/omar_salma_2.mp4", quote: "ماااشي .. مااشي يا سلمى يا بنت نوفل"},
    { title: "Wa2fet Regala", category: "Comedy", image: "Assets/wa2fet regala.jpg", video: "Assets/wa2fet_regala.mp4", quote: "يا شوهدييي"},
    { title: "El Badla", category: "Comedy", image: "Assets/el badla.jpg", video: "Assets/el_badla.mp4", quote: "انا في الحالات الزي دي بحب اسمع ساموزين جدا"},
    { title: "Amir el behar", category: "Comedy", image: "Assets/Amir el behar.jpg",video: "Assets/amir_elbehar.mp4",  quote: "انت بتعمل ايه عندك يا حيوان؟ .. باكل بليلة"},
    { title: "Morgan Ahmed Morgan", category: "Comedy", image: "Assets/morgan ahmed ahmed.jpg",video: "Assets/morgan_ahmed_morgan.mp4",  quote: "ايتها الجماهير العريقة .. ايتها الجماهير العريقة .. لماذا جئتم ايتها الجماهير العريقة" },
    { title: "El Tagreba el Denemarkeya", category: "Comedy", image: "Assets/tagreba el denemarkeya.jpg",video: "Assets/el_tagroba_el_denemarkeya.mp4",  quote: "انيتا هنري جوتنبيرج"},
    { title: "3arees Mn Geha Amneya", category: "Comedy", image: "Assets/3arees mn geha amneya.jpg",video: "Assets/3ares_mn_geha_amneya.mp4",  quote: "انا بشتري حاجة تعيش العمر كله"},
    { title: "Harameya fy kg2", category: "Comedy", image: "Assets/harameya fy kg2.jpeg", video: "Assets/harameya_f_kg2.mp4", quote: "باباك مسبليش حاجة خالص"},
    { title: "Abood 3al Hodood", category: "Comedy", image: "Assets/Abood 3al Hodood.jpg", video: "Assets/abood_3al_hodod.mp4", quote: "هو كله ضرب ضرب مفيش شتيمة" },
    { title: "3askar fel Mo3askar", category: "Comedy", image: "Assets/3askar fel Mo3askar.jpg", video: "Assets/3askar_fel_mo3askar.mp4", quote: "و النعمة م انا دي اختي منى" },
    { title: "Hassan we Morkos", category: "Drama", image: "Assets/Hassan we Morkos.jpg",video: "Assets/hassan_morcos.mp4",  quote: "ازيك يا شيخ حسن"},
    { title: "Katkoot", category: "Comedy", image: "Assets/katkoot.jpg", video: "Assets/katkoot.mp4", quote: "انا عايز بلاك تابول مع سودا مع كابتات حديدوز زائد ثاني اكسيد الكرتون زائد خل"},
    { title: "El Dada el Dody", category: "Comedy", image: "Assets/El Dada el Dody.jpg",video: "Assets/el_dada_el_dody.mp4",  quote: "م كفاية بقا يا لوجي" },
    { title: "Samir Abo el Nil", category: "Comedy", image: "Assets/Samir Abo el Nil.jpg", video: "Assets/samir_abo_el_nile.mp4", quote: "الفرختين دول انا عاينهم لرمضان الجي" },
    { title: "8aby mno Feeh", category: "Comedy", image: "Assets/8aby mno Feeh.jpg",video: "Assets/ghaby_mno_feeh.mp4",  quote: "يا سلطاااااااااان" },
    { title: "Abo el Araby", category: "Comedy", image: "Assets/Abo el Araby.jpg",video: "Assets/abo_elaraby.mp4",  quote: "خد اشرااااب .. بضاعة ببلاش و صاحبها راجل مغفل .. اشرب كتير؟ خد راحتك" }
];

const movieQuotes = {
    "Welad Rizk": "انتوا فاكرين اني راقد على 2 مليون ولا فاكرين ان انا هاخدكوا من ايديكو و ننزل نعملنا كام مصلحة",
     "Welad Rizk 2": "احنا ولاد رزق ... نلفك في سجارة من غير تبه",
    "El Basha Telmeez": "حازم حازم .. بسيوني بسيوني",
    "Nems Bond": "الرائد شريف النمس",
    "Teer Enta": "بهيييج ... طير انت",
    "Samir W Shahir W Bahir": "المرة الجاية يبقى فيها بيبسي يا سمير!",
    "La tarago3 wala estslam": "و اسمه حزمبول؟ و انت اسمك ايه؟ جيرمين .. اسم صايص ولا انت محصله جيهان ولا محصله نرمين",
    "El Nazer": "و طرابيظات بلياردو و بينج",
    "X Large": "والله م هسيبك .. اموت معاك",
    "Zaky Chan": "تفف و قال له؟ ايه الكلمة الغريبة دي",
    "Fool el Sen el 3azeem": "افتكر اني قولتلك بلاااش",
    "Teta Raheeba": "انت لسة مركبتش سنترلوك؟ وحت للواجل و قالي خطو على الموتوو",
    "Yana ya 5alty": "كلها بتاكل بروتينات و عارفة بعضها",
    "Omar W Salma": "اتت ترا بت تت ترا بت تت ادي",
    "Omar W Salma 2": "ماااشي .. مااشي يا سلمى يا بنت نوفل",
    "Wa2fet Regala": "يا شوهدييي",
    "El Badla": "انا في الحالات الزي دي بحب اسمع ساموزين جدا",
    "Amir el behar": "انت بتعمل ايه عندك يا حيوان؟ .. باكل بليلة",
    "Morgan Ahmed Morgan": "ايتها الجماهير العريقة .. ايتها الجماهير العريقة .. لماذا جئتم ايتها الجماهير العريقة",
    "El Tagreba el Denemarkeya": "انيتا هنري جوتنبيرج",
    "3arees Mn Geha Amneya": "انا بشتري حاجة تعيش العمر كله",
    "Harameya fy Thailand": "باباك مسبليش حاجة خالص",
    "Abood 3al Hodood": "هو كله ضرب ضرب مفيش شتيمة",
    "3askar fel Mo3askar": "و النعمة م انا دي اختي منى",
    "Hassan we Morkos": "ازيك يا شيخ حسن",
    "El Dada el Dody": "م كفاية بقا يا لوجي",
    "Samir Abo el Nil": "الفرختين دول انا عاينهم لرمضان الجي",
    "8aby mno Feeh": "يا سلطاااااااااان",
    "Abo el Araby": "خد اشرااااب .. بضاعة ببلاش و صاحبها راجل مغفل .. اشرب كتير؟ خد راحتك"
};

const carousel = document.getElementById("movieCarousel");
const searchInput = document.getElementById("movieSearch");
const tabs = document.querySelectorAll(".tab");

function setupMovieModal() {
    const modal = document.getElementById('movieModal');
    const overlay = document.getElementById('movieModalOverlay');
    const closeBtn = document.getElementById('closeModal');
    let currentVideo = null;
    
    function openModal(movie) {
        const videoContainer = document.querySelector('.movie-modal-video-container');
        if (videoContainer) videoContainer.remove();

        const newVideoContainer = document.createElement('div');
        newVideoContainer.className = 'movie-modal-video-container';
        
        const video = document.createElement('video');
        video.className = 'movie-modal-video';
        video.src = movie.video;
        video.controls = true;
        video.autoplay = true;
        
        newVideoContainer.appendChild(video);
        
        const content = document.querySelector('.movie-modal-content');
        content.insertBefore(newVideoContainer, content.firstChild);
        
        document.getElementById('modalMovieTitle').textContent = movie.title;
        document.getElementById('modalMovieGenre').textContent = movie.category;
        document.getElementById('modalMovieQuote').textContent = movieQuotes[movie.title] || "No famous quote available";
        
        currentVideo = video;
        modal.classList.add('active');
        overlay.classList.add('active');
    }
    
    function closeModal() {
        if (currentVideo) {
            currentVideo.pause();
            currentVideo = null;
        }
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    return openModal;
}

function displayMovies(filterCategory = "all", searchTerm = "") {
    const openModal = setupMovieModal();
    
    carousel.innerHTML = "";
    const filtered = movies.filter(movie => {
        const matchesCategory = filterCategory === "all" || 
                              movie.category.toLowerCase().includes(filterCategory.toLowerCase());
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    filtered.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const image = document.createElement("img");
        image.src = movie.image;
        image.alt = movie.title;

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");

        const title = document.createElement("span");
        title.classList.add("movie-title");
        title.textContent = movie.title;

        overlay.appendChild(title);
        imageContainer.appendChild(image);
        imageContainer.appendChild(overlay);
        card.appendChild(imageContainer);
        
        card.addEventListener('click', () => openModal(movie));
        carousel.appendChild(card);
    });
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        displayMovies(tab.dataset.category, searchInput.value);
    });
});

searchInput.addEventListener('input', () => {
    const activeTab = document.querySelector(".tab.active");
    displayMovies(activeTab.dataset.category, searchInput.value);
});

document.getElementById("scrollLeft").addEventListener('click', () => {
    carousel.scrollBy({ left: -400, behavior: "smooth" });
});

document.getElementById("scrollRight").addEventListener('click', () => {
    carousel.scrollBy({ left: 400, behavior: "smooth" });
});

// Create animated stars in the background
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const size = Math.random() * 3 + 2;
        const delay = Math.random() * 3;
        const duration = 2 + Math.random() * 3;
        
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
        
        starsContainer.appendChild(star);
    }
    
    // Initial load
    displayMovies();
});