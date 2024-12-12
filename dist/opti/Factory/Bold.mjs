var L = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as Z } from "react";
import f from "../../lib/OptiBase.mjs";
const i = Z((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ d.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M120,176a12,12,0,0,1-12,12H80a12,12,0,0,1,0-24h28A12,12,0,0,1,120,176Zm56-12H148a12,12,0,0,0,0,24h28a12,12,0,0,0,0-24Zm68,52a12,12,0,0,1-12,12H24a12,12,0,0,1,0-24h4V88a12,12,0,0,1,19.2-9.6L92,112V88a12,12,0,0,1,19.2-9.6l33.33,25,10.61-74.23A20.1,20.1,0,0,1,174.94,12h18.12a20.1,20.1,0,0,1,19.8,17.17l15,105.13c0,.1.12,1.34.12,1.7v68h4A12,12,0,0,1,244,216Zm-77.57-96.17L172,124h30.16L189.59,36H178.41ZM52,204H204V148H168a12,12,0,0,1-7.2-2.4l-14.38-10.78-.06,0L116,112v24a12,12,0,0,1-19.2,9.6L52,112Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
