<template>
    <div>

        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <router-link :to="{name: 'home'}" class="navbar-brand">
                    Laravel
                </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" v-show="!getUser">
                            <router-link class="nav-link" :to="{name:'login'}">
                                Login
                            </router-link>
                        </li>

                        <li class="nav-item dropdown" v-if="getUser">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ this.getUser.name }} <span class="caret"></span>
                            </a>

<!--                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">-->
<!--                                <a class="dropdown-item" href="{{ route('logout') }}"-->
<!--                                   onclick="event.preventDefault();-->
<!--                                                                             document.getElementById('logout-form').submit();">-->
<!--                                    {{ __('Logout') }}-->
<!--                                </a>-->

<!--                                <form id="logout-form" action="{{ route('logout') }}" method="POST"-->
<!--                                      style="display: none;">-->
<!--                                    @csrf-->
<!--                                </form>-->
<!--                            </div>-->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters(['getUser'])
    }
  }
</script>

<style scoped>

</style>