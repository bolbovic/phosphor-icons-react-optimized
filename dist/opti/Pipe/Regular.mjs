var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, v = (a, r) => {
  for (var e in r || (r = {}))
    h.call(r, e) && H(a, e, r[e]);
  if (m)
    for (var e of m(r))
      o.call(r, e) && H(a, e, r[e]);
  return a;
};
var p = (a, r) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as l } from "react";
import f from "../../lib/OptiBase.mjs";
const i = l((t, e) => {
  var V = t, { children: a } = V, r = p(V, ["children"]);
  return /* @__PURE__ */ A.createElement(f, v({ ref: e }, r), a, /* @__PURE__ */ A.createElement("path", { d: "M232,104H208V56h24a8,8,0,0,0,0-16H205.83A16,16,0,0,0,192,32H176a16,16,0,0,0-13.83,8H144A104.11,104.11,0,0,0,40,144v18.16A16,16,0,0,0,32,176v16a16,16,0,0,0,8,13.84V232a8,8,0,0,0,16,0V208h48v24a8,8,0,0,0,16,0V205.84A16,16,0,0,0,128,192V176a16,16,0,0,0-8-13.84V144a24,24,0,0,1,24-24h18.17A16,16,0,0,0,176,128h16a16,16,0,0,0,13.83-8H232a8,8,0,0,0,0-16ZM112,176v16H48V176Zm-8-32v16H56V144a88.1,88.1,0,0,1,88-88h16v48H144A40,40,0,0,0,104,144Zm72-32V48h16v63.8c0,.07,0,.13,0,.2Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};