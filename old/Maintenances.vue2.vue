<!-- 
WARNING THIS FILE IS JUST A DEMO TO PRESENT HOW THE CODE ON Maintenance.vue WOULD BE IF WE DO IT ON VUE 2 INSTEAD OF 3
-->

<template>
	<div>
		<Maintenance v-for="maintenance of maintenances" :key="maintenance.id" :maintenance="maintenance"/>
        <button type="button" class="btn btn-primary m-3" data-toggle="modal" data-target="#maintenanceModal">Créer une maintenance</button>
        <newMaintenance @create-maintenance="createMaintenance" />
	</div>
</template>

<script>
import Maintenance from "./Maintenance"
import newMaintenance from "./newMaintenance"

export default {
    components: {
        Maintenance,
        newMaintenance
    },
    data() {
        return {
            id: 1,
            maintenances: [],
            status: ["Déclaré", "En cours", "Terminé"]
        }
    },
    methods: {
        createMaintenance(new_maintenance) {
            this.maintenances.push({
                id: this.id,
                name: new_maintenance.name,
                type: new_maintenance.type,
                status: this.status[0]
            })
            this.id++;
        }
    }
};
</script>