import moment from 'moment'
let uni = {
  // years	y
  // quarters	Q
  // months	M
  // weeks	w
  // days	d
  // hours	h
  // minutes	m
  // seconds	s
  // milliseconds	ms
  timestamp(time) {
    return moment(time).unix() * 1000
  },

  timeFormat(time, format) {
    return moment(time).format(format)
  },

  getMinuteTime() {
    return moment(moment().format("YYYY-MM-DD HH")).add(Math.floor(moment().format("m") / 10) * 10, 'minutes').unix() * 1000
  },

  timeAdd(date, type, time) {
    return moment(date).add(time, type).unix() * 1000
  },

  timeSubtract(date, type, time) {
    return moment(date).subtract(time, type).unix() * 1000
  },
  
  compare(property) {
    return (a, b) => {
      let v1 = a[property];
      var v2 = b[property];
      return v1 - v2;
    }
  }
}

export default {
  uni
};