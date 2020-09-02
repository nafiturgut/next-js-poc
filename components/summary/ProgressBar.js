import { Progress } from 'antd';
import dynamic from 'next/dynamic'

const ProgressBar = ({data}) => (

  <>
      <Progress
      type="circle"
      strokeColor={{
        '0%': '#FFD700	',
        '100%': '#7FFF00',
      }}
      percent={data}
    />
   
  
  </>
);


export default dynamic(() => Promise.resolve(ProgressBar), {
    ssr: false
  })