import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;


export default function SearchKeyword ({data}) {

    return (
    <Search left-margin={300}
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 400 }}
    />
    )
  }

