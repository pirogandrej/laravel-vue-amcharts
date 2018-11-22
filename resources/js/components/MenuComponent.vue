<template>
    <div>
        <ul>
            <li>
                <router-link to="/line"> {{ titleLine }} </router-link>
            </li>
            <li>
                <router-link to="/map"> {{ titleMap }} </router-link>
            </li>
            <li>
                <router-link to="/cube"> {{ titleCube }} </router-link>
            </li>
            <li>
                <router-link to="/pie"> {{ titlePie }} </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                titleLine:'Graph - Line',
                titleMap:'Graph - Map',
                titleCube:'Graph - Cube',
                titlePie:'Graph - Pie'
            }
        }
    }
</script>
