<template>
    <div id="Categories">
        <h2>Usuario autenticado: <span>{{username}}</span></h2>
        <input type="text" v-model="category_id">
        <button v-on:click="getCategory">Obtener categoría</button>        
        <h2>La categoría con id = <span>{{category_id}}</span>, tiene el nombre <span>{{name}}</span> y su descripción es «<span>{{description}}</span>».</h2>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {

        name: 'Categories',

        data: function (){
            return {
                category_id: "",
                name: "",
                description: ""
            }
        },

        created: function() {

            this.username = this.$route.params.username
            let self = this

        },

        methods: {

            getCategory: function() {

                this.username = this.$route.params.username
                let self = this

                axios.post("http://localhost:5000/graphql", {
                  query : `query categoryById($id: Int!) {
                              categoryById(id: $id) {
                                id
                                name
                              }
                            }`, 
                  variables: {
                    id: self.category_id
                  }
 
			          })
                    .then((result) => {
                      console.log(result);
                      if (result.data.data == null){
                        self.name = "Not Found",
                        self.description = "Not Found"
                      }else {
                        let obj = result.data.data.categoryById;
                        self.category_id = obj.id,
                        self.name = obj.name,
                        self.description = obj.description
                      }
                    })
                    .catch((error) => {
                        alert("ERROR de Servidor");
                    });
            }
        }
    }
</script>

<style>
    #Categories{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #Categories h2{
        font-size: 25 px;
        color: #283747;
    }
    #Categories span{
        color: crimson;
        font-weight: bold;
    }
</style>

