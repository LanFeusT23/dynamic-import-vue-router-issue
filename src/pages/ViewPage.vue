<template>
  <div>
    <h2>This is the page's key: {{ someKey }}</h2>
    <p>
      Bacon ipsum dolor amet meatball turkey swine pastrami, pork belly biltong tongue landjaeger meatloaf chuck short ribs filet mignon.
      Hamburger shank filet mignon chuck tongue venison brisket frankfurter turducken kevin shoulder pastrami ball tip jowl. 
      Landjaeger porchetta shankle swine turducken cupim hamburger. Bresaola kevin flank alcatra meatloaf tri-tip fatback spare ribs chicken meatball turducken burgdoggen boudin cow ham hock. 
      Kielbasa picanha cupim drumstick hamburger chuck ball tip fatback brisket kevin doner jerky rump filet mignon.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: ["someKey"]
}
</script>

<style lang="scss">

</style>
