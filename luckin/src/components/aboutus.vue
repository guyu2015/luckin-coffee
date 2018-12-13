<template>
    <div>
        <div class="banner_wrapper">
            <div class="banner"></div>
        </div>
        <div class="banner_content">
            <div class="content_wrapper">
                <ul>
                    <li></li>
                </ul>


            </div>
            <div class="menu_wrapper">
                <ul class="menu_list">
                    <li v-for="(item,index) in menuList" v-key="item"><div class="menuPic"></div>{{item.menu}}</li>
                </ul>
            </div>

        </div>



    </div>
</template>

<script>
    import "../assets/css/aboutus.css"
    export default {
        name: "aboutus",
        data(){
            return{
                menuList:[
                    {menu:"商业模式",src1:"../assets/images/model.png",src2:""},
                    {menu:"品牌主张",src1:"../assets/images/brand.png",src2:""},
                    {menu:"联系我们",src1:"../assets/images/contact.png",src2:""},
                    {menu:"重要声明",src1:"../assets/images/statement.png",src2:""},
                    {menu:"加入我们",src1:"../assets/images/joinus.png",src2:""},

                ]
            }
        }





    }
</script>

<style scoped>

</style>