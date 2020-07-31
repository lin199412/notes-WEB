## JavaScript 常用函数

1. 参数格式化
2. 下载文件 (url地址, 文件流)


### url 参数
```js
// 追加url参数
export const appendQuery = (url, key, value) => {
    var options = key;
    if (typeof options == 'string') {
        options = {};
        options[key] = value;
    }
    options = $.param(options);
    if (url.includes('?')) {
        url += '&' + options
    } else {
        url += '?' + options
    }
    return url;
}

// 获取url参数
export const getQueryString = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const search = window.location.search.split('?')[1] || '';
    const r = search.match(reg) || [];
    return r[2];
}

// 序列化传参
export function serializeParam(paramObj) {
  let str = "";
  let serialize = function (obj) {
    for (let n in obj) {
      if (Object.prototype.toString.call(obj[n]) === "[object Object]") {
        serialize(obj[n]);
      } else if (Object.prototype.toString.call(obj[n]) === "[object Array]") {
        for (let m in obj[n]) {
          str += n + "=" + obj[n][m] + "&";
        }
      } else {
        str += n + "=" + obj[n] + "&";
      }
    }
  }
  serialize(paramObj);
  return str;
}


```

### 文件下载
```js
// 根据url地址下载
export const download = (url) => {
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        var link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
    return true;
}

// vue - Excel文件流下载
export function exportCustomer(customerIds) {
  return request({
    url: `crm/v1/customer/export?` + serializeParam({ customerIds }),
    responseType: 'blob',
  });
}
exportCustomer(params).then(data => {
  // Blob 对象表示一个不可变、原始数据的类文件对象-下面这个就是接收文件内容
  const b = new Blob([data], { type: 'application/vnd.ms-excel' });
  // 根据传入的参数b创建一个指向该参数对象的URL
  const url = URL.createObjectURL(b);
  const link = document.createElement('a');
  // 设置导出的文件名
  link.download = '文件名.xls';
  link.href = url;
  // 点击获取文件
  link.click();
  console.log('导出成功');
}).catch((err) => {
  console.error('导出失败：', err);
});
```
