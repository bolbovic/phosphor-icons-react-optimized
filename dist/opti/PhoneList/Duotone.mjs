var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (c)
    for (var e of c(t))
      A.call(t, e) && m(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && c)
    for (var o of c(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import l, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var r = o, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ l.createElement(L, n({ ref: e }, t), a, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M215.94,182.08A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,215.94,182.08Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M214.36,166.46l-47.1-21.11-.12-.06a16,16,0,0,0-15.18,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06.61.61,0,0,1,0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.36,166.46ZM168,216A128.14,128.14,0,0,1,40,88,40.2,40.2,0,0,1,74.87,48a.61.61,0,0,0,0,.12l21,47L75.2,119.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,6.92,6.92,0,0,0,.74-.57L160.89,160l47,21.06h0s.08,0,.11,0A40.21,40.21,0,0,1,168,216ZM136,64a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H144A8,8,0,0,1,136,64Zm0,40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H144A8,8,0,0,1,136,104Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
