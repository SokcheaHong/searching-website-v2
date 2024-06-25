import { _ as _sfc_main$3 } from './index-BTyjDCwb.mjs';
import { b as arabicToKhmer } from './index-BjZolGNS.mjs';
import { useSSRContext, defineComponent, watch, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$4 } from './List-DcZQ6PSG.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as useRoute, c as useServerSeoMeta } from './server.mjs';
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
import './asyncData-_fhhJZpV.mjs';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'moment';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  props: {
    total: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between items-center py-3" }, _attrs))}><div class="text-slate-800 font-bold text-2xl px-2"> \u179F\u179A\u17BB\u1794 <span class="font-bold">${ssrInterpolate(("arabicToKhmer" in _ctx ? _ctx.arabicToKhmer : unref(arabicToKhmer))(props.total))}</span>\u17AF\u1780\u179F\u17B6\u179A </div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Result/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UpdateLawList = _sfc_main$4;
  _push(ssrRenderComponent(_component_UpdateLawList, _attrs, null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Result/List.vue");
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
        useServerSeoMeta({
          title: "\u179A\u17BB\u1780\u179A\u1780\u17AF\u1780\u179F\u17B6\u179A | \u1780\u17D2\u179A\u179F\u17BC\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
        });
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Search = _sfc_main$3;
      const _component_ResultHeader = _sfc_main$2;
      const _component_ResultList = __nuxt_component_2;
      _push(`<!--[--><section class="search_section_layout">`);
      _push(ssrRenderComponent(_component_Search, null, null, _parent));
      _push(`</section><section class="mt-9">`);
      _push(ssrRenderComponent(_component_ResultHeader, { total: 3 }, null, _parent));
      _push(`<div class="border-b my-2"></div>`);
      _push(ssrRenderComponent(_component_ResultList, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/result/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BWDKpfXg.mjs.map
