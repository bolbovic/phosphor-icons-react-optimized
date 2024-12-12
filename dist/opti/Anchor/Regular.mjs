var R = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? R(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (c)
    for (var e of c(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const n = d((t, e) => {
  var m = t, { children: a } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(h, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M216,136a8,8,0,0,0-8,8c0,24.69-13.77,29.64-38.1,36.28-11.36,3.1-24.12,6.6-33.9,14.34V128h32a8,8,0,0,0,0-16H136V87a32,32,0,1,0-16,0v25H88a8,8,0,0,0,0,16h32v66.62c-9.78-7.74-22.54-11.24-33.9-14.34C61.77,173.64,48,168.69,48,144a8,8,0,0,0-16,0c0,38.11,27.67,45.66,49.9,51.72C106.23,202.36,120,207.31,120,232a8,8,0,0,0,16,0c0-24.69,13.77-29.64,38.1-36.28C196.33,189.66,224,182.11,224,144A8,8,0,0,0,216,136ZM112,56a16,16,0,1,1,16,16A16,16,0,0,1,112,56Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
