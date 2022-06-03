<template>
<div class="container">
  <div class="progress">
    <div :class="{active:width>=0}">1</div>
    <div :class="{active:width>=10}">2</div>
    <div :class="{active:width>=20}">3</div>
    <div :class="{active:width>=30}">4</div>
  </div>
  <div class="buttons">
    <button class="prev" @click="prevProgress" :disabled="width===0">Prev</button>
    <button class="next" @click="nextProgress" :disabled="width===30">Next</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Day2",
  data(){
    return{
      width:10,
    }
  },
  methods:{
    nextProgress(){
      if(this.width>=30){

      }
      this.width += 10;
    },
    prevProgress(){
      this.width -= 10;
    }
  }
}
</script>

<style scoped>

.container{
  height: 50vh;
  width: 50vw;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 20px 20px 10px rgba(0,0,0, 0.05);

}
.progress{
  display: flex;
  width: 30vw;
  justify-content: space-between;
  position: relative;
  align-items: center;

}
.progress>div{
  background-color: white;
  border-radius: 50%;
  border:1px solid #e0e0e0;
  height: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.progress::before{
  content:'';
  display: block;
  background-color: #3498db;
  height: 2px;
  width:v-bind(width+'vw');
  position:absolute;
  top: +50%;
  left: 0;
  transition:1s ease;

}

button{
  border:none;
  padding:4px 11px;
  margin:20px 8px;
  font-size: 14px;
  cursor: pointer;
  color:teal ;

}

.progress>div.active{
  transition: 0.2s ease 0.5s;
  border-color: #3498db;
}
</style>
