import { _ as __nuxt_component_0$1 } from './nuxt-link-r7fq5fTi.mjs';
import { useSSRContext, reactive, defineComponent, ref, mergeProps, withCtx, createTextVNode, computed, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderList, ssrLooseContain, ssrInterpolate } from 'vue/server-renderer';
import { d as useRouter, a as useRoute, o as onPrehydrate, _ as __nuxt_component_4 } from './server.mjs';
import { g as debounce, h as useCategoryStore, i as filterObjectWithTruthyValues } from './index-BjZolGNS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useLazyAsyncData } from './asyncData-_fhhJZpV.mjs';

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Suggestion",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["absolute top-11 sm:top-14 -translate-y-14 w-full rounded-sm border shadow-lg opacity-0 pointer-events-none transition-all origin-top ease-linear delay-100 bg-zinc-50", { "opacity-100 pointer-events-auto translate-y-0": props.show }]
      }, _attrs))}><ul class="divide-y"><li class="search_suggestion_item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/document/1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero. `);
          } else {
            return [
              createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="search_suggestion_item">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/document/2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero. `);
          } else {
            return [
              createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, libero. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/Suggestion.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const state = reactive({
  params: {
    type: "all",
    categories: "",
    search: "",
    date: ""
  }
});
function useSearch() {
  const append = (key, value) => {
    if (key in state.params) {
      state.params[key] = value;
    }
  };
  const reset = () => {
    state.params = {
      type: "all",
      categories: "",
      search: "",
      date: ""
    };
  };
  return {
    params: computed(() => state.params),
    append,
    reset
  };
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "InputBox",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const search = useSearch();
    const show = ref(false);
    debounce((event) => {
      const { value } = event.target;
      search.append("search", value);
    }, 500);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchSuggestion = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-transparent border-2 border-blue-900 rounded-sm flex-1" }, _attrs))}><form class="flex justify-between"><input name="search" type="search" placeholder=" \u179F\u17BC\u1798\u179C\u17B6\u1799\u1796\u17B6\u1780\u17D2\u1799\u1782\u1793\u17D2\u179B\u17B9\u17C7" class="w-full z-50 p-2 bg-zinc-50 h-9 sm:h-12 text-gray-9000 bg-transparent border-none outline-none" autocomplete="off"${ssrRenderAttr("value", unref(search).params.value.search)}><button id="search" role="button" aria-label="Search" type="submit" class="w-fit sm:w-20 p-2 z-50 grid place-content-center h-9 sm:h-12 text-white bg-blue-900 outline-none border-none"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></form>`);
      _push(ssrRenderComponent(_component_SearchSuggestion, { show: unref(show) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/InputBox.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FilterButton",
  __ssrInlineRender: true,
  props: {
    toggle: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        role: "button",
        "aria-label": "Open",
        class: "text-gray-950 w-9 block"
      }, _attrs))}><svg class="inline-block text-2xl h-full w-full text-blue-900" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"></path></svg></button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/FilterButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TopFilter",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useRoute();
    const { params, append } = useSearch();
    const type = ref(params.value.type || "all");
    onPrehydrate('(()=>{type.value=params.value.type||"all"})');
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#E5EBF5] flex flex-wrap items-center gap-x-10 gap-y-5 p-4 rounded-sm" }, _attrs))}><label class="inline-flex items-center cursor-pointer"><input type="radio" name="type" class="radio radio-info" value="all"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(type), "all")) ? " checked" : ""}><span class="ml-2 text-gray-700 font-bold">\u1796\u17B6\u1780\u17D2\u1799\u1780\u17D2\u1793\u17BB\u1784\u17A2\u178F\u17D2\u1790\u1794\u1791</span></label><label class="inline-flex items-center cursor-pointer"><input type="radio" name="type" class="radio radio-info" value="name"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(type), "name")) ? " checked" : ""}><span class="ml-2 text-gray-700 font-bold">\u1796\u17B6\u1780\u17D2\u1799\u1780\u17D2\u1793\u17BB\u1784\u1788\u17D2\u1798\u17C4\u17C7\u17AF\u1780\u179F\u17B6\u179A</span></label></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/TopFilter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-row gap-2" }, _attrs))}><div class="h-[24px] w-[24px] skeleton"></div><div class="h-[24px] w-[120px] skeleton"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/CategorySkeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CategoryFilter",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const router = useRouter();
    const { path } = useRoute();
    const search = useSearch();
    const store = useCategoryStore();
    const items = ref(
      ((_a = store == null ? void 0 : store.items) == null ? void 0 : _a.map((item) => ({ ...item, checked: false }))) || []
    );
    const selectedItems = ref([]);
    const isSelectAll = computed(() => items.value.every((item) => item.checked));
    const isDeselectAll = computed(() => !items.value.some((item) => item.checked));
    debounce((selected) => {
      var _a2;
      items.value.forEach((item) => {
        item.checked = selected;
      });
      let selectedCategories = "";
      if (selected) {
        selectedItems.value = ((_a2 = items.value) == null ? void 0 : _a2.map((item) => item.id)) || [];
        selectedCategories = items.value.map((item) => item.id).join(",") || "";
      } else {
        selectedCategories = "";
        selectedItems.value = [];
      }
      search.append("categories", selectedCategories);
      if (path == "/result") {
        router.push({ query: filterObjectWithTruthyValues(search.params.value) });
      }
    });
    debounce((event) => {
      const { checked, value } = event.target;
      const selectedCategories = items.value.reduce((acc, item) => {
        if (item.id === value) {
          item.checked = checked;
        }
        if (item.checked) {
          acc.push(item.id);
        }
        return acc;
      }, []).join(",");
      search.append("categories", selectedCategories);
      if (path == "/result") {
        router.push({ query: filterObjectWithTruthyValues(search.params.value) });
      }
    });
    useLazyAsyncData("categories", () => store.getMany());
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      const _component_SearchCategorySkeleton = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#E5EBF5] px-2 py-4 rounded-sm" }, _attrs))}><div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 px-2">`);
      if (unref(store).loading) {
        _push(`<!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(ssrRenderComponent(_component_SearchCategorySkeleton, {
            key: item.id
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else if ((_a2 = unref(store).items) == null ? void 0 : _a2.length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(`<label class="inline-flex items-center cursor-pointer"><input type="checkbox" class="checkbox large-screen rounded-sm checkbox-info ![--chkbg:#E5EBF5] ![--chkfg:#0EA5E9] !border-[#0EA5E9]"${ssrRenderAttr("value", item.id)}${ssrIncludeBooleanAttr(Array.isArray(item.checked) ? ssrLooseContain(item.checked, item.id) : item.checked) ? " checked" : ""}><span class="ml-2 text-gray-700 checkmark">${ssrInterpolate(item.name)}</span></label>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex mt-4 ml-2 justify-start gap-5">`);
      if (unref(store).loading) {
        _push(`<!--[--><div class="h-[26px] w-[115px] skeleton"></div><div class="h-[26px] w-[115px] skeleton"></div><!--]-->`);
      } else if ((_b = unref(store).items) == null ? void 0 : _b.length) {
        _push(`<!--[--><button class="search_select_deselect_btn"${ssrIncludeBooleanAttr(unref(isSelectAll)) ? " disabled" : ""}> \u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F\u1791\u17B6\u17C6\u1784\u17A2\u179F\u17CB </button><button class="search_select_deselect_btn"${ssrIncludeBooleanAttr(unref(isDeselectAll)) ? " disabled" : ""}> \u178A\u1780\u1780\u17B6\u179A\u1787\u17D2\u179A\u17BE\u179F\u179A\u17BE\u179F </button><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/CategoryFilter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const toggleSidebar = () => {
      open.value = !open.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SearchInputBox = _sfc_main$5;
      const _component_SearchFilterButton = _sfc_main$4;
      const _component_SearchTopFilter = _sfc_main$3;
      const _component_SearchCategoryFilter = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_4;
      _push(`<!--[--><div class="flex items-start flex-col sm:flex-row sm:items-center gap-x-2 gap-y-2"><div class="w-max bg-blue-900 h-full grid place-content-center px-4 py-2 rounded-sm"><p class="text-sm md:text-lg lg:text-xl font-bold text-white tracking-normal text-nowrap"> \u1794\u178E\u17D2\u178E\u17B6\u179B\u17D0\u1799\u1785\u17D2\u1794\u17B6\u1794\u17CB\u178C\u17B8\u1787\u17B8\u1790\u179B </p></div><div class="w-full flex gap-2 items-center justify-between">`);
      _push(ssrRenderComponent(_component_SearchInputBox, null, null, _parent));
      _push(`<div class="block sm:hidden">`);
      _push(ssrRenderComponent(_component_SearchFilterButton, { toggle: toggleSidebar }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_SearchTopFilter, { class: "hidden sm:flex" }, null, _parent));
      _push(ssrRenderComponent(_component_SearchCategoryFilter, { class: "hidden sm:grid" }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useSearch as u };
//# sourceMappingURL=index-BTyjDCwb.mjs.map
