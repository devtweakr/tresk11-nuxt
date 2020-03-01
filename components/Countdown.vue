<template>
  <ul v-show="seconds + minutes + hours + days > 0" :v-bind:style="{ visibility: (diff > 0) ? 'visible' : 'hidden' }" class="vuejs-countdown">
    <li v-if="days > 0">
      <p class="digit">
        {{ days | twoDigits }}
      </p>
      <p class="text">
        {{ days === 1 ? 'dan' : 'dni' }}
      </p>
    </li>
    <li>
      <p class="digit">
        {{ hours | twoDigits }}
      </p>
      <p class="text">
        {{ hours === 2 ? 'uri' : hours === 1 ? 'ura' : 'ur' }}
      </p>
    </li>
    <li>
      <p class="digit">
        {{ minutes | twoDigits }}
      </p>
      <p class="text">
        {{ minutes = 'min' }}
      </p>
    </li>
    <li>
      <p class="digit">
        {{ seconds | twoDigits }}
      </p>
      <p class="text">
        {{ seconds = 'sek' }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VuejsCountDown',
  filters: {
    twoDigits (value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    }
  },
  props: {
    deadline: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      date: null,
      diff: 0
    }
  },
  computed: {
    seconds () {
      return Math.trunc(this.diff) % 60
    },

    minutes () {
      return Math.trunc(this.diff / 60) % 60
    },

    hours () {
      return Math.trunc(this.diff / 60 / 60) % 24
    },

    days () {
      return Math.trunc(this.diff / 60 / 60 / 24)
    }
  },
  created () {
    if (!this.deadline) {
      throw new Error("Missing prop 'deadline'")
    }
    this.date = Date.parse(this.deadline.replace(/-/g, '/'))
    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline'")
    }

    const that = this
    const updateDiff = function () {
      const zdaj = new Date().getTime()
      that.diff = Math.trunc((that.date - zdaj) / 1000)

      if (that.diff > 0) {
        setTimeout(updateDiff, 1000)
      }
    }

    updateDiff()
  }
}
</script>
<style>
.vuejs-countdown {
  padding: 0;
  margin: 0;
}
.vuejs-countdown li {
  display: inline-block;
  margin: 0 8px;
  text-align: center;
  position: relative;
}
.vuejs-countdown li p {
  margin: 0;
}
.vuejs-countdown li:after {
  content: ":";
  position: absolute;
  top: 0;
  right: -13px;
  font-size: 2em;
}
.vuejs-countdown li:first-of-type {
  margin-left: 0;
}
.vuejs-countdown li:last-of-type {
  margin-right: 0;
}
.vuejs-countdown li:last-of-type:after {
  content: "";
}
.vuejs-countdown .digit {
  font-size: 2em;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 0;
}
.vuejs-countdown .text {
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 0.7em;
}
</style>
