<template>
<div class="col-md-6">
    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Daftar Agenda</h3>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hari</th>
                            <th>Agenda</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- MELAKUKAN LOOPING DARI COMPUTED PROPERTY agenda() -->
                        <tr v-for="(row, index) in agenda" :key="index">
                            <td>{{ index+1 }}</td>
                            <td>{{ row.hari }}</td>
                            <td>{{ row.kegiatan }}</td>
                            <td>
                                <button class="btn btn-danger btn-sm" @click.prevent="hapus(index)">Hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'AgendaShow',
    computed: {
        //MEMBUAT COMPUTED agenda()
        agenda() {
            //YANG BERISI DATA DARI state listAgenda
            return this.$store.state.listAgenda
        }
    },
    methods: {
        hapus(value) {
            this.$store.commit('hapus',value)
        }
    }
}
</script>
