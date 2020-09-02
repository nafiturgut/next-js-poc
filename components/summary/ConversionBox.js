import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, ArrowsAltOutlined, ArrowRightOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic'

const ConversionBox = ( {data} ) =>  {

    let conversionColor = "#FFD700"
    let arrow = <ArrowRightOutlined />
    if (data > 5) {
        conversionColor = "#7FFF00"
      }
    else if (data <-5) {
        conversionColor = "#FF0000"
      }
      if (data > 0) {
        arrow = <ArrowUpOutlined />
      }
    else if (data <0) {
        arrow = <ArrowDownOutlined />
      }

      return (
              <Statistic
                title="Conversion Change"
                value={data}
                
                precision={1}
                valueStyle={{ color: conversionColor}}
                prefix={arrow}
                suffix="%"
              />
            
      )
    
  }
  
  export default dynamic(() => Promise.resolve(ConversionBox), {
    ssr: false
  })