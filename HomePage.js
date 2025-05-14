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

    // Add click event to Discover button
    const discoverBtn = document.querySelector('.discover-btn');
    if (discoverBtn) {
        discoverBtn.addEventListener('click', () => {
            window.location.href = 'Movies.html'; 
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


const topPicks = [
        { title: "Laialy El 7elmia", category: "drama", image: "Assets/laialy El 7elmia.png", video: "Assets/laialy El 7elmia.mp4" ,quote: "One of the iconic Egyptian TV shows" },
    { title: "Ragel W 6 staat", category: "comedy", image: "Assets/Ragel W 6 staat.jpeg", video: "Assets/ragel_w_6_staat.mp4" , quote: "A mix between the Comedy & Family genres. Talks about a man (Adel) and his family that consists of 6 women" },
    { title: "El Bakheel W Ana", category: "comedy", image: "Assets/el bakheel w ana.jpeg", video: "Assets/el bakheel w ana.mp4" ,quote:"Classic Egyptian Movies that holds memories in most of the Egyptian houses" },
    { title: "Wanees Diaries", category: "drama", image: "Assets/Wanees Diaries.jpeg" , video: "Assets/yawmyat_wanees.mp4" , quote: " One of a kind show for the Famous Egyptian Actor Mohammed Sobhy"}  ,
    { title: "Abdelghafour", category: "drama", image: "Assets/abdelghafour.jpg" , video: "Assets/lan_a3esh_fy_gelbab_aby.mp4" , quote: "Egyptian Drama original vibes for the iconic actor Nour el Sherif"} ,
    { title: "Bakeeza & Zaghloul", category: "comedy", image: "Assets/Bakeeza&zaghloul.jpeg" , video: "Assets/bakeeza_zaghloul.mp4" ,quote: "Bakiza is the spoiled daughter of a former Pasha, she has been married off as a teenager to a rich old man named Mohamed Ashmawy. " },
    { title: "3ssam W El Mwsba7", category: "animation", image: "Assets/3ssam w el mwsba7.jpeg" , video: "Assets/essam_mesbah.mp4" , quote: "One of the 80's Egyptian Kids favourite"},
    { title: "Bogy & Tamtam", category: "animation", image: "Assets/bogy.jpeg" , video: "Assets/bogy_tamtam.mp4" , quote: "Famous Egyptian Dolls Actors that made the famous lovely show Bogy&Tamtam"},
    { title: "Bassant & Diasty", category: "animation", image: "Assets/bassant & daiasty.jpeg", video: "Assets/bassant_diasty.mp4" , quote: " "},
    { title: "Bakaar", category: "animation", image: "Assets/bakaar.jpeg", video: "Assets/bakar.mp4" , quote : "Kids's Ramadan Favourite"},
    { title: "3alm Sism Simsim", category: "animation", image: "Assets/3alm smsm.jpeg", video: "Assets/3alam_semsem.mp4", quote:"" },
    { title: "Super Henedy", category: "action", image: "Assets/super.jpg", video: "Assets/super_henedy.mp4" , quote:"Henedy one of the legends of the Egyptian Acting Field. Didn't forget his child fanbase so he made Super Henedy to favor children fanbase needs"},
    { title: "Korombo", category: "animation", image: "Assets/korombo.jpeg" , video: "Assets/korombo.mp4" , quote: " Detective Korombo"},
    { title: "El Ragol El 3nab", category: "comedy", image: "Assets/3nab.jpeg" , video: "Assets/el_ragol_el_3enab.mp4", quote: "The trio Ahmed Fahmy , Hesham Maged , Chiko returns with one of the wildest Egyptian tv shows El Ragol El 3enab"},
    { title: "Al Noom Fi Asal", category: "drama", image: "Assets/el nom fel asal.jpg", video: "Assets/el_nom_fel_3asal.mp4" , quote:""},
    { title: "Elly Baly Balak", category: "comedy", image: "Assets/eli baly balak.jpg" , video: "Assets/ely_baly_balak.mp4", quote:"After the massive success of the previous movies , Mohammed Saad the famous Egyptian actor decides to continue his legacy playing the character of El Lemby"},
    { title: "3sal Eswed", category: "comedy", image: "Assets/Asal eswed.jpg" , video: "Assets/3sal_eswd.mp4" , quote:"Ahmed Helmy on of the legends. After the series of the successful comedy movies he decides to take this role in the movie that talks about how the people in Egypt favor the Foreign Tourists over the Egyptian Citizens "},
];

const topRated = [
     { title: "Welad Rizk", category: "Genre:Action,Comedy", image: "Assets/welad rezk.jpg", video: "Assets/welad_rizk_1.mp4", quote: "انتوا فاكرين اني راقد على 2 مليون ولا فاكرين ان انا هاخدكوا من ايديكو و ننزل نعملنا كام مصلحح" },
   { title: "Welad Rizk 2", category: "Genre:Action,Comedy", image: "Assets/welad rezk 2.jpg",video: "Assets/welad_rizk_2.mp4", quote: "احنا ولاد رزق ... نلفك في سجارة من غير تبه"},
    { title: "El Basha Telmeez", category: "Genre:Comedy", image: "Assets/el basha telmeez.jpg",video: "Assets/el_basha_telmeez.mp4", quote: "حازم حازم .. بسيوني بسيوني" },
    { title: "Nems Bond", category: "Genre:Comedy", image: "Assets/nems bond.jpg",video: "Assets/nems_bond.mp4", quote: "الرائد شريف النمس" },
    { title: "Teer Enta", category: "Genre:Comedy", image: "Assets/teer enta.jpg", video: "Assets/teer_enta.mp4", quote: "بهيييج ... طير انت" },
    { title: "Samir W Shahir W Bahir", category: "Genre:Comedy", image: "Assets/samir w shahir w bahir.jpg", video: "Assets/samir_w_shahir_w_bahir.mp4", quote: "المرة الجاية يبقى فيها بيبسي يا سمير!" },
    { title: "La tarago3 wala estslam", category: "Genre:Action,Comedy", image: "Assets/La tarago3 wala estslam.jpg",video: "Assets/la_tarago3_wla_esteslam.mp4", quote: "و اسمه حزمبول؟ و انت اسمك ايه؟ جيرمين .. اسم صايص ولا انت محصله جيهان ولا محصله نرمين"},
    { title: "El Nazer", category: "Genre:Comedy", image: "Assets/el nazer.jpg", video: "Assets/el_nazer.mp4", quote: "و طرابيظات بلياردو و بينج"},
    { title: "X Large", category: "Genre:Comedy", image: "Assets/x large.jpg", video: "Assets/x_large.mp4", quote: "والله م هسيبك .. اموت معاك"},
    { title: "Zaky Chan", category: "Genre:Comedy", image: "Assets/zaky chan.jpg",video: "Assets/zaki_chan.mp4",  quote: "تفف و قال له؟ ايه الكلمة الغريبة دي"},
    { title: "Fool el Sen el 3azeem", category: "Genre:Comedy", image: "Assets/Fool el Sen el 3azeem.jpg",video: "Assets/fol_el_sen_el_3azem.mp4",  quote: "افتكر اني قولتلك بلاااش" },
    { title: "Teta Raheeba", category: "Genre:Family,Comedy", image: "Assets/Teta Raheeba.jpg", video: "Assets/teta_raheeba.mp4", quote: "انت لسة مركبتش سنترلوك؟ وحت للواجل و قالي خطو على الموتوو"},
    { title: "Yana ya 5alty", category: "Genre:Comedy", image: "Assets/yana ya 5alty.jpg",video: "Assets/yana_ya_khalty.mp4",  quote: "كلها بتاكل بروتينات و عارفة بعضها" },
    { title: "Omar W Salma", category: "Genre:Comedy,Family", image: "Assets/omar w salma.jpg", video: "Assets/omar_salma_1.mp4", quote: "اتت ترا بت تت ترا بت تت ادي"},
    { title: "Omar W Salma 2", category: "Genre:Comedy,Family", image: "Assets/omar w salma 2.jpg", video: "Assets/omar_salma_2.mp4", quote: "ماااشي .. مااشي يا سلمى يا بنت نوفل"},
    { title: "Wa2fet Regala", category: "Genre:Comedy", image: "Assets/wa2fet regala.jpg", video: "Assets/wa2fet_regala.mp4", quote: "يا شوهدييي"},
    { title: "El Badla", category: "Genre:Action,Comedy", image: "Assets/el badla.jpg", video: "Assets/el_badla.mp4", quote: "انا في الحالات الزي دي بحب اسمع ساموزين جدا"},
    { title: "Amir el behar", category: "Genre:Comedy", image: "Assets/Amir el behar.jpg",video: "Assets/amir_elbehar.mp4",  quote: "انت بتعمل ايه عندك يا حيوان؟ .. باكل بليلة"},
    { title: "Morgan Ahmed Morgan", category: "Genre:Comedy", image: "Assets/morgan ahmed ahmed.jpg",video: "Assets/morgan_ahmed_morgan.mp4",  quote: "ايتها الجماهير العريقة .. ايتها الجماهير العريقة .. لماذا جئتم ايتها الجماهير العريقة" },
    { title: "El Tagreba el Denemarkeya", category: "Genre:Comedy", image: "Assets/tagreba el denemarkeya.jpg",video: "Assets/el_tagroba_el_denemarkeya.mp4",  quote: "انيتا هنري جوتنبيرج"},
    { title: "3arees Mn Geha Amneya", category: "Genre:Comedy", image: "Assets/3arees mn geha amneya.jpg",video: "Assets/3ares_mn_geha_amneya.mp4",  quote: "انا بشتري حاجة تعيش العمر كله"},
    { title: "Harameya fy kg2", category: "Genre:Comedy", image: "Assets/harameya fy kg2.jpeg", video: "Assets/harameya_f_kg2.mp4", quote: "باباك مسبليش حاجة خالص"},
    { title: "Abood 3al Hodood", category: "Genre:Comedy", image: "Assets/Abood 3al Hodood.jpg", video: "Assets/abood_3al_hodod.mp4", quote: "هو كله ضرب ضرب مفيش شتيمة" },
    { title: "3askar fel Mo3askar", category: "Genre:Comedy", image: "Assets/3askar fel Mo3askar.jpg", video: "Assets/3askar_fel_mo3askar.mp4", quote: "و النعمة م انا دي اختي منى" },
    { title: "Hassan we Morkos", category: "Genre:Drama,Comedy", image: "Assets/Hassan we Morkos.jpg",video: "Assets/hassan_morcos.mp4",  quote: "ازيك يا شيخ حسن"},
    { title: "Katkoot", category: "Genre:Comedy", image: "Assets/katkoot.jpg", video: "Assets/katkoot.mp4", quote: "انا عايز بلاك تابول مع سودا مع كابتات حديدوز زائد ثاني اكسيد الكرتون زائد خل"},
    { title: "El Dada el Dody", category: "Genre:Family,Comedy", image: "Assets/El Dada el Dody.jpg",video: "Assets/el_dada_el_dody.mp4",  quote: "م كفاية بقا يا لوجي" },
    { title: "Samir Abo el Nil", category: "Genre:Comedy", image: "Assets/Samir Abo el Nil.jpg", video: "Assets/samir_abo_el_nile.mp4", quote: "الفرختين دول انا عاينهم لرمضان الجي" },
    { title: "8aby mno Feeh", category: "Genre:Comedy", image: "Assets/8aby mno Feeh.jpg",video: "Assets/ghaby_mno_feeh.mp4",  quote: "يا سلطاااااااااان" },
    { title: "Abo el Araby", category: "Genre:Comedy", image: "Assets/Abo el Araby.jpg",video: "Assets/abo_elaraby.mp4",  quote: "خد اشرااااب .. بضاعة ببلاش و صاحبها راجل مغفل .. اشرب كتير؟ خد راحتك" }
];

// Enhanced modal setup with review functionality
function setupMovieModal() {
    const modal = document.getElementById('movieModal');
    const overlay = document.getElementById('movieModalOverlay');
    const closeBtn = document.getElementById('closeModal');
    
    // Store reviews in memory (in a real app, this would be server-side)
    const movieReviews = {};
    
    function openModal(movie) {
        // Clear any existing video
        const existingVideo = document.querySelector('.movie-modal-video-container');
        if (existingVideo) existingVideo.remove();

        // Create new video container
        const videoContainer = document.createElement('div');
        videoContainer.className = 'movie-modal-video-container';
        
        // Create video element
        const video = document.createElement('video');
        video.className = 'movie-modal-video';
        video.src = movie.video || "Assets/videos/default_trailer.mp4";
        video.controls = true;
        video.autoplay = true;
        video.muted = false;
        
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                video.muted = true;
                video.play();
            });
        }
        
        videoContainer.appendChild(video);
        
        // Insert video before other content
        const content = document.querySelector('.movie-modal-content');
        content.insertBefore(videoContainer, content.firstChild);
        
        // Set movie details
        document.getElementById('modalMovieTitle').textContent = movie.title;
        document.getElementById('modalMovieGenre').textContent = movie.category || "Not specified";
        document.getElementById('modalMovieQuote').textContent = movie.quote || "No famous quote available";
        
        // Setup reviews section
        const reviewsHTML = `
            <div class="reviews-section">
                <h3 class="reviews-title">Leave Your Review</h3>
                <textarea id="reviewText" class="review-textarea" placeholder="Share your thoughts about this movie..."></textarea>
                <div class="review-controls">
                    <select id="reviewRating" class="rating-select">
                        <option value="5">★★★★★</option>
                        <option value="4">★★★★☆</option>
                        <option value="3">★★★☆☆</option>
                        <option value="2">★★☆☆☆</option>
                        <option value="1">★☆☆☆☆</option>
                    </select>
                    <button id="submitReview" class="submit-review-btn">Submit Review</button>
                </div>
                <div id="reviewFeedback" class="review-feedback"></div>
                <div id="previousReviews" class="previous-reviews">
                    <h4>Recent Reviews</h4>
                    ${getReviewsForMovie(movie.title)}
                </div>
            </div>
        `;
        
        // Add reviews section to modal details
        const detailsContainer = document.querySelector('.movie-modal-details');
        const existingReviewsSection = detailsContainer.querySelector('.reviews-section');
        if (existingReviewsSection) {
            existingReviewsSection.innerHTML = reviewsHTML;
        } else {
            const reviewsSection = document.createElement('div');
            reviewsSection.className = 'reviews-section';
            reviewsSection.innerHTML = reviewsHTML;
            detailsContainer.appendChild(reviewsSection);
        }
        
        // Add submit review functionality
        document.getElementById('submitReview').addEventListener('click', () => {
            const reviewText = document.getElementById('reviewText').value.trim();
            const rating = document.getElementById('reviewRating').value;
            const feedbackElement = document.getElementById('reviewFeedback');
            
            if (!reviewText) {
                feedbackElement.textContent = 'Please write a review before submitting.';
                feedbackElement.style.color = '#ff6b6b';
                return;
            }
            
            // Save review (in memory)
            if (!movieReviews[movie.title]) {
                movieReviews[movie.title] = [];
            }
            
            movieReviews[movie.title].push({
                text: reviewText,
                rating: parseInt(rating),
                date: new Date().toLocaleDateString()
            });
            
            // Update UI
            document.getElementById('previousReviews').innerHTML = `
                <h4>Recent Reviews</h4>
                ${getReviewsForMovie(movie.title)}
            `;
            
            // Show success message
            feedbackElement.textContent = 'Thank you for your review!';
            feedbackElement.style.color = '#6c63ff';
            
            // Clear the textarea
            document.getElementById('reviewText').value = '';
            
            // Hide feedback after 3 seconds
            setTimeout(() => {
                feedbackElement.textContent = '';
            }, 3000);
        });
        
        // Show modal
        modal.classList.add('active');
        overlay.classList.add('active');
    }
    
    function getReviewsForMovie(movieTitle) {
        if (!movieReviews[movieTitle] || movieReviews[movieTitle].length === 0) {
            return '<p class="no-reviews">No reviews yet. Be the first to review!</p>';
        }
        
        return movieReviews[movieTitle].map(review => `
            <div class="review-item">
                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <p class="review-text">${review.text}</p>
                <div class="review-date">${review.date}</div>
            </div>
        `).join('');
    }
    
    function closeModal() {
        const video = document.querySelector('.movie-modal-video');
        if (video) video.pause();
        
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
    
    return openModal;
}

// Render movie carousels (unchanged)
function renderCarousel(movies, containerId) {
    const container = document.getElementById(containerId);
    const openModal = setupMovieModal();
    
    container.innerHTML = "";
    movies.forEach(movie => {
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
        container.appendChild(card);
    });
}

// Setup carousel scroll buttons (unchanged)
function setupScroll(btnLeftId, btnRightId, carouselId) {
    const leftBtn = document.getElementById(btnLeftId);
    const rightBtn = document.getElementById(btnRightId);
    const container = document.getElementById(carouselId);
  
    leftBtn.addEventListener("click", () => {
        container.scrollBy({ left: -400, behavior: "smooth" });
    });
  
    rightBtn.addEventListener("click", () => {
        container.scrollBy({ left: 400, behavior: "smooth" });
    });
}

// Initialize everything (unchanged)
renderCarousel(topPicks, "topCarousel");
renderCarousel(topRated, "classicCarousel");
setupScroll("topScrollLeft", "topScrollRight", "topCarousel");
setupScroll("classicScrollLeft", "classicScrollRight", "classicCarousel");