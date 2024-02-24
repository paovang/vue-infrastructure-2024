<template>
    <div class="footer">
        <div class="columns is-12">
            <div class="column is-4 is-mobile-12">
                <p class="title">ສີນຄ້າ</p>
            </div>
            <div class="column is-4 is-mobile-12">
                <p class="title">ການຊຳລະເງີນ</p>
            </div>
            <div class="column is-4 is-mobile-12">
                <p class="title">ຕິດຕໍ່ພວກເຮົາ</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @import 'bulma/css/bulma.css';

    .footer {
        margin-top: 100px;
        background: black;
        height: 50vh;
        color: white;
        padding: 0px 80px 0px 80px;
    }
    .title {
        font-size: 20px;
        font-weight: bold;
        color: white;
    }

    @media only screen and (max-width: 767px) {
      .footer {
        padding: 0px 30px 0px 30px;
      }
    }
</style>