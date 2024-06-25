import { _ as _sfc_main$3, a as _sfc_main$1 } from './List-hf7pNYwt.mjs';
import { a as useRoute, b as useSeoMeta } from './server.mjs';
import { defineComponent, watch, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-BjZolGNS.mjs';
import 'axios';
import './asyncData-_fhhJZpV.mjs';
import 'moment';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    watch(
      () => route.fullPath,
      () => {
        useSeoMeta({
          title: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u1787\u17BC\u1793\u178A\u17C6\u178E\u17B9\u1784 | \u1780\u17D2\u179A\u179F\u17BC\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8 \u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798 \u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
        });
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PostHeader = _sfc_main$3;
      const _component_PostList = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_PostHeader, { type: "all" }, null, _parent));
      _push(`<div class="border-b my-2"></div>`);
      _push(ssrRenderComponent(_component_PostList, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BemHbavn.mjs.map
