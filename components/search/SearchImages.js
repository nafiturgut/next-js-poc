import { List, Card, Image } from 'antd';


export default function SeachImages () {

const products = [
    {
       id:"5ce6581efd9b330001c4a8dc",
       name:"Raya Organik Yumurta",
       
       picurl:
          "http://cdn.getir.com/product/5baa132d4621d1001e336d7f_tr_1582126649140.jpeg"
    },
    {
       id:"5e3804309a6cba1eecc7578d",
       name:"Sarbey Orta Boy Yumurta",
     
       picurl:
          "http://cdn.getir.com/product/5e380c65e51b4889824629a5_tr_1581094802299.jpeg"
     
       
    },
    {
       id:"5baa13ad1bcb7c7a0da5e802",
       name:"CP Orta Boy Omega 3 Yumurta",
 
       picurl:
          "http://cdn.getir.com/product/5dc55dbaecb45b672ca795d8_tr_1573806158341.jpeg"
    },
    {
       id:"5af1a9f5a8e54000043ba9d1",
       name:"Happy Life Orta Boy Organik Yumurta",
       
       picurl:
          "http://cdn.getir.com/product/5e3d3dd5501bd710c6579139_tr_1581409517231.jpeg",
       
    },
    {
       id:"582322edd9a3db0004e64395",
       name:"Sütaş Light Yoğurt",
       
       picurl:"http://cdn.getir.com/product/582322edd9a3db0004e64395_tr_1580991289445.jpeg"
       
    },
    {
       id:"5cf3d88e4b58210001f49589",
       name:"Eker Süzme Yoğurt",
       
       picurl:"http://cdn.getir.com/product/5cf3d88e4b58210001f49589_tr_1560329519374.jpeg",
       
    },
    {
       id:"59e87cdcaee4410004c89a0e",
       name:" Eker Efsane Yoğurt",
       picurl:"http://cdn.getir.com/product/59e87cdcaee4410004c89a0e_tr_1579703423298.jpeg"
 
    },
    {
       id:"5e045e6f56d79d4439c55502",
       name:"Eker Probiyotik Yoğurt",
      
       picurl:
          "http://cdn.getir.com/product/5e045e6f56d79d4439c55502_tr_1589468457611.jpeg"
    },
    {
       id:"5bbb4741b3cf7a001ea00ca7",
       name:"Eker Süzme Yoğurt",
       
       picurl:
          "http://cdn.getir.com/product/5bbb4741b3cf7a001ea00ca7_tr_1588690735790.jpeg"
       
    },
    {
       id:"58232884d9a3db0004e64820",
       name:"Sütaş Sarımsaklı Yoğurt",
       
       picurl:"http://cdn.getir.com/product/58232884d9a3db0004e64820_tr_1579703745585.jpeg"
       
      
    },
    {
       id:"5e8325d90c928b78b70b4045",
       name:"Eker Efsane Kayısılı Yoğurt",
       
       picurl:"http://cdn.getir.com/product/5e8325d90c928b78b70b4045_tr_1585654355243.jpeg"
     
       
    },
    {
       id:"5d03bb6736e4a5000117bbf3",
       name:"SEK Çiftlik Kaymaksız Yoğurt",
       
       picurl:"http://cdn.getir.com/product/5d03bb6736e4a5000117bbf3_tr_1579703550852.jpeg"
       
       
    },
    {
       id:"5d03bb6736e4a5000117bbf6",
       name:"SEK Çiftlik Kaymaksız Yoğurt",
       
       picurl:
          "http://cdn.getir.com/product/5d03bb6736e4a5000117bbf6_tr_1579703620906.jpeg"
       
       
    },
    {
       id:"5cf272519463890001c3fcf0",
       name:"Eker Efsane Kayısılı Yoğurt",
       
       picurl:
          "http://cdn.getir.com/product/5cf272519463890001c3fcf0_tr_1589468396523.jpeg"
       
      
    },
    {
       id:"5e301224976edd6795e5695c",
       name:"SEK Çiftlik Gurme Kaymaksız Yoğurt",
       
       picurl:
          "http://cdn.getir.com/product/5e301224976edd6795e5695c_tr_1580221802540.jpeg"
       
       
    },
    {
       id:"5ce65820a72a950001cc8839",
       name:"Eker Efsane Orman Meyveli Yoğurt",
       
       picurl:
          "http://cdn.getir.com/product/5ce65820a72a950001cc8839_tr_1589468425921.jpeg"
       
 
    },
    {
       id:"5e183da0e2a40b74f0cff38e",
       name:"Tire Süt Tam Yağlı Kaymaklı Yoğurt",
       
       picurl:
          "http://cdn.getir.com/product/5e183da0e2a40b74f0cff38e_tr_1579703765406.jpeg"
       
      
    },
    {
       id: "5bc97aabb137fb001d751ac7",
       name:"Lays Fırından Yoğurt ve Mevsim Yeşillikli",
       
       picurl:
          "http://cdn.getir.com/product/5bc97aabb137fb001d751ac7_tr_1589468255632.jpeg"
       
      
    },
    {
       id:"5ce6581da72a950001cc87d2",
       name:"Lays Yoğurt Mevsim Yeşillikli Patates Cipsi Süper Boy",
       
       picurl:
          "http://cdn.getir.com/product/5ce6581da72a950001cc87d2_tr_1589468325573.jpeg"
       
    }
 ]
    return (
        <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>
            <Image
            width={200}
            src={item.picurl}
            />
            </Card>
          </List.Item>
        )}
      />
    )
  }


