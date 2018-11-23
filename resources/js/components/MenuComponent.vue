<template>
    <div>
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <li v-for="(item, index) in dataGraph">
                <router-link :to="{ name:item.path, params:{ title:item.title } }" class="nav-link" active-class="active"> {{ item.title }} </router-link>
            </li>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                dataGraph:
                [
                    {
                        title:'Graph - Line',
                        path:'line'
                    },
                    {
                        title:'Graph - Map',
                        path:'map'
                    },
                    {
                        title:'Graph - Cube',
                        path:'cube'
                    },
                    {
                        title:'Graph - Pie',
                        path:'pie'
                    }
                ]
            }
        }
    }
</script>
