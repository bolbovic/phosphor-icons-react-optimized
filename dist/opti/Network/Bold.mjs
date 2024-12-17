var v = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? v(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    r.call(H, e) && o(a, e, H[e]);
  if (V)
    for (var e of V(H))
      m.call(H, e) && o(a, e, H[e]);
  return a;
};
var d = (a, H) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && V)
    for (var t of V(a))
      H.indexOf(t) < 0 && m.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var h = t, { children: a } = h, H = d(h, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: e }, H), a, /* @__PURE__ */ l.createElement("path", { d: "M232,108H140V92h4a20,20,0,0,0,20-20V40a20,20,0,0,0-20-20H112A20,20,0,0,0,92,40V72a20,20,0,0,0,20,20h4v16H24a12,12,0,0,0,0,24H52v24H48a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20H76V132H180v24h-4a20,20,0,0,0-20,20v32a20,20,0,0,0,20,20h32a20,20,0,0,0,20-20V176a20,20,0,0,0-20-20h-4V132h28a12,12,0,0,0,0-24ZM116,44h24V68H116ZM76,204H52V180H76Zm128,0H180V180h24Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
