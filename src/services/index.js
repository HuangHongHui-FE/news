import HTTP from '../libs/http';
import { setPageData } from '../libs/utils';

// 继承封装的http类

class Service extends HTTP {
  // 获取其数据
  getNewsList (type, count) {
    return new Promise((resolve, reject) => {
      // 调用http.js里面的方法
      this.ajax({
        url: 'Juhe/getNewsList',
        type: 'POST',
        dataType: 'JSON',
        data: {
          field: type
        },
        success (data) {
          const pageData = setPageData(data.result.data, count);
          resolve(pageData);
        },
        error (err) {
          reject(err);
        }
      })
    })
  }
}

export default new Service();