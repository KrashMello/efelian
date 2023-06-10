<template>
  <a
    class="twitter-timeline"
    data-width="300"
    data-height="400"
    data-dnt="true"
    href="https://twitter.com/Krashmello?ref_src=twsrc%5Etfw"
    >Tweets by Krashmello</a
  >
</template>
<script>
// https://publish.twitter.com/oembed?url=https://twitter.com/jack/status/20&omit_script=1
export default {
  head: {
    script: [
      {
        hid: 'twitter',
        type: 'text/javascript',
        src: 'https://platform.twitter.com/widgets.js',
        async: true,
        defer: true,
        charset: 'utf-8',
      },
    ],
  },
}
</script>
