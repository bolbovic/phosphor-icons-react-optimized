var f = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (c, a, e) => a in c ? f(c, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[a] = e, i = (c, a) => {
  for (var e in a || (a = {}))
    l.call(a, e) && m(c, e, a[e]);
  if (s)
    for (var e of s(a))
      o.call(a, e) && m(c, e, a[e]);
  return c;
};
var p = (c, a) => {
  var e = {};
  for (var t in c)
    l.call(c, t) && a.indexOf(t) < 0 && (e[t] = c[t]);
  if (c != null && s)
    for (var t of s(c))
      a.indexOf(t) < 0 && o.call(c, t) && (e[t] = c[t]);
  return e;
};
import C, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const Z = d((t, e) => {
  var r = t, { children: c } = r, a = p(r, ["children"]);
  return /* @__PURE__ */ C.createElement(n, i({ ref: e }, a), c, /* @__PURE__ */ C.createElement("path", { d: "M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};