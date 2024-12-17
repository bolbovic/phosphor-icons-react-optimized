var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, V = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const h = H((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, V({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M128,120H96V72h32a24,24,0,0,1,0,48Zm96-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.66,186.34,175.31,172l14.35-14.34a8,8,0,0,0-11.32-11.32L164,160.69l-26-26A40,40,0,0,0,128,56H88a8,8,0,0,0-8,8V176a8,8,0,0,0,16,0V136h20.69l36,36-14.35,14.34a8,8,0,0,0,11.32,11.32L164,183.31l14.34,14.35a8,8,0,0,0,11.32-11.32Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
