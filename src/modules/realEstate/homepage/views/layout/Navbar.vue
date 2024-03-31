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
        <div class="navbar-menu" :class="{ 'is-active': isNavbarActive }">
          <div class="navbar-end">
            <a @click="goToProfile()" class="navbar-item brackets" v-if="isCheckLogin">
              <i class="pi pi-user"></i> 
              <span style="margin-left: 5px;"></span>
              {{ $t('messages.my_account') }}
            </a>
            <a class="navbar-item brackets" @click="goToSignUp()">
              <i class="pi pi-pencil"></i> 
              <span style="margin-left: 5px;"></span>
              {{ $t('messages.sign_up') }}
            </a>
            <a class="navbar-item brackets" @click="goToSignIn()" v-if="!isCheckLogin">
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
    </div>
</template>


<script setup lang="ts">
  import { GET_ROLES } from '@/common/utils/const';
  import { computed, onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import InputText from 'primevue/inputtext';
  import { homerealEstateStore } from '../../stores/home.store';

  const { getAll, setStateFilter } = homerealEstateStore();

    const router = useRouter();

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
      const locale = localStorage.getItem('locale') || 'English';
      const getLocale = await getLocales(locale);
      selectedLocale.value = getLocale;
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
</script>

<style scoped>
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
</style>
