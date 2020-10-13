<template>
	<div>
		<h1>Mes tâches</h1>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h2>Mes maintenances</h2>
                    <Maintenances />
                </div>
                <div class="col-sm">
                    <h2>Mes incidents</h2>
                </div>
            </div>
        </div>
	</div>
</template>

<script> 
// import { ref } from "vue";
import Maintenances from '../components/Maintenances'

export default {
    components: {
        Maintenances
    }
};
</script>

<style computed>
    .col-sm {
        border: 1px black solid;
    }
</style>