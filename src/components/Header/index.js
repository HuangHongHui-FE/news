import tpl from './index.tpl';
import './index.scss';
import { tplReplace } from '../../libs/utils';

// 解析文件用的

export default {
  name: 'Header',
  tpl (options) {
    const { url, title, showLeftIcon, showRightIcon } = options;  // 是否展示左边右边的icon
    
    const t =  tplReplace(tpl, {
      url,
      title,
      showLeftIcon: showLeftIcon ? 'block' : 'none',
      showRightIcon: showRightIcon ? 'block' : 'none'
    });

    console.log(t)
    return t;
    
  }
}