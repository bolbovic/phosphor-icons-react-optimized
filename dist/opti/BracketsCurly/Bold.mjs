var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, e, c) => e in a ? i(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, d = (a, e) => {
  for (var c in e || (e = {}))
    C.call(e, c) && m(a, c, e[c]);
  if (o)
    for (var c of o(e))
      p.call(e, c) && m(a, c, e[c]);
  return a;
};
var l = (a, e) => {
  var c = {};
  for (var t in a)
    C.call(a, t) && e.indexOf(t) < 0 && (c[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && p.call(a, t) && (c[t] = a[t]);
  return c;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((t, c) => {
  var r = t, { children: a } = r, e = l(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, d({ ref: c }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M54.8,119.49A35.06,35.06,0,0,1,49.05,128a35.06,35.06,0,0,1,5.75,8.51C60,147.24,60,159.83,60,172c0,25.94,1.84,32,20,32a12,12,0,0,1,0,24c-19.14,0-32.2-6.9-38.8-20.51C36,196.76,36,184.17,36,172c0-25.94-1.84-32-20-32a12,12,0,0,1,0-24c18.16,0,20-6.06,20-32,0-12.17,0-24.76,5.2-35.49C47.8,34.9,60.86,28,80,28a12,12,0,0,1,0,24c-18.16,0-20,6.06-20,32C60,96.17,60,108.76,54.8,119.49ZM240,116c-18.16,0-20-6.06-20-32,0-12.17,0-24.76-5.2-35.49C208.2,34.9,195.14,28,176,28a12,12,0,0,0,0,24c18.16,0,20,6.06,20,32,0,12.17,0,24.76,5.2,35.49A35.06,35.06,0,0,0,207,128a35.06,35.06,0,0,0-5.75,8.51C196,147.24,196,159.83,196,172c0,25.94-1.84,32-20,32a12,12,0,0,0,0,24c19.14,0,32.2-6.9,38.8-20.51C220,196.76,220,184.17,220,172c0-25.94,1.84-32,20-32a12,12,0,0,0,0-24Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
