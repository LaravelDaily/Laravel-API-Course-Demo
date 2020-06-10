<template>
    <div>
        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

            <div class="col-md-6">
                <input id="email" type="email" class="form-control" name="email"
                       required autocomplete="email" autofocus v-model="details.email">
            </div>
        </div>

        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

            <div class="col-md-6">
                <input id="password" type="password" class="form-control"
                       name="password" required autocomplete="current-password" v-model="details.password">
            </div>
        </div>

        <div class="form-group row">
            <div class="col-md-6 offset-md-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember">

                    <label class="form-check-label" for="remember">
                        Remember Me
                    </label>
                </div>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
                <button type="submit" class="btn btn-primary" @click="login">
                    Login
                </button>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'Login',
    data: function () {
      return {
        details: {
          email: null,
          password: null
        }
      }
    },
    methods: {
      ...mapActions(['getCSRF', 'setUserData']),
      login: function () {
        this.getCSRF().then(() => {
          axios.post('/api/login', {
            email: this.details.email,
            password: this.details.password
          }).then(() => {
            axios.get('/api/user').then((resp) => {
              this.setUserData(resp.data)
              this.$router.push({'name': 'home'})
            })
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>