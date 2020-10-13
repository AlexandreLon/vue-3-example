<template>
	<div>
		<div>
            <h5>{{maintenance.name}}</h5>
            <div>{{maintenance.type}}</div>
            <span v-if="maintenance.status == 'Déclaré'" class="badge badge-danger">Déclaré</span>
            <span v-else-if="maintenance.status == 'En cours'" class="badge badge-warning">En cours</span>
            <span v-else-if="maintenance.status == 'Terminé'" class="badge badge-success">Terminé</span>
            <span v-else class="badge badge-secondary">Undefined</span>
        </div>
	</div>
</template>

<script>

export default {
    props: {
        maintenance: Object
    }
};
</script>