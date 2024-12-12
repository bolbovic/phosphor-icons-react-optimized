var C = Object.defineProperty;
var a = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (e, s, c) => s in e ? C(e, s, { enumerable: !0, configurable: !0, writable: !0, value: c }) : e[s] = c, i = (e, s) => {
  for (var c in s || (s = {}))
    m.call(s, c) && l(e, c, s[c]);
  if (a)
    for (var c of a(s))
      o.call(s, c) && l(e, c, s[c]);
  return e;
};
var p = (e, s) => {
  var c = {};
  for (var t in e)
    m.call(e, t) && s.indexOf(t) < 0 && (c[t] = e[t]);
  if (e != null && a)
    for (var t of a(e))
      s.indexOf(t) < 0 && o.call(e, t) && (c[t] = e[t]);
  return c;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const E = d((t, c) => {
  var r = t, { children: e } = r, s = p(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, i({ ref: c }, s), e, /* @__PURE__ */ f.createElement("path", { d: "M240,128c0,10.44-7.51,18.27-14.14,25.18-3.77,3.94-7.67,8-9.14,11.57-1.36,3.27-1.44,8.69-1.52,13.94-.15,9.76-.31,20.82-8,28.51s-18.75,7.85-28.51,8c-5.25.08-10.67.16-13.94,1.52-3.57,1.47-7.63,5.37-11.57,9.14C146.27,232.49,138.44,240,128,240s-18.27-7.51-25.18-14.14c-3.94-3.77-8-7.67-11.57-9.14-3.27-1.36-8.69-1.44-13.94-1.52-9.76-.15-20.82-.31-28.51-8s-7.85-18.75-8-28.51c-.08-5.25-.16-10.67-1.52-13.94-1.47-3.57-5.37-7.63-9.14-11.57C23.51,146.27,16,138.44,16,128s7.51-18.27,14.14-25.18c3.77-3.94,7.67-8,9.14-11.57,1.36-3.27,1.44-8.69,1.52-13.94.15-9.76.31-20.82,8-28.51s18.75-7.85,28.51-8c5.25-.08,10.67-.16,13.94-1.52,3.57-1.47,7.63-5.37,11.57-9.14C109.73,23.51,117.56,16,128,16s18.27,7.51,25.18,14.14c3.94,3.77,8,7.67,11.57,9.14,3.27,1.36,8.69,1.44,13.94,1.52,9.76.15,20.82.31,28.51,8s7.85,18.75,8,28.51c.08,5.25.16,10.67,1.52,13.94,1.47,3.57,5.37,7.63,9.14,11.57C232.49,109.73,240,117.56,240,128Z" }));
});
E.displayName = "Fill";
export {
  E as Fill
};
