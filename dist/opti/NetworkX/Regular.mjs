var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && m(a, e, r[e]);
  if (H)
    for (var e of H(r))
      o.call(r, e) && m(a, e, r[e]);
  return a;
};
var h = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((t, e) => {
  var l = t, { children: a } = l, r = h(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M232,112H136V88h8a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H112A16,16,0,0,0,96,40V72a16,16,0,0,0,16,16h8v24H24a8,8,0,0,0,0,16H56v32H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H72V128H184v16a8,8,0,0,0,16,0V128h32a8,8,0,0,0,0-16ZM112,40h32V72H112ZM80,208H48V176H80Zm141.65-34.34L203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z" }));
});
v.displayName = "Regular";
export {
  v as Regular
};
