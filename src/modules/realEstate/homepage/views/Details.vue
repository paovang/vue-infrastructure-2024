<template>
    <div class="gallery">
        <div class="main-image">
            <img src="https://scontent.fvte3-1.fna.fbcdn.net/v/t39.30808-6/455809994_2204847796534657_1480641157613948163_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGtHaDVY7qeCbIOnHLdPHyvSJp9NP9WeXNImn00_1Z5c4wSJWrmUjNNFzaCAiXwxRjp7NXSu2RQfFLc3oY_kLE6&_nc_ohc=peXlqaEvzAgQ7kNvgHYsEyy&_nc_zt=23&_nc_ht=scontent.fvte3-1.fna&_nc_gid=A4_L42J3wplg-38Hjhs89q5&oh=00_AYAyWrzbubu0lkqsPvvClQMutrRxroqrX9lA7-wqmTQHKw&oe=6738FB14" alt="Main Image" />
        </div>
        <div class="thumbnail-grid">
            <div class="thumbnail">
                <img src="https://scontent.fvte1-2.fna.fbcdn.net/v/t39.30808-6/465211563_2274577036228399_2761860956921575736_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFmdo5OGbj3587-XolYC2dgzDHrR50dtIPMMetHnR20gxNQo135ICBkhQ9ZOcF1cMn6QRIsSji72uKI3Oi1ovn9&_nc_ohc=pYzP8pvcbAAQ7kNvgFvat4D&_nc_zt=23&_nc_ht=scontent.fvte1-2.fna&_nc_gid=AKrWzskLCz4foJ-sxpj8wbX&oh=00_AYBCjEbcLhL518OgKrUTo12uPWi3tm9DYm3kxzxpws7GPw&oe=6738F116" alt="Thumbnail 1" />
            </div>
            <div class="thumbnail">
                <img src="https://scontent.fvte1-1.fna.fbcdn.net/v/t39.30808-6/464806891_2271667576519345_506349576125287203_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHIuxcjwEpuCt8CnvzdscRgTwRrllUa0wRPBGuWVRrTBKIkSDibXxVtshHeO5GKP8xHIN9xQ5PoGEVABFfRYNI8&_nc_ohc=_JpVcdgiehAQ7kNvgHbW9st&_nc_zt=23&_nc_ht=scontent.fvte1-1.fna&_nc_gid=AKBj1FMoC6pb9p-Pkjxutfo&oh=00_AYCXUh2YbwE8SQsgMfPNjX0gko94pidIIRkyAcU8gg7A0w&oe=6738D88D" alt="Thumbnail 2" />
            </div>
            <div class="thumbnail">
                <img src="https://scontent.fvte3-1.fna.fbcdn.net/v/t39.30808-6/463976944_2265320697154033_6876722303404814606_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrSS_dUXk8ORFn7YFBcfdhdqr9tJxQAS92qv20nFABL69LrLy84oH6Z0D9sV0zFzfqd5a7TCwAW_JTXNC8VoIc&_nc_ohc=acta3OJeIHoQ7kNvgHDKoTZ&_nc_zt=23&_nc_ht=scontent.fvte3-1.fna&_nc_gid=AcsZYjWzT7uRzTMhVZMVioO&oh=00_AYCAx0ONNpkezh5QRmNdg2C8GoYP847xY_hlT2bz89Aq4A&oe=6738F117" alt="Thumbnail 3" />
            </div>
            <div class="thumbnail more">
                <img src="https://scontent.fvte3-1.fna.fbcdn.net/v/t39.30808-6/462363377_2253005685052201_3833313628106090926_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE0mBuN0FJbrK9ekrb8cFSlANB_gUdrnN4A0H-BR2uc3gjp0NxFka3MnSuwh7P6FDyHmAHhySK_moZY8n7Y6kdP&_nc_ohc=I-tvTbC7oK4Q7kNvgG_1L4n&_nc_zt=23&_nc_ht=scontent.fvte3-1.fna&_nc_gid=A6t1BrpwmDD63kWiF-wsJxr&oh=00_AYCYcfuWtZL-3uJm_wZbLi_e06qNJR6_6Qh8WIJQ7fW7jg&oe=6738D381" alt="Thumbnail 4" />
                <span class="more-count">+7</span>
            </div>
        </div>
    </div>  
</template>
<style lang="scss" scoped>
    @media screen and (max-width: 768px) {
        .gallery {
            flex-direction: column;
        }
        
        .main-image {
            max-width: 100%;
            max-height: 40vh;
            img {
                max-width: 100%;
                max-height: 40vh;
            }
        }
        
        .thumbnail-grid {
            grid-template-columns: repeat(2, 1fr);
            max-height: 30vh;
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1366px) {
        .gallery {
            flex-direction: column; /* เปลี่ยนการจัดเรียงจากแนวตั้งเป็นแนวนอน */
        }
    }

    .gallery {
        display: flex;
        gap: 8px;
        cursor: pointer;
    }

    .main-image {
        width: 100%;
        height: 60vh;
        overflow: hidden;
        border-radius: 5px;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3); 
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 5px;
        }
        &:hover::after {
            opacity: 1;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease; // ทำให้การขยายรูปภาพนุ่มนวล
        }
        &:hover img {
            transform: scale(1.1); // ขยายรูปภาพเมื่อ hover ใน .main-image
        }
    }

    .thumbnail-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 8px;
        width: 100%;
        height: 60vh;
    }

    .thumbnail {
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3); 
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 5px;
        }

        &:hover::after {
            opacity: 1;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
            border-radius: 5px;
        }
        &:hover img {
            transform: scale(1.1);
        }
    }

    .more {
        position: relative;
        border-radius: 5px;
    }

    .more-count {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.5);
    }

</style>