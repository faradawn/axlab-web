<template>
  <div class='main'>
    <h1 style="text-align: center; margin: 20px; font-size: 20pt">Selected Research</h1>
    <div class="gallery">

      <div class='glass'></div>
      <div class='glass'></div>
      <div class='glass'></div>    
    </div>


    

  </div>
</template>
<script>

export default {
  name: 'Home',
}

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.main{
  background-image: url("https://source.unsplash.com/h7vKkZNNThE/1500x1200");
  height: 100vh;
  width: 100%;
  padding: 10px 10px;

}

.gallery{
  width: 100%;
  display: flex;
}

.glass{
  height: 300px;
  width: 300px;
  margin: 10px;
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  background: radial-gradient(at 50% 0%, rgba(0,0,0,0), rgba(255,255,255,0.4));
  box-shadow: 10px 10px 30px rgba(0,0,0,0.5);
  transition: all 0.3s ease-in-out;
}

.glass:hover{
  transform: scale(1.05);
}


</style>