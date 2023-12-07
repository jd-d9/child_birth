<template>
    <div class="bg-image-container eight">
        <div class="container-fluid">
            <div class="row side-spacing align-items-end">
                <div class="col-4 px-0">
                    <button class="btn-default btn-outlined text-default" @click.prevent="redirectToPage('/nine')">לאיפוס ע״י האחות</button>
                </div>
                <div class="col-4 px-0 text-center">
                    <h2 class="text-center text-default text-size-default mb-2">מזל טוב על בחירתך!</h2>
                    <h2 class="text-center text-default text-size-default mb-2 fw-bolder">נא גשי למזכירות לסיום התהליך</h2>
                    <h2 class="text-center text-default text-small">ישראלה ישראלי | 036449466</h2>
                    <h5 class="text-default">CMV  - לא  תרומת ביצית - לא  נשאות גנטית - כן  (H2ttp3)</h5>
                    <div class="choosen-doner bg-white text-center px-5 py-3 mt-4">
                        <h2 class="text-center text-default text-size-default mb-4">התורם הנבחר</h2>
                        <div class="donor-list w-75 mx-auto">
                            <span class="tag">ספורטאי</span>
                            <img src="../../../public/images/avatar-3.png" alt="img" width="100%" height="auto">
                            <img src="../../../public/images/svg/heart-fill.svg" class="heart-icon fill" alt="img" width="25" height="auto">
                            <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                                <div class="h-100">
                                    <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                    <span>1.82</span>
                                </div>
                                <div class="add-border-right h-100">
                                    <img src="../../../public/images/svg/eye.svg" class="ms-2" alt="img" width="25" height="auto">
                                    <span>כחול</span>
                                </div>
                                <div class="add-border-right h-100">
                                    <img src="../../../public/images/svg/hair.svg" class="ms-2" alt="img" width="25" height="auto">
                                    <span>חום</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 px-0"></div>
            </div>
            <div class="row footer-content">
                <div class="col-6 text-right">
                    <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                </div>
                <div class="col-6">
                    <button class="btn-default btn-outlined text-default" style="float: left" @click.prevent="redirectToPage('/six')">לביטול הבחירה וחזרה ></button>
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
