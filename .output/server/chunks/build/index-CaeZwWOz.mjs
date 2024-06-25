import { _ as _sfc_main$3 } from './index-BTyjDCwb.mjs';
import { defineComponent, watch, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$4 } from './List-DcZQ6PSG.mjs';
import { a as useRoute, b as useSeoMeta } from './server.mjs';
import './nuxt-link-r7fq5fTi.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import './index-BjZolGNS.mjs';
import 'axios';
import './asyncData-_fhhJZpV.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'moment';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center py-3" }, _attrs))}><div class="text-slate-800 font-bold text-2xl"> \u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u178A\u17C2\u179B\u1791\u17BE\u1794\u1794\u17B6\u1793\u1792\u17D2\u179C\u17BE\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1797\u17B6\u1796 </div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateLaw/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-slate-700 text-lg" }, _attrs))}> \u1794\u17B6\u1793\u1792\u17D2\u179C\u17BE\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1797\u17B6\u1796\u17E1\u1781\u17C2\u1785\u17BB\u1784\u1780\u17D2\u179A\u17C4\u1799: <span>\u17E2\u17E1-\u17A7\u179F\u1797\u17B6-\u17E2\u17E0\u17E2\u17E4 <span class="font-bold">\u178A\u179B\u17CB</span> \u17E2\u17E0-\u1798\u17B7\u1790\u17BB\u1793\u17B6-\u17E2\u17E0\u17E2\u17E4</span></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpdateLaw/Title.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    watch(
      () => route.fullPath,
      () => {
        useSeoMeta({
          title: "\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F | \u1780\u17D2\u179A\u179F\u17BC\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
        });
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Search = _sfc_main$3;
      const _component_UpdateLawHeader = __nuxt_component_1;
      const _component_UpdateLawTitle = __nuxt_component_2;
      const _component_UpdateLawList = _sfc_main$4;
      _push(`<!--[--><section class="search_section_layout">`);
      _push(ssrRenderComponent(_component_Search, null, null, _parent));
      _push(`</section><section class="mt-9">`);
      _push(ssrRenderComponent(_component_UpdateLawHeader, null, null, _parent));
      _push(`<div class="border-b my-2"></div><div class="grid gap-3 py-2 px-6">`);
      _push(ssrRenderComponent(_component_UpdateLawTitle, null, null, _parent));
      _push(ssrRenderComponent(_component_UpdateLawList, null, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/update-laws/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CaeZwWOz.mjs.map
