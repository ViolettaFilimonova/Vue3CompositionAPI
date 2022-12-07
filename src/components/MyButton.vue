<template>
    <button>{{text}}</button>
</template>
<script>
export default{
    setup() {
        
    },
    props:{
        text:{
            type: String,
            default: 'No button text'
        }
    }
}
</script>
