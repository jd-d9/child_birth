<template>
    <div class="bg-image-container five">
        <div class="container-fluid pt-2">
            <div class="row side-spacing">
                <div class="col-4 px-0"></div>
                <div class="col-4 px-0 text-center">
                    <h2 class="text-center text-default text-size-default mb-2">מועדפים</h2>
                    <div class="w-75 mx-auto">
                        <h5 class="text-default">נא לחצי על התורם הרצוי כדי להציג פרטים נוספים ולבחור בו כתורם הרצוי</h5>
                    </div>
                    <h5 class="text-center text-default mt-4 mb-2"></h5>
                </div>
                <div class="col-4 px-0"></div>
            </div>
            <div class="row side-spacing pb-5">
                <div class="col-3 me-auto">
                    <div class="donor-list">
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
                <div class="col-3">
                    <div class="donor-list">
                        <span class="tag">עורך דין</span>
                        <img src="../../../public/images/donor-2.png" alt="img" width="100%" height="auto">
                        <img src="../../../public/images/svg/heart-fill.svg" class="heart-icon fill" alt="img" width="25" height="auto">
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.79</span>
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
                <div class="col-3 ms-auto">
                    <div class="donor-list">
                        <span class="tag">הייטק</span>
                        <img src="../../../public/images/donor-3.png" alt="img" width="100%" height="auto">
                        <img src="../../../public/images/svg/heart-fill.svg" class="heart-icon fill" alt="img" width="25" height="auto">
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.80</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/eye.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>כחול</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/hair.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>ג׳ינג׳י</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer-content">
                <div class="col-6 text-right">
                    <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                </div>
                <div class="col-6">
                    <button class="btn-default btn-outlined text-default" style="float: left"> חזרה ></button>
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
