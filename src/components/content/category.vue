<template>
  <div>这里的分类的内容</div>
</template>

<script>
export default {
    name:'category',
    created(){
      const x =new Array
      x.id = 1
      console.log(x);
      var person = {
             firstName:"John",
             lastName:"Doe",
             age:50,
             eyeColor:"blue"
         };
         for (let key in person){
           console.log(person[key]);
         }
         var car = {id:"Fiat", model:500, color:"white"};
         person.id = car.id
        //  console.log(person.firstName);
        //  console.log(person.id);
        //  console.log(person);
        //  console.log(person['id']);
    }
}
</script>

<style>
    
</style>