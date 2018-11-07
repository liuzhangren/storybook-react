# storybook中使用react

## QuickStart
```bash
$ yarn / npm install
$ yarn storybook / npm run storybook
$ open http://localhost:9001/
```

### Usage
* .storybook目录下为配置文件 基础配置已配置好 若需要详细更改 请参考https://github.com/storybooks/storybook
* components下请编写组件，默认export出 即可
* stories下为组件在storybook中的展示 实现写在stories/component下

```bash
 import { storiesOf } from '@storybook/react'
 import 组件 from 'xxx'
 storiesOf(自定义父级tab名称, module)
  .add( 自定义子代tab名称, () => (
    <组件> </组件>
  ))
```

