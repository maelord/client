<template>
    <div id="result" v-if="pageNumber == 6">
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src="https://img.favpng.com/1/19/15/hank-pym-captain-america-ant-man-clint-barton-darren-cross-png-favpng-tWZxg4Z5SZphcywrGw24udN7b.jpg" alt="">
                </div>
                <div class="col">
                    <img src="https://i.pinimg.com/originals/49/5e/88/495e884ae8cb9309bdee4cdb399a60ed.jpg" alt="">
                </div>
            </div>
            <h3>you're antmant</h3>
            <h4>semut semut kecil</h4>
             <div class="fb-share-button" data-href="https://i.pinimg.com/originals/49/5e/88/495e884ae8cb9309bdee4cdb399a60ed.jpg" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Bagikan</a></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:["pageNumber"],

}
</script>
<style lang="stylus" scoped>
img{
    height: 5rem;
    width : 5rem;
}
</style>