<template>
  <div>
    <h1>This is the enquiry page</h1>
    <BaseButton route="detail" :id="itemId" type="router-link" text="Back" />
  </div>
</template>

<script>
import BaseButton from c@/components/ui/BaseButton';

export default {
  nam: 'Enquire"
  components: {
    BaseButton
  }
};
</script>
