var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var L = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var A = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, o = (a, l) => {
  for (var e in l || (l = {}))
    L.call(l, e) && A(a, e, l[e]);
  if (t)
    for (var e of t(l))
      m.call(l, e) && A(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var r in a)
    L.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && m.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var V = r, { children: a } = V, l = p(V, ["children"]);
  return /* @__PURE__ */ v.createElement(i, o({ ref: e }, l), a, /* @__PURE__ */ v.createElement("path", { d: "M235.58,128.84,160,91.06V48a32,32,0,0,0-64,0V91.06L20.42,128.84A8,8,0,0,0,16,136v32a8,8,0,0,0,9.57,7.84L96,161.76v18.93L82.34,194.34A8,8,0,0,0,80,200v32a8,8,0,0,0,11,7.43l37-14.81,37,14.81A8,8,0,0,0,176,232V200a8,8,0,0,0-2.34-5.66L160,180.69V161.76l70.43,14.08A8,8,0,0,0,240,168V136A8,8,0,0,0,235.58,128.84ZM224,158.24l-70.43-14.08A8,8,0,0,0,144,152v32a8,8,0,0,0,2.34,5.66L160,203.31v16.87l-29-11.61a8,8,0,0,0-5.94,0L96,220.18V203.31l13.66-13.65A8,8,0,0,0,112,184V152a8,8,0,0,0-9.57-7.84L32,158.24v-17.3l75.58-37.78A8,8,0,0,0,112,96V48a16,16,0,0,1,32,0V96a8,8,0,0,0,4.42,7.16L224,140.94Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
