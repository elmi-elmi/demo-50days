<template>
  <div class="container" @click="expandImage">
    <div id="img--1" class="panel" :class="{active:activeId==='img--1'}" style="background-image:url(./src/assets/img/1.jpg)">
      <h3>MY first</h3>
    </div>
    <div id="img--2" class="panel" :class="{active:activeId==='img--2'}"  style="background-image:url(./src/assets/img/2.jpg)">
      <h3>MY second</h3>
    </div>
    <div id="img--3" class="panel" :class="{active:activeId==='img--3'}"  style="background-image:url(./src/assets/img/3.jpg)">
      <h3>MY third</h3>
    </div>
    <div id="img--4" class="panel" :class="{active:activeId==='img--4'}"  style="background-image:url(./src/assets/img/4.jpg)">
      <h3>MY forth</h3>
    </div>
    <div id="img--5" class="panel" :class="{active:activeId==='img--5'}"  style="background-image:url(./src/assets/img/5.jpg)">
      <h3>MY fifth</h3>
    </div>
    <div id="img--6" class="panel" :class="{active:activeId==='img--6'}"  style="background-image:url(./src/assets/img/6.jpg)">
      <h3>MY sixth</h3>
    </div>

  </div>
</template>

<script>
export default {
  name: "Day1",
  data(){
    return{
      activeId:"img--1"
    }
  },
  methods:{
    expandImage(e){
      this.activeId = e.target.id

    }
  }
}
</script>

<style scoped>

.container{
  display: flex;
  width: 80vw;
  height: 70vh;
  margin: 2rem auto;


}

.panel{

  flex:0.5;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px;
  transition:all 1s ease-in;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.active{
  flex:5;
  transition: all 0.5s ease-out;
  background-size: cover;

}
.panel.active h3{
  opacity: 1;
  transition:opacity 0.6s;
  color: black;

}

h3{
  font-size: 16px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  color: #888;
  opacity: 0;
}

@media (max-width: 300px) {
  .panel{
    flex:0.3;
    border-radius: 0;
  }
  .active{
    flex: 5;
  }
  .container{
    width: 100%;
  }

}
</style>
