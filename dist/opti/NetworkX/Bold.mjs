var v = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      V.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && l)
    for (var H of l(a))
      t.indexOf(H) < 0 && V.call(a, H) && (e[H] = a[H]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((H, e) => {
  var o = H, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M232,108H140V92h4a20,20,0,0,0,20-20V40a20,20,0,0,0-20-20H112A20,20,0,0,0,92,40V72a20,20,0,0,0,20,20h4v16H24a12,12,0,0,0,0,24H52v24H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20H76V132H180v8a12,12,0,0,0,24,0v-8h28a12,12,0,0,0,0-24ZM116,44h24V68H116ZM76,204H52V180H76Zm148.49-27.51L209,192l15.52,15.51a12,12,0,0,1-17,17L192,209l-15.51,15.52a12,12,0,0,1-17-17L175,192l-15.52-15.51a12,12,0,0,1,17-17L192,175l15.51-15.52a12,12,0,0,1,17,17Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
