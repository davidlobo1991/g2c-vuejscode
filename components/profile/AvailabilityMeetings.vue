<template>
  <div class="emeetings-avail">
    <div class="emeetings-avail--top-cont">
      <div class="emeetings-avail--title">eMeetings Availability</div>
    </div>
    <div class="emeetings-avail--cont">
      <div class="emeetings-avail__elem">
        <div class="emeetings-avail__elem--date">
          <span class="emeetings-avail--bold">8</span> APR, TH
        </div>
        <div class="emeetings-avail__elem--hours-cont">
          <ul class="emeetings-avail__elem--hours-list">
            <li class="emeetings-avail__elem--hours-elem">9:00 - 11:30</li>
            <li class="emeetings-avail__elem--hours-elem">20:00 - 22:30</li>
          </ul>
        </div>
      </div>
      <div class="emeetings-avail__elem">
        <div class="emeetings-avail__elem--date">
          <span class="emeetings-avail--bold">8</span> APR, TH
        </div>
        <div class="emeetings-avail__elem--hours-cont">
          <ul class="emeetings-avail__elem--hours-list">
            <li class="emeetings-avail__elem--hours-elem">9:00 - 11:30</li>
            <li class="emeetings-avail__elem--hours-elem">20:00 - 22:30</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailabilityMeetings',
  data: () => ({}),
  methods: {}
}
</script>

<style lang="scss" scoped>
.emeetings-avail {
  position: relative;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  &--top-cont {
    width: 100%;
    padding: 20px;
    border-bottom: solid 1px #000;
  }
  &--title {
    color: #21273b;
    font-size: 19px;
    font-weight: 500;
  }
  &--bold {
    font-weight: bold;
  }
  &--cont {
  }
  &__elem {
    padding: 20px;
    border-bottom: solid 1px #000;
    display: grid;
    grid-template-columns: 2fr 5fr;
    &:last-of-type {
      border: none;
    }
    &--hours-cont {
    }
    &--hours-list {
      list-style: none; /* Remove default bullets */
      padding: 0;
    }
    &--hours-elem {
      display: flex;
      align-items: center;
    }
    &--hours-list .emeetings-avail__elem--hours-elem::before {
      content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
      color: red; /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      /*width: auto;*/
      /*margin-left: 0;*/
      width: 150px; /* Also needed for space (tweak if needed) */
      margin-left: -150px; /* Also needed for space (tweak if needed) */
      font-size: 39px;
      line-height: 0;
    }
  }
}
</style>
