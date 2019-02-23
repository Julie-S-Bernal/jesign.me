
import MobileDetect from 'mobile-detect';

const mobileDetect = new MobileDetect(window.navigator.userAgent);

export function isMobile() {
  return mobileDetect.mobile();
}

export function isIphone() {
  return mobileDetect.is('iPhone');
}
export default {};
