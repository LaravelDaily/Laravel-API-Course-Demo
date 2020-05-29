<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <br />
                Name:
                <input type="text" v-model="name" name="name" class="form-control" />
                <br />
                <input type="button" class="btn btn-primary"
                       value="Add Category" @click="createCategory()" />
                <br /><br />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                name: ''
            }
        },
        methods: {
            createCategory: function(){
                console.log('Creating category...');
                axios.post('/api/categories', {
                        // name: this.name
                    })
                    .then(function(response) {
                        console.log('New Category ID: ' + response.data.data.id);
                    })
                    .catch(function(error) {
                        console.log(error.response.data.errors);
                    });
            },
        }
    }
</script>
