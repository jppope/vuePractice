<template>
  <keyword>
  <div class="row">
  	<div class="column medium-10 medium-offset-1">
      <input name="keyword" v-model="keyword">
	   {{ keyword }}
	</div?
  </div>
  </keyword>
</template>

<script>
export default {
  data () {
    return {
      keyword: ''
    }
  }
}
</script>
