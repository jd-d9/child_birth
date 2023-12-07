<template>
    <div class="bg-image-container two">
        <div class="container-fluid pt-5">
            <div class="row side-spacing">
                <div class="col-5 px-0">
                    <h4 class="text-right text-default">על מנת לדייק את התורמים המתאימים עבורך, נשמח</h4>
                    <h4 class="text-right text-default">שתעני על השאלות הבאות:</h4>
                    <h2 class="text-right text-default text-size-default mt-4 mb-2">CMV</h2>
                    <div class="d-flex align-items-center">
                        <button class="capsual-button text-default">כן</button>
                        <button class="capsual-button text-default me-5">לא</button>
                    </div>
                    <h2 class="text-right text-default text-size-default mt-4 mb-2">תרומת ביצית</h2>
                    <div class="d-flex align-items-center">
                        <button class="capsual-button text-default">כן</button>
                        <button class="capsual-button text-default me-5">לא</button>
                    </div>
                    <h2 class="text-right text-default text-size-default mt-4 mb-2">נשאות גנטית</h2>
                    <div class="d-flex align-items-center">
                        <button class="capsual-button text-default">כן</button>
                        <button class="capsual-button text-default me-5">לא</button>
                    </div>
                </div>
                <div class="col-7 px-0"></div>
            </div>
            <div class="row footer-content">
                <div class="col-6 text-right">
                    <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                </div>
                <div class="col-6">
                    <button class="btn-default btn-outlined text-default border-white" style="float: left" @click.prevent="redirectToPage">המשך ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        redirectToPage() {
            this.$router.push('/three');
        }
    },
}
</script>
