<template>
    <div class="bg-image-container ten">
        <div class="container-fluid pt-5">
            <div class="row pt-0 side-spacing align-items-center pt-5">
                <div class="col-4 px-0 mx-auto text-center">
                    <h2 class="text-center text-size-default text-default">רשימת נשאויות גנטיות</h2>
                    <form class="form mt-3">
                        <div class="w-75 mx-auto position-relative">
                            <input type="text" placeholder="חיפוש חופשי" class="form-input text-default d-block w-100 text-end my-4">
                            <img src="../../../public/images/svg/search.svg" class="search-icon" alt="img" width="100%" height="auto">
                        </div>
                        <div class="w-75 mx-auto position-relative">
                            <select class="form-input text-default border-transparent d-block w-100 text-end my-4" required @change="redirectToPage('/four')">
                                <option value="" disabled selected>חיפוש לפי שם הנשאות</option>
                                <option value="">חופשי</option>
                                <option value="">חיפוש</option>
                                <option value="">חופשי</option>
                                <option value="">חיפוש</option>
                                <option value="">חופשי</option>
                                <option value="">חיפוש</option>
                            </select>
                            <img src="../../../public/images/svg/half-border-upper.svg" class="half-border-icon" alt="img" width="100%" height="auto">
                            <img src="../../../public/images/svg/chevron-down-2.svg" class="search-icon" alt="img" width="100%" height="auto">
                        </div>
                    </form>
                </div>
            </div>
            <div class="row pt-0 side-spacing align-items-center">
                <div class="bg-image-blur"></div>
                <div class="col-10 mx-auto options-bg-babies">
                    <div class="w-50 bg-white multiple-options mx-auto" dir="ltr">
                        <div class="d-flex justify-content-between py-3 px-5">
                            <label class="capsual-button" v-for="text in filterTexts" :key="text">
                                <input type="checkbox"/>
                                <div class="checked-bg">{{ text }}</div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer-content">
                <div class="col-6 text-right">
                    <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                </div>
                <div class="col-6">
                    <button class="btn-default btn-outlined border-white text-default" style="float: left" @click.prevent="redirectToPage('/five')"> המשך ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filterTexts: [
                'ATP6V1B1',
                'ACADM',
                'ATP6V1B1',
                'ACADM',
                'ARSA',
                'ACADM',
                'ARSA',
                'ACADVL',
                'CCDC151',
                'SMA',
                'RRTFD',
                'EIF2AK3',
                'COL4A3',
                'COL4A4',
                'SLC16A2',
                'COL4A3',
                'KKYT',
                'HMGCL',
                'KKYT',
                'MSUD',
                'MSUD',
                'MSUD',
                'MSUD',
                'HSD17B4',
                'ACADM',
                'ATP6V1B1',
                'ACADM',
                'MSUD',
                'HSD17B4',
                'ACADM',
                'ATP6V1B1',
                'ACADM',
                'MSUD',
                'ATP6V1B1',
                'ACADM',
                'ATP6V1B1',
                'ACADM',
                'ARSA',
                'ACADM',
                'ARSA',
                'ACADVL',
                'CCDC151',
                'SMA',
                'RRTFD',
                'EIF2AK3',
                'COL4A3',
                'COL4A4',
                'SLC16A2',
                'COL4A3',
                'KKYT',
                'HMGCL',
                'KKYT',
                'MSUD',
                'MSUD',
                'MSUD',
                'MSUD',
                'HSD17B4',
                'ACADM',
                'ATP6V1B1',
                'ACADM',
                'MSUD',
                'HSD17B4',
                'ACADM',
                'ATP6V1B1',
                'ACADM',
            ]
        }
    },
    methods: {
        redirectToPage(route) {
            this.$router.push(route);
        }
    },
}
</script>
