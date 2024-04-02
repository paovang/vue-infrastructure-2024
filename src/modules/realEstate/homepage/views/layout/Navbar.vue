<template>
    <div class="home-layout-view">
      <nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" @click="goToHome">UK LAO</a>
          <div class="input-search">
              <input-text
                v-model="filterEverything"
                  :placeholder="$t('placeholder.textSearch')" 
                  style="font-family: NotoSansLao, Montserrat;"
                  class="w-full"
                  name="search"
                  @keyup.enter="onSearch"
                  @input="onClearSearch"
              />
            </div>
          <div class="navbar-burger" @click="toggleNavbar" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a @click="goToProfile()" class="navbar-item brackets" v-if="isCheckLogin">
              <i class="pi pi-user"></i> 
              <span style="margin-left: 5px;"></span>
              {{ $t('messages.my_account') }}
            </a>
            <a class="navbar-item brackets" @click="goToSignUp()" :class="{ 'is-active-tab': isCurrentRoute('sign.up') }">
              <i class="pi pi-pencil"></i> 
              <span style="margin-left: 5px;"></span>
              {{ $t('messages.sign_up') }}
            </a>
            <a class="navbar-item brackets" @click="goToSignIn()" :class="{ 'is-active-tab': isCurrentRoute('login') }" v-if="!isCheckLogin">
              <i class="pi pi-users"></i> 
              <span style="margin-left: 5px;"></span>
              {{ $t('messages.sign_in') }}
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <i class="pi pi-globe"></i>
                <span style="margin-right: 5px;"></span>
                {{ selectedLocale }}
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" v-for="(item, index) in locales" :key="index" @click="setLocale(item.code)">
                  {{ item.name }}
                </a>
              </div>
            </div>
            <!-- <a href="http://society6.com/monicagabriel" target="_blank" class="navbar-item brackets">Loja</a> -->
          </div>
        </div>
      </nav>

      <transition name="open">
        <div class="mobile-navbar" v-if="isNavbarActive">
          <div class="mobile-navbar-bg" @click="toggleNavbar"></div>
          <div class="mobile-navbar-container">
            <div class="mobile-navbar-header">
              <span v-if="!isCheckLogin">You haven't login yet</span>
              <a v-else>My Profile</a>
              <div
                class="user"
                :style="{ 'background-image': 'url(' + getProfile + ')' }"
              ></div>
            </div>
            <ul class="mobile-navbar-list">
              <li>
                <Dropdown 
                  v-model="selectDropdownLocale" 
                  :options="locales" 
                  optionLabel="name" 
                  class="w-full md:w-14rem" 
                  style="border: none; background: #3736362f"
                  optionValue="code"
                  :highlightOnSelect="true" 
                  @change="setLocale(selectDropdownLocale)"
                />
              </li>
              <Divider style="margin-top: 15px;" />
              <li style="margin-top: 15px;">
                <a class="navbar-item">
                  {{ $t('messages.home') }}
                </a>
              </li>
              <li>
                <a class="navbar-item">{{ $t('messages.real_estate') }}</a
                >
              </li>
              <li>
                <a class="navbar-item">{{ $t('messages.about') }}</a>
              </li>
              <li>
                <a class="navbar-item">{{ $t('messages.sign_up') }}</a>
              </li>
              <li>
                <a class="navbar-item">{{ $t('messages.sign_in') }}</a>
              </li>
            </ul>
          </div>
        </div>
      </transition>

    </div>
</template>


