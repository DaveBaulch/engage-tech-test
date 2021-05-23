<template>
  <div>
    <h1>This is the enquiry page</h1>
    <BaseButton route="enquire" :id="itemId" type="router-link" text="Back" />
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton';

export default {
  name: 'Enquire'
};
</script>
