var R = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, f = (e, r) => {
  for (var a in r || (r = {}))
    p.call(r, a) && o(e, a, r[a]);
  if (c)
    for (var a of c(r))
      l.call(r, a) && o(e, a, r[a]);
  return e;
};
var i = (e, r) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && c)
    for (var t of c(e))
      r.indexOf(t) < 0 && l.call(e, t) && (a[t] = e[t]);
  return a;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const g = d((t, a) => {
  var m = t, { children: e } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: a }, r), e, /* @__PURE__ */ s.createElement("path", { d: "M222.16,153.26a8,8,0,0,1-1,11.25c-17.36,14.38-32.86,19.49-47,19.49-18.58,0-34.82-8.81-49.93-17-25.35-13.75-47.24-25.63-79.07.74a8,8,0,1,1-10.22-12.3c40.17-33.27,70.32-16.92,96.93-2.48,25.35,13.75,47.24,25.62,79.07-.75A8,8,0,0,1,222.16,153.26Zm-177-49.46c31.83-26.37,53.72-14.5,79.07-.75,15.11,8.2,31.35,17,49.93,17,14.14,0,29.64-5.11,47-19.49a8,8,0,1,0-10.22-12.3c-31.83,26.37-53.72,14.49-79.07.74-26.61-14.43-56.76-30.79-96.93,2.48A8,8,0,0,0,45.11,103.8Z" }));
});
g.displayName = "Regular";
export {
  g as Regular
};
