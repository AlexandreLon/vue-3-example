<template>
	<div class="modal" tabindex="-1" id="maintenanceModal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Créer une maintenance</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="name">Maintenance</label>
                        <input v-model="maintenance.name" type="text" class="form-control" id="name" aria-describedby="nameHelp">
                        <small id="nameHelp" class="form-text text-muted">Nom de la maintenance</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Type</label>
                        <select v-model="maintenance.types" class="form-control" id="exampleFormControlSelect1">
                            <option v-for="type of types" :key="type">{{type}}</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="create">Créer</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup(props, { emit }) {
        const types = ref(["Vérification", "Nettoyage", "Remplacement", "Rachat"])
        const maintenance = ref({
            name: "",
            type: "Vérification",
        })

        function create() {
            emit('create-maintenance', maintenance.value)
            maintenance.value.name = ""
        }

        return {types, maintenance, create}
    }
};
</script>