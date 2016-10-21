/**
 * PHP's long2ip in JavaScript
 * @param  {number} long - A proper address representation in long integer. For example 200253850
 * @return {string} ip   - The Internet IP address as a string. For example 11.239.161.154
 */
module.exports = function long2ip(long) {
  const MAX_IP_IN_LONG = 4294967295; // 255.255.255.255
  const MIN_IP_IN_LONG = 0; // 0.0.0.0

  if (typeof long !== 'number' || long > MAX_IP_IN_LONG || long < MIN_IP_IN_LONG) {
    return false;
  }

  const ip = [long >>> 24, long >>> 16 & 0xFF, long >>> 8 & 0xFF, long & 0xFF].join('.');

  return ip;
};
