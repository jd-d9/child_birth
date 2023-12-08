<template>
    <div class="bg-image-container two">
        <div class="container-fluid pt-5">
            <div class="row side-spacing mx-auto">
                <div class="col-xl-6">
                    <h4 class="text-default">על מנת לדייק את התורמים המתאימים עבורך,</h4>
                    <h4 class="text-default">נשמח שתעני על השאלות הבאות:</h4>
                    <h2 class="text-default text-size-default mt-4 mb-2">CMV</h2>
                    <div class="d-flex align-items-center">
                        <label class="capsual-button">
                            <input type="checkbox"/>
                            <div class="checked-bg">כן</div>
                        </label>
                        <label class="capsual-button me-5">
                            <input type="checkbox"/>
                            <div class="checked-bg">לא</div>
                        </label>
                    </div>
                    <h2 class="text-default text-size-default mt-4 mb-2">תרומת ביצית</h2>
                    <div class="d-flex align-items-center">
                        <label class="capsual-button">
                            <input type="checkbox"/>
                            <div class="checked-bg">כן</div>
                        </label>
                        <label class="capsual-button me-5">
                            <input type="checkbox"/>
                            <div class="checked-bg">לא</div>
                        </label>
                    </div>
                    <h2 class="text-default text-size-default mt-4 mb-2">נשאות גנטית</h2>
                    <div class="d-flex align-items-center">
                        <label class="capsual-button">
                            <input type="checkbox"/>
                            <div class="checked-bg">כן</div>
                        </label>
                        <label class="capsual-button me-5">
                            <input type="checkbox"/>
                            <div class="checked-bg">לא</div>
                        </label>
                    </div>
                </div>
                <div class="col-xl-6 d-none d-xl-block"></div>
            </div>
            <div class="footer-content">
                <div class="row">
                    <div class="col-sm-6 text-right">
                        <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                    </div>
                    <div class="col-sm-6">
                        <button class="btn-default btn-outlined text-default border-white" style="float: left" @click.prevent="redirectToPage('/three')">המשך ></button>
                    </div>
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
        redirectToPage(route) {
            this.$router.push(route);
        }
    },
}
</script>
