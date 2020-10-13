<template>
	<div>
		<Maintenance v-for="maintenance of maintenances" :key="maintenance.id" :maintenance="maintenance"/>
        <button type="button" class="btn btn-primary m-3" data-toggle="modal" data-target="#maintenanceModal">Créer une maintenance</button>
        <newMaintenance @create-maintenance="createMaintenance" />
	</div>
</template>

<script> 
import { ref } from "vue";
import Maintenance from "./Maintenance"
import newMaintenance from "./newMaintenance"

export default {
    components: {
        Maintenance,
        newMaintenance
    },
	setup() {
        let id = 2;
        const status = ["Déclaré", "En cours", "Terminé"]
		const maintenances = ref([{
            id: 1,
            name: "Maintenance1",
            type: "Vérification",
            status: "Déclaré"
        }]);

		function createMaintenance(new_maintenance) { 
			maintenances.value.push({
                id: id,
                name: new_maintenance.name,
                type: new_maintenance.type,
                status: status[0]
            })
            id++;
		}

		/**  */
		return { maintenances, createMaintenance };
	}
};
</script>