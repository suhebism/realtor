import Link from "next/link";
import { Flex, Text,Box,Button} from "@chakra-ui/react";
import Image from "next/image";
import { baseUrl, fetchApi } from "@/utils/fetchApi";
import Property from '../components/Property/page';

const myArray= [2,2.43,34,54,656,2,34]
const Banner = ( {imgUrl,purpose,title1,title2 ,desc1,linkName,buttonText} )=>{
  return(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m='10' >
    <Image src={imgUrl} width={500} height={500} alt="banner" priority={false} ></Image>
    <Box>
      <Text>{purpose}</Text>
      <Text>{title1}<br/>{title2}</Text>
      <Text>{desc1}</Text>
      <Button>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)
}

export default function Home({propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent)
  return (

    <div>
      <Banner
      purpose='Rent a Home'
      imgUrl='https://images.unsplash.com/photo-1489370321024-e0410ad08da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      title1='Homes for rent'
      title2='Everyone'
      desc1='Rental homes in bangalore'
      linkName='/search?pupose=for-rent'
      buttonText='View More'
      />
      <Flex>
      {/* {propertiesForRent.map((property)=> {
        return(
      <Property property={property} key={property.id}
      />
      )
    }
      )} */}
      </Flex>
      <Banner
      purpose='Own a Home'
      imgUrl='https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      title1='Homes for Sale'
      title2='Everyone'
      desc1='Buy homes in bangalore'
      linkName='/search?pupose=for-rent'
      buttonText='View More'
      />
    </div>
  );
}

export async function props(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return{
    props:{
      propertiesForSale:propertyForSale?.hits,
      propertiesForRent:propertyForRent?.hits,
    }
  }
}