<script setup lang="ts">
  import { GET_ROLES } from '@/common/utils/const';
  import { computed, onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import InputText from 'primevue/inputtext';
  import { homerealEstateStore } from '../../stores/home.store';
  import Divider from 'primevue/divider';
  import Dropdown from 'primevue/dropdown';


  const { getAll, setStateFilter } = homerealEstateStore();

    const router = useRouter();
    const route = useRoute();

    const getProfile = 'https://lab-108-bucket.s3.ap-southeast-1.amazonaws.com/assistant-logo/profile-logo.jpeg';

    const goToSignUp = async () => {
      router.push({ name: 'sign.up'});
      isNavbarActive.value = false;
    }

    const goToSignIn = async () => {
      router.push({ name: 'login'});
      isNavbarActive.value = false;
    }

    const goToProfile = async () => { 
      const getRoles = localStorage.getItem('roles');

      if (getRoles) {
        // Parse roles from localStorage
        const parsedRoles = JSON.parse(getRoles);

        // Check if the user has any of the specified roles
        if (parsedRoles.includes(GET_ROLES.SUPER_ADMIN) || parsedRoles.includes(GET_ROLES.ADMIN) || parsedRoles.includes(GET_ROLES.USER)) {
          // If the user has any of the specified roles, push to the admin profile route
          router.push({ name: 'customer' });
        } else {
          router.push({ name: 'owner.house' });
        }
      }

      // router.push({ name: 'sign.up'});
      isNavbarActive.value = false;
    }
    
    const goToHome = async () => {
      await router.push({ name: 'home'});
      window.location.reload();
    }

    const isNavbarActive = ref(false);

    const toggleNavbar = async () => {
      isNavbarActive.value = !isNavbarActive.value;
    }

    const isCheckLogin = ref();
    const selectedLocale = ref();
    const selectDropdownLocale = ref();
    const locales = ref([
      { name: 'English', code: 'en' },
      { name: 'ລາວ', code: 'la' },
      { name: 'ไทย', code: 'th' },
      { name: 'Tiếng Việt', code: 'vi' },
      { name: '中国人', code: 'lk' },
    ]);

    const setLocale = async (locale: string) => {
      await localStorage.setItem('locale', locale);
      window.location.reload();
    }

    const getLocales = async (locale: string) => {
      switch (locale) {
        case 'en':
          return 'English';
        case 'la':
          return 'ລາວ';
        case 'th':
          return 'ไทย';
        case 'vi':
          return 'Tiếng Việt';
        case 'lk':
          return '中国人';
        default:
          return 'English';
      }
    }

    onMounted(async () => {
      const locale = localStorage.getItem('locale') || 'en';
      const getLocale = await getLocales(locale);
      selectedLocale.value = getLocale;
      selectDropdownLocale.value = locale;
      isCheckLogin.value = localStorage.getItem('token') || "";
    })

    const filterEverything = computed<string>({
        get: () => setStateFilter.filter!.search || '',
        set: (value) => {
            if (setStateFilter.filter) {
                setStateFilter.filter.search = value;
            }
        }
    })

    async function onClearSearch(e: any) {
      const fieldName = e.target.name;

      if (e.target.value === '') {
        if (fieldName === 'search') {
          if (setStateFilter.filter?.search !== undefined) {
              setStateFilter.filter.search = ''
          }
        }
        await getAll();
      }
    }

    const onSearch = async () => {
      await getAll();
    }

    const isCurrentRoute = (routeName: string) => {
        return route.name === routeName;
    }
</script>

<style scoped lang="scss">
  @import 'bulma/css/bulma.css';

    .navbar {
      padding: 0px 80px 0px 80px;
    }

    @media only screen and (max-width: 767px) {
      .input-search {
        width: 250px !important;
        margin-left: 0px !important;
      }
      .navbar {
        padding: 0;
      }
    }

    .input-search {
      margin-top: 5px;
      width: 500px;
      margin-left: 50px;
    }

    .home-layout-view {
      padding: 0px 0px 0px 10px;
    }

    .is-active-tab {
        background: #1a191967;
    }

    /** Response Navbar */
    .mobile-navbar {
      .mobile-navbar-bg {
        background-color: rgba(#000, 0.3);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9;
      }

      .mobile-navbar-container {
        background-color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        right: 3.20rem;
        height: 100%;
        z-index: 999;
        .mobile-navbar-header {
          padding: 10px 20px;
          border-bottom: 1px solid #3736362f;
          display: flex;
          align-items: center;
          .user {
            cursor: pointer;
            margin-left: auto;
            width: 50px;
            height: 50px;
            background-size: cover;
            background-position: center;
            overflow: hidden;
            border-radius: 50%;
            border: 1px solid var(--border-color);
          }
        }
      }

      .mobile-navbar-list {
        padding: 20px;
        li {
          cursor: pointer;
          a {
            padding: 6px 0;
            height: auto;
            text-align: left;
            font-size: 18px;
          }
        }
      }
    }
</style>
