<template>
    <div class="bg-image-container four">
        <div class="container-fluid pt-5">
            <div class="row side-spacing">
                <div class="col-4 px-0"></div>
                <div class="col-4 px-0 text-center">
                    <h2 class="text-center text-default text-size-default mb-4">רשימת נשאויות גנטיות</h2>
                    <div class="w-75 mx-auto position-relative">
                        <input type="text" class="form-input text-default w-100" placeholder="חיפוש חופשי">
                        <img src="../../../public/images/svg/search.svg" class="search-icon" alt="img" width="100%" height="auto">
                    </div>
                    <div class="w-75 mx-auto position-relative mt-4">
                        <input type="text" class="form-input text-default border-transparent w-100" placeholder="חיפוש לפי שם הנשאות">
                        <img src="../../../public/images/svg/half-border.svg" class="half-border-icon" alt="img" width="100%" height="auto">
                        <img src="../../../public/images/svg/left.svg" class="search-icon" alt="img" width="100%" height="auto">
                    </div>
                    <h5 class="text-center text-default mt-4 mb-2"></h5>
                </div>
                <div class="col-4 px-0"></div>
            </div>
            <div class="side-spacing pt-0">
                <div class="text-center">
                    <img src="../../../public/images/babies.png" class="babies-background pb-5" alt="img" width="100%" height="auto">
                </div>
            </div>
            <div class="row footer-content">
                <div class="col-6 text-right">
                    <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                </div>
                <div class="col-6">
                    <button class="btn-default btn-outlined text-default border-white" style="float: left">המשך ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fieldOne: 'שם פרטי ושם משפחה',
            fieldTwo: 'ת.ז',
        }
    }
}
</script>
