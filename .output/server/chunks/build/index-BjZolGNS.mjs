import { h as useNuxtApp, i as defineStore, f as fetchDefaults, e as useRequestFetch, g as useRuntimeConfig } from './server.mjs';
import Axios from 'axios';
import { computed, toValue, reactive, ref } from 'vue';
import { v as hash } from '../runtime.mjs';
import { a as useAsyncData } from './asyncData-_fhhJZpV.mjs';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
function useAxios() {
  const config = useRuntimeConfig();
  const axios = Axios.create({
    baseURL: config.public.apiBaseUrl
  });
  axios.interceptors.request.use(
    (config2) => {
      return config2;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axios;
}
const buildQuery = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key])
      acc += `${key}=${obj[key]}&`;
    return acc;
  }, "");
};
const debounce = (cb, delay2 = 350) => {
  const timeoutRef = ref(null);
  return (...args) => {
    if (timeoutRef.value)
      clearTimeout(timeoutRef.value);
    timeoutRef.value = setTimeout(() => {
      cb(...args);
    }, delay2);
  };
};
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));
const uniqueArray = (arr, key) => {
  const map = /* @__PURE__ */ new Map();
  arr.forEach((item) => map.set(item[key], item));
  return Array.from(map.values());
};
const filterObjectWithTruthyValues = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    if (obj[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
const arabicToKhmer = (number) => {
  const khmerNumerals = ["\u17E0", "\u17E1", "\u17E2", "\u17E3", "\u17E4", "\u17E5", "\u17E6", "\u17E7", "\u17E8", "\u17E9"];
  const arabicString = String(number);
  const khmerString = arabicString.split("").map((char) => {
    const digit = char.charCodeAt(0) - "0".charCodeAt(0);
    return digit >= 0 && digit <= 9 ? khmerNumerals[digit] : char;
  }).join("");
  return khmerString;
};
const formatDateToKhmer = (date, type = false) => {
  const timestamp = date;
  let currentDate = timestamp && type == false ? new Date(timestamp * 1e3) : date;
  const locale = {
    month: [
      "\u1798\u1780\u179A\u17B6",
      "\u1780\u17BB\u1798\u17D2\u1797\u17C8",
      "\u1798\u17B8\u1793\u17B6",
      "\u1798\u17C1\u179F\u17B6",
      "\u17A7\u179F\u1797\u17B6",
      "\u1798\u17B7\u1790\u17BB\u1793\u17B6",
      "\u1780\u1780\u17D2\u1780\u178A\u17B6",
      "\u179F\u17B8\u17A0\u17B6",
      "\u1780\u1789\u17D2\u1789\u17B6",
      "\u178F\u17BB\u179B\u17B6",
      "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6",
      "\u1792\u17D2\u1793\u17BC"
    ],
    numbers: ["\u17E0", "\u17E1", "\u17E2", "\u17E3", "\u17E4", "\u17E5", "\u17E6", "\u17E7", "\u17E8", "\u17E9"]
  };
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = locale.month[currentDate.getMonth()];
  const year = currentDate.getFullYear().toString();
  let khmerYear = "";
  for (let i = 0; i < year.length; i++) {
    khmerYear += locale.numbers[parseInt(year[i])];
  }
  let khmerDay = "";
  for (let i = 0; i < day.length; i++) {
    khmerDay += locale.numbers[parseInt(day[i])];
  }
  return `${khmerDay}-${month}-${khmerYear}`;
};
function useAPI(url, options) {
  delay(5e3);
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api
  }, "$wSXhmESSm2");
}
const documents = [
  {
    attributes: [
      {
        id: 1,
        name: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791\u1785\u17C1\u1789\u1795\u17D2\u179F\u17B6\u1799",
        value: "2019-03-26"
      },
      {
        id: 3,
        name: "\u1785\u17C6\u1793\u17BD\u1793\u1794\u17D2\u179A\u1780\u17B6\u179A",
        value: "13"
      }
    ],
    categories: [
      {
        id: 9,
        name: "\u1794\u17D2\u179A\u1780\u17B6\u179F"
      },
      {
        id: 9,
        name: "\u1794\u17D2\u179A\u1780\u17B6\u179F"
      }
    ],
    date: 1718941788,
    expires: 0,
    folder: "\u17AF\u1780\u179F\u17B6\u179A",
    id: 492,
    name: "2019 \u1794\u17D2\u179A\u1780\u17B6\u179F\u17A2\u1793\u17D2\u178F\u179A\u1780\u17D2\u179A\u179F\u17BD\u1784\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1780\u17B6\u179A\u1795\u17D2\u178F\u179B\u17CB\u179F\u17C1\u179C\u17B6\u179F\u17B6\u1792\u17B6\u179A\u178E\u17C8\u179A\u1794\u179F\u17CB\u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8\u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798\u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
  },
  {
    attributes: [
      {
        id: 1,
        name: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791\u1785\u17C1\u1789\u1795\u17D2\u179F\u17B6\u1799",
        value: "1999-07-20"
      },
      {
        id: 2,
        name: "\u1785\u17C6\u1793\u17BD\u1793\u1787\u17C6\u1796\u17BC\u1780",
        value: "14"
      },
      {
        id: 4,
        name: "\u1785\u17C6\u1793\u17BD\u1793\u1798\u17B6\u178F\u17D2\u179A\u17B6",
        value: "36"
      }
    ],
    categories: [
      {
        id: 5,
        name: "\u17A2\u1793\u17BB\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799"
      },
      {
        id: 5,
        name: "\u17A2\u1793\u17BB\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799"
      },
      {
        id: 5,
        name: "\u17A2\u1793\u17BB\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799"
      }
    ],
    date: 1718938820,
    expires: 0,
    folder: "\u17A2\u1793\u17BB\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799",
    id: 491,
    name: "1999 \u17A2\u1793\u17BB\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1780\u17B6\u179A\u179A\u17C0\u1794\u1785\u17C6\u1793\u17B7\u1784\u1780\u17B6\u179A\u1794\u17D2\u179A\u1796\u17D2\u179A\u17B9\u178F\u17D2\u178F\u1791\u17C5\u179A\u1794\u179F\u17CB\u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8\u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798\u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
  },
  {
    attributes: [
      {
        id: 1,
        name: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791\u1785\u17C1\u1789\u1795\u17D2\u179F\u17B6\u1799",
        value: "2023-10-10"
      },
      {
        id: 3,
        name: "\u1785\u17C6\u1793\u17BD\u1793\u1794\u17D2\u179A\u1780\u17B6\u179A",
        value: "3"
      }
    ],
    categories: [
      {
        id: 37,
        name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785"
      },
      {
        id: 37,
        name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785"
      }
    ],
    date: 1718873365,
    expires: 0,
    folder: "\u179F\u17C1\u1785\u1780\u17D2\u178A\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785",
    id: 490,
    name: "2023\u200B \u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1780\u17B6\u179A\u178F\u17C2\u1784\u178F\u17B6\u17C6\u1784\u1793\u17B6\u1799\u17B7\u1780\u17B6\u179A\u1784\u1781\u17BB\u1791\u17D2\u1791\u1780\u17B6\u179B\u17D0\u1799\u1793\u17C3\u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8\u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798\u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
  },
  {
    attributes: [
      {
        id: 1,
        name: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791\u1785\u17C1\u1789\u1795\u17D2\u179F\u17B6\u1799",
        value: "2023-10-10"
      },
      {
        id: 3,
        name: "\u1785\u17C6\u1793\u17BD\u1793\u1794\u17D2\u179A\u1780\u17B6\u179A",
        value: "3"
      }
    ],
    categories: [
      {
        id: 37,
        name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785"
      },
      {
        id: 37,
        name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785"
      }
    ],
    date: 1718873114,
    expires: 0,
    folder: "\u179F\u17C1\u1785\u1780\u17D2\u178A\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785",
    id: 489,
    name: "2023 \u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1780\u17B6\u179A\u178F\u17C2\u1784\u178F\u17B6\u17C6\u1784\u179B\u17C4\u1780\u179F\u17BB\u17C6\u1798\u1793\u17C4\u179A\u1798\u17D2\u1799\u1793\u17B6\u1799\u1780\u179A\u1784\u1781\u17BB\u1791\u17D2\u1791\u1780\u17B6\u179B\u17D0\u1799\u1793\u17C3\u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8\u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798\u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
  },
  {
    attributes: [
      {
        id: 1,
        name: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791\u1785\u17C1\u1789\u1795\u17D2\u179F\u17B6\u1799",
        value: "2023-10-10"
      },
      {
        id: 3,
        name: "\u1785\u17C6\u1793\u17BD\u1793\u1794\u17D2\u179A\u1780\u17B6\u179A",
        value: "3"
      }
    ],
    categories: [
      {
        id: 37,
        name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785"
      },
      {
        id: 37,
        name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785"
      }
    ],
    date: 1718872589,
    expires: 0,
    folder: "\u179F\u17C1\u1785\u1780\u17D2\u178A\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785",
    id: 488,
    name: "2023\u200B \u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1780\u17B6\u179A\u178F\u17C2\u1784\u178F\u17B6\u17C6\u1784\u179B\u17C4\u1780\u179F\u1793\u1794\u17CA\u17BB\u1793\u1798\u17B6\u1793\u1793\u17B6\u1799\u1780\u179A\u1784\u1781\u17BB\u1791\u17D2\u1791\u1780\u17B6\u179B\u17D0\u1799\u1793\u17C3\u1780\u17D2\u179A\u179F\u17BD\u1784\u179A\u17C0\u1794\u1785\u17C6\u178A\u17C2\u1793\u178A\u17B8\u1793\u1782\u179A\u17BC\u1794\u1793\u17B8\u1799\u1780\u1798\u17D2\u1798\u1793\u17B7\u1784\u179F\u17C6\u178E\u1784\u17CB"
  }
];
const posts = [
  {
    body: '<p><span style="color: rgb(51, 65, 85);">\u1782\u17C1\u17A0\u1791\u17C6\u1796\u17D0\u179A\u1793\u17C1\u17C7\u1794\u17B6\u1793\u1794\u1789\u17D2\u1785\u17BC\u179B\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F\u1790\u17D2\u1798\u17B8\u1785\u17C6\u1793\u17BD\u1793 \u17E2\u17E0\u17D4</span></p>',
    category: {
      color: "#3f67a0",
      createdAt: "Tue, 23 Apr 2024 11:16:17 GMT",
      deletedAt: null,
      id: 1,
      name: "\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1797\u17B6\u1796\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F",
      order: 1,
      type: "update",
      updatedAt: "Tue, 11 Jun 2024 07:53:00 GMT"
    },
    createdAt: "Tue, 23 Apr 2024 11:17:29 GMT",
    deletedAt: null,
    id: 1,
    isFeatured: 1,
    order: 1,
    publishedAt: "Thu, 20 Jun 2024 00:00:00 GMT",
    title: "\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1797\u17B6\u1796\u179B\u17B7\u1781\u17B7\u178F\u1794\u1791\u178A\u17D2\u178B\u17B6\u1793\u1782\u178F\u17B7\u1799\u17BB\u178F\u17D2\u178F",
    updatedAt: "Thu, 20 Jun 2024 12:22:23 GMT"
  },
  {
    body: '<p><span style="color: rgb(51, 65, 85);">\u1794\u1785\u17D2\u1785\u17BB\u1794\u17D2\u1794\u1793\u17D2\u1793\u1797\u17B6\u1796\u1793\u17BC\u179C\u1798\u17BB\u1781\u1784\u17B6\u179A\u1793\u17C3\u1782\u17C1\u17A0\u1791\u17C6\u1796\u17D0\u179A\u1793\u17C1\u17C7\u17D6 \u17A2\u17D2\u1793\u1780\u1794\u17D2\u179A\u17BE\u1794\u17D2\u179A\u17B6\u179F\u17CB\u17A2\u17B6\u1785\u1791\u17B6\u1789\u1799\u1780\u17AF\u1780\u179F\u17B6\u179A\u1787\u17B6\u1791\u1798\u17D2\u179A\u1784\u17CB WORD \u1794\u17B6\u1793\u17A0\u17BE\u1799\u17D4</span></p>',
    category: {
      color: "#727272",
      createdAt: "Tue, 23 Apr 2024 11:16:57 GMT",
      deletedAt: null,
      id: 3,
      name: "\u179F\u17C6\u1782\u17B6\u179B\u17CB",
      order: 3,
      type: "notice",
      updatedAt: "Sun, 26 May 2024 19:08:38 GMT"
    },
    createdAt: "Tue, 23 Apr 2024 11:18:18 GMT",
    deletedAt: null,
    id: 3,
    isFeatured: 1,
    order: 2,
    publishedAt: "Thu, 20 Jun 2024 00:00:00 GMT",
    title: "\u179F\u17C6\u1782\u17B6\u179B\u17CB",
    updatedAt: "Thu, 20 Jun 2024 12:20:59 GMT"
  }
];
const categories = [
  {
    id: 41,
    name: "\u1782\u17C4\u179B\u1793\u1799\u17C4\u1794\u17B6\u1799",
    order: 1,
    status: 1
  },
  {
    id: 4,
    name: "\u1796\u17D2\u179A\u17C7\u179A\u17B6\u1787\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799",
    order: 2,
    status: 1
  },
  {
    id: 34,
    name: "\u1796\u17D2\u179A\u17C7\u179A\u17B6\u1787\u1780\u17D2\u179A\u1798",
    order: 3,
    status: 1
  },
  {
    id: 1,
    name: "\u1785\u17D2\u1794\u17B6\u1794\u17CB",
    order: 4,
    status: 1
  },
  {
    id: 5,
    name: "\u17A2\u1793\u17BB\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799",
    order: 5,
    status: 1
  },
  {
    id: 9,
    name: "\u1794\u17D2\u179A\u1780\u17B6\u179F",
    order: 6,
    status: 1
  },
  {
    id: 21,
    name: "\u179F\u17B6\u179A\u17B6\u1785\u179A\u178E\u17C2\u1793\u17B6\u17C6",
    order: 10,
    status: 1
  },
  {
    id: 14,
    name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u178E\u17C2\u1793\u17B6\u17C6",
    order: 11,
    status: 1
  },
  {
    id: 37,
    name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785",
    order: 13,
    status: 1
  },
  {
    id: 45,
    name: "\u1794\u17D2\u179B\u1784\u17CB\u1782\u17C4\u179B",
    order: 14,
    status: 1
  },
  {
    id: 38,
    name: "\u1794\u1791\u1794\u1789\u17D2\u1787\u17B6",
    order: 16,
    status: 1
  },
  {
    id: 40,
    name: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u1794\u17D2\u179A\u1780\u17B6\u179F\u1796\u17D0\u178F\u17CC\u1798\u17B6\u1793",
    order: 18,
    status: 1
  }
];
const laws = [
  {
    abbreviatedName: null,
    additionalInformation: null,
    createdAt: "Tue, 18 Jun 2024 10:59:05 GMT",
    id: 2,
    numberAndDate: "\u179B\u17C1\u1781\u17E0\u17E6\u17A2\u1793\u1780\u17D2\u179A, \u17E0\u17E6 \u17A7\u179F\u1797\u17B6 \u17E1\u17E9\u17E8\u17E5 (No.06ANK, May 06, 1985)",
    officialName: "\u17A2\u1793\u17BB\u1780\u17D2\u179A\u17B9\u178F\u17D2\u1799\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1780\u17B6\u179A\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u1794\u17D2\u179A\u17BE\u1794\u17D2\u179A\u17B6\u179F\u17CB\u178A\u17B8\u1792\u17D2\u179B\u17B8\u1780\u179F\u17B7\u1780\u1798\u17D2\u1798 ( Sub-decree on the Management of the Use of Agricultural Land)",
    order: 1,
    status: 1,
    updatedAt: null
  },
  {
    abbreviatedName: null,
    additionalInformation: null,
    createdAt: "Tue, 18 Jun 2024 10:59:05 GMT",
    id: 3,
    numberAndDate: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u178E\u17C2\u1793\u17B6\u17C6\u17E2\u17E2\u17E4\u17E6\u17A7\u179F\u1780/\u1798\u1780/\u1794\u179F, \u17E2\u17E4 \u179F\u17B8\u17A0\u17B6 \u17E1\u17E9\u17E8\u17E7 (No.2246OSK/ MK/BS, August 24, 1987)",
    officialName: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u178E\u17C2\u1793\u17B6\u17C6\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1780\u17B6\u179A\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784\u1791\u17D2\u179A\u1796\u17D2\u1799\u179F\u1798\u17D2\u1794\u178F\u17D2\u178F\u17B7\u179A\u178A\u17D2\u178B (Instruction on the Management of State Property)",
    order: 2,
    status: 1,
    updatedAt: null
  },
  {
    abbreviatedName: null,
    additionalInformation: null,
    createdAt: "Tue, 18 Jun 2024 10:59:05 GMT",
    id: 4,
    numberAndDate: "\u1781\u17C2\u1798\u17C1\u179F\u17B6 \u1786\u17D2\u1793\u17B6\u17C6\u17E1\u17E9\u17E8\u17E9 (April 1989)",
    officialName: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785\u1785\u17B7\u178F\u17D2\u178F\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1782\u17C4\u179B\u1793\u1799\u17C4\u1794\u17B6\u1799\u1785\u17C6\u1796\u17C4\u17C7\u1780\u179F\u17B7\u1780\u179A\u179A\u1794\u179F\u17CB\u1794\u1780\u17D2\u179F\u1794\u17D2\u179A\u1787\u17B6\u1787\u1793\u1794\u178A\u17B7\u179C\u178F\u17D2\u178F\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6\u1793\u17C5\u1798\u17A0\u17B6\u179F\u1793\u17D2\u1793\u17B7\u1794\u17B6\u178F\u1780\u1798\u17D2\u1798\u17B6\u1797\u17B7\u1794\u17B6\u179B\u1791\u17BC\u1791\u17B6\u17C6\u1784\u1794\u17D2\u179A\u1791\u17C1\u179F\u179B\u17BE\u1780\u1791\u17B8 II (Decision on Policy for Farmers of Cambodian Revolutionary People\u2019s Party at the Second General Assembly for Nationwide Comrade)",
    order: 3,
    status: 1,
    updatedAt: null
  },
  {
    abbreviatedName: null,
    additionalInformation: null,
    createdAt: "Tue, 18 Jun 2024 10:59:05 GMT",
    id: 5,
    numberAndDate: "\u1781\u17C2\u1798\u17C1\u179F\u17B6 \u1786\u17D2\u1793\u17B6\u17C6\u17E1\u17E9\u17E8\u17E9 (April 1989)",
    officialName: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u179F\u1798\u17D2\u179A\u17C1\u1785\u1785\u17B7\u178F\u17D2\u178F\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1782\u17C4\u179B\u1793\u1799\u17C4\u1794\u17B6\u1799\u1782\u17D2\u179A\u1794\u17CB\u1782\u17D2\u179A\u1784 \u1793\u17B7\u1784\u1794\u17D2\u179A\u17BE\u1794\u17D2\u179A\u17B6\u179F\u17CB\u178A\u17B8\u1792\u17D2\u179B\u17B8\u179A\u1794\u179F\u17CB\u1794\u1780\u17D2\u179F\u1794\u17D2\u179A\u1787\u17B6\u1787\u1793\u1794\u178A\u17B7\u179C\u178F\u17D2\u178F\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6\u1793\u17C5\u1798\u17A0\u17B6\u179F\u1793\u17D2\u1793\u17B7\u1794\u17B6\u178F\u1780\u1798\u17D2\u1798\u17B6\u1797\u17B7\u1794\u17B6\u179B\u1791\u17BC\u1791\u17B6\u17C6\u1784\u1794\u17D2\u179A\u1791\u17C1\u179F\u179B\u17BE\u1780\u1791\u17B8 II (Decision on Policy for Land Management and Use of  Cambodian Revolutionary People\u2019s Party at the Second General Assembly for Nationwide Comrade )",
    order: 4,
    status: 1,
    updatedAt: null
  },
  {
    abbreviatedName: null,
    additionalInformation: null,
    createdAt: "Tue, 18 Jun 2024 10:59:05 GMT",
    id: 6,
    numberAndDate: "\u1781\u17C2\u1798\u17C1\u179F\u17B6 \u1786\u17D2\u1793\u17B6\u17C6\u17E1\u17E9\u17E8\u17E9 (April 1989)",
    officialName: "\u179F\u17C1\u1785\u1780\u17D2\u178F\u17B8\u1794\u17D2\u179A\u1780\u17B6\u179F\u179F\u17D2\u178F\u17B8\u1796\u17B8\u1782\u17C4\u179B\u1793\u1799\u17C4\u1794\u17B6\u1799\u1794\u17D2\u179A\u1780\u1794\u179A\u1794\u179A\u1795\u179B\u17B7\u178F\u1780\u1798\u17D2\u1798 \u17A2\u17B6\u1787\u17B8\u179C\u1780\u1798\u17D2\u1798 \u1780\u179F\u17B7\u1780\u1798\u17D2\u1798 \u178F\u17B6\u1798\u179A\u1794\u17C0\u1794\u179C\u17C1\u179A\u1794\u17D2\u179A\u179C\u17B6\u179F\u17CB\u178A\u17C3\u179A\u1794\u179F\u17CB\u1794\u1780\u17D2\u179F\u1794\u17D2\u179A\u1787\u17B6\u1787\u1793\u1794\u178A\u17B7\u179C\u178F\u17D2\u178F\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6\u1793\u17C5\u1798\u17A0\u17B6\u179F\u1793\u17D2\u1793\u17B7\u1794\u17B6\u178F\u1780\u1798\u17D2\u1798\u17B6\u1797\u17B7\u1794\u17B6\u179B\u1791\u17BC\u1791\u17B6\u17C6\u1784\u1794\u17D2\u179A\u1791\u17C1\u179F\u179B\u17BE\u1780\u1791\u17B8 II Proclamation on Policy for Production, Exploitation, Agriculture via Share Turn of Cambodian Revolutionary People\u2019s Party at the Second General Assembly for Nationwide Comrade)",
    order: 5,
    status: 1,
    updatedAt: null
  }
];
const useCategoryStore = defineStore("category", {
  state: () => ({
    items: categories,
    loading: false,
    error: false,
    message: ""
  }),
  getters: {
    axios: () => useAxios()
  },
  actions: {
    async getMany(query) {
      var _a;
      this.loading = true;
      try {
        const queryString = buildQuery(query || {});
        const { data, status, error } = await useAPI(
          `/api/categories?${queryString}`
        );
        await delay();
        if (status.value === "error") {
          throw error.value;
        }
        return (_a = data.data) == null ? void 0 : _a.categories;
      } catch (error) {
        this.setError(error);
      } finally {
        this.loading = false;
      }
    },
    setError(msg) {
      this.error = true;
      this.message = msg;
    }
  }
});
const usePostStore = defineStore("post", {
  state: () => ({
    items: posts,
    loading: false,
    error: false,
    message: ""
  }),
  getters: {
    axios: () => useAxios()
  },
  actions: {
    async getMany(query) {
      var _a;
      this.loading = true;
      try {
        const queryString = buildQuery(query || {});
        const { data, status, error } = await useAPI(
          `/api/post?${queryString}`
        );
        await delay();
        if (status.value === "error") {
          throw error.value;
        }
        return (_a = data.data) == null ? void 0 : _a.posts;
      } catch (error) {
        this.setError(error);
      } finally {
        this.loading = false;
      }
    },
    setError(msg) {
      this.error = true;
      this.message = msg;
    }
  }
});
const useDocumentStore = defineStore("document", {
  state: () => ({
    items: documents,
    item: null,
    loading: false,
    error: false,
    message: ""
  }),
  getters: {
    axios: () => useAxios()
  },
  actions: {
    async getMany(query) {
      var _a;
      this.loading = true;
      try {
        const queryString = buildQuery(query || {});
        const { data, status, error } = await useAPI(
          `/api/documents?${queryString}`
        );
        await delay();
        if (status.value === "error") {
          throw error.value;
        }
        return (_a = data.data) == null ? void 0 : _a.data;
      } catch (error) {
        this.setError(error);
      } finally {
        this.loading = false;
      }
    },
    async get(id) {
      var _a;
      this.loading = true;
      try {
        const { data, status, error } = await useAPI(`/api/document/${id}`);
        await delay();
        this.item = documents.find((doc) => doc.id == id);
        if (status.value === "error") {
          throw error.value;
        }
        return (_a = data.data) == null ? void 0 : _a.doc;
      } catch (error) {
        this.setError(error);
      } finally {
        this.loading = false;
      }
    },
    setError(msg) {
      this.error = true;
      this.message = msg;
    }
  }
});
const useLawStore = defineStore("law", {
  state: () => ({
    items: laws,
    loading: false,
    error: false,
    message: ""
  }),
  getters: {
    axios: () => useAxios()
  },
  actions: {
    async getMany(query) {
      var _a;
      this.loading = true;
      try {
        const queryString = buildQuery(query || {});
        const { data, status, error } = await useAPI(
          `/api/api/legal-letter?${queryString}`
        );
        await delay();
        if (status.value === "error") {
          throw error.value;
        }
        return (_a = data.data) == null ? void 0 : _a.legal_letters;
      } catch (error) {
        this.setError(error);
      } finally {
        this.loading = false;
      }
    },
    setError(msg) {
      this.error = true;
      this.message = msg;
    }
  }
});

export { useAPI as a, arabicToKhmer as b, useLawStore as c, usePostStore as d, uniqueArray as e, formatDateToKhmer as f, debounce as g, useCategoryStore as h, filterObjectWithTruthyValues as i, useDocumentStore as u };
//# sourceMappingURL=index-BjZolGNS.mjs.map
