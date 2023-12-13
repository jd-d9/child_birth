<template>
    <div class="bg-image-container five">
        <div class="container-fluid">
            <div class="row side-spacing mx-auto pt-4">
                <div class="col-xl-2 d-none d-xl-block"></div>
                <div class="col-xl-8 text-center">
                    <h2 class="text-center text-default text-size-default mb-2">תורמים פוטנציאליים</h2>
                    <div class="width-50 mx-auto">
                        <h5 class="text-default">נא לחצי על התורם הרצוי כדי להציג פרטים נוספים ולבחור בו כתורם הרצוי</h5>
                    </div>
                    <div class="row visible-options pb-4">
                        <div class="col-md-4 col-sm-6 mx-auto">
                            <div class="position-relative" @click.prevent="openFirstOption">
                                <button :class="{'btn-default p-2 text-default border-transparent pb-3 half-border': true, 'rotate-up': firstOption}">צבע</button>
                                <img src="../../../public/images/svg/chevron-down.svg" class="search-icon" alt="img" width="100%" height="auto">
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mx-auto">
                            <div class="position-relative" @click.prevent="openSecondOption">
                                <button :class="{'btn-default p-2 text-default border-transparent pb-3 half-border': true, 'rotate-up': secondOption}">עיניים</button>
                                <img src="../../../public/images/svg/chevron-down.svg" class="search-icon" alt="img" width="100%" height="auto">
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 mx-auto">
                            <div class="position-relative" @click.prevent="openThirdOption">
                                <button :class="{'btn-default p-2 text-default border-transparent pb-3 half-border': true, 'rotate-up': thirdOption}">צבע עיניים</button>
                                <img src="../../../public/images/svg/chevron-down.svg" class="search-icon" alt="img" width="100%" height="auto">
                            </div>
                        </div>
                        <div class="col-12" v-if="firstOption">
                            <input type="range" class="form-range" min="0" max="5" step="0.2" id="customRange3">
                            <div class="d-flex justify-content-between align-items-center">
                                <label for="customRange3" class="form-label text-default fw-bold">2.06</label>
                                <label for="customRange3" class="form-label text-default fw-bold">1.60</label>
                            </div>
                            <div class="d-flex justify-content-around align-items-center flex-wrap gap-2">
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">חום - ירוק</div>
                                </label>
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">כחול</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-12" v-if="secondOption">
                            <div class="d-flex justify-content-around align-items-center flex-wrap gap-2">
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">חום - ירוק</div>
                                </label>
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">חום</div>
                                </label>
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">ירוק</div>
                                </label>
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">חום - ירוק</div>
                                </label>
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">כחול</div>
                                </label>
                            </div>
                        </div>
                        <div class="col-12" v-if="thirdOption">
                            <div class="d-flex justify-content-around align-items-center flex-wrap gap-2">
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">חום - ירוק</div>
                                </label>
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">חום</div>
                                </label>
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">ירוק</div>
                                </label>
                                <label class="capsual-button">
                                    <input type="checkbox"/>
                                    <div class="checked-bg">כחול</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 d-none d-xl-block"></div>
            </div>
            <div class="row side-spacing mx-auto pt-0 pb-sm-5 vertical-scroller">
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list" @click.prevent="redirectToPage('/six')">
                        <span class="tag">עורך דין</span>
                        <img src="../../../public/images/avatar-1.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.85</span>
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
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">מהנדס</span>
                        <img src="../../../public/images/donor-2.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
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
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">רואה חשבון</span>
                        <img src="../../../public/images/donor-1.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.78</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/eye.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>חום</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/hair.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>חום</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">מהנדס</span>
                        <img src="../../../public/images/donor-4.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.83</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/eye.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>כחול</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/hair.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>שחור</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">עורך דין</span>
                        <img src="../../../public/images/donor-3.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.85</span>
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
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">מהנדס</span>
                        <img src="../../../public/images/donor-2.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
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
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">רואה חשבון</span>
                        <img src="../../../public/images/donor-1.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.78</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/eye.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>חום</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/hair.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>חום</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">מהנדס</span>
                        <img src="../../../public/images/avatar.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.83</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/eye.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>כחול</span>
                            </div>
                            <div class="add-border-right h-100">
                                <img src="../../../public/images/svg/hair.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>שחור</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">עורך דין</span>
                        <img src="../../../public/images/avatar-1.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
                        <div class="donor-details d-flex justify-content-center align-items-center bg-white">
                            <div class="h-100">
                                <img src="../../../public/images/svg/height.svg" class="ms-2" alt="img" width="25" height="auto">
                                <span>1.85</span>
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
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <span class="tag">מהנדס</span>
                        <img src="../../../public/images/donor-2.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
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
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <img src="../../../public/images/donor-3.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
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
                <div class="col-xl-3 col-lg-4 col-sm-6">
                    <div class="donor-list">
                        <img src="../../../public/images/donor-4.png" alt="img" width="100%" height="auto">
                        <label class="heart-icon">
                            <input type="checkbox"/>
                            <div class="default">
                                <img src="../../../public/images/svg/heart.svg" alt="img" width="100%" height="auto">
                            </div>
                            <div class="hovered">
                                <img src="../../../public/images/svg/heart-white.svg" alt="img" width="100%" height="auto">
                            </div>
                        </label>
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
            </div>
            <div class="footer-content">
                <div class="row">
                    <div class="col-sm-6 text-right">
                        <img src="../../../public/images/ihilov.png" alt="img" width="100%" height="auto">
                    </div>
                    <div class="col-sm-6">
                        <div class="position-absolute" @click.prevent="redirectToPage('/seven')">
                            <img src="../../../public/images/svg/heart-circle.svg" class="ms-3" alt="img" width="25" height="auto">
                            <span>מהנדס</span>
                        </div>
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
            firstOption: false,
            secondOption: false,
            thirdOption: false,
        }
    },
    methods: {
        redirectToPage(route) {
            this.$router.push(route);
        },
        openFirstOption() {
            this.firstOption = true;
            this.secondOption = false;
            this.thirdOption = false;
        },
        openSecondOption() {
            this.firstOption = false;
            this.secondOption = true;
            this.thirdOption = false;
        },
        openThirdOption() {
            this.firstOption = false;
            this.secondOption = false;
            this.thirdOption = true;
        }
    },
}
</script>
