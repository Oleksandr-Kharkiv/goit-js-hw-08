function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,u=setTimeout(h,t),l?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function h(){var e=m();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function w(e){return u=void 0,p&&r?y(e):(r=o=void 0,a)}function O(){var e=m(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea");y.addEventListener("input",e(t)(h,500)),y.addEventListener("submit",(function(e){if(""===j.value||""===S.value)return void alert("Enter your Email and Message");e.preventDefault(),console.log(h()),localStorage.removeItem("feedback-form-state"),e.target.reset()}));function h(){const e={email:j.value,message:S.value};return localStorage.setItem("feedback-form-state",JSON.stringify(e)),e}!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(j.value=e.email,S.value=e.message)}();
//# sourceMappingURL=03-feedback.5ca46374.js.map
