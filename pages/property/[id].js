import Image  from 'next/image';
import { Flex, Box, Text, Button, } from '@chakra-ui/layout'; 
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { millify } from 'millify';

import { fetchApi, baseUrl } from '../../utils/fetchApi';

import ImageScrollbar from '../../components/ImageScrollbar';

const propertyDetails = ({propertyDetails: {price, rooms, rentFrequency, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos}})=>(
    <Box maxWidth="1000px" margin="auto" p="4">
        {photos && <ImageScrollbar data={photos} />} 
        <Box w="full" p="6">
            <Flex paddingTop="2" justifyContent="space-between" >
                <Flex alignItem="center" >
                    <Box paddingRight='3' color="green.500">{isVerified && <GoVerified />}</Box>
                    <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                </Flex>
                <Box>
                    <Avatar size="md" src={agency?.logo?.url}/>
                </Box>
            </Flex>
            <Flex alignItem="center" p="1" justifyContent="space-between" w="250px" color="blue.400" >
                {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
            </Flex>
            <Box marginTop="2">
                <Text fontSize="lg" marginBotton="2" fontWeight="bold" >
                    {title}
                </Text>
                <Text lineHeight="2" color="gray.600"  >
                    {description}
                </Text>
                <Flex justifyContent="space-between" textTransform="uppercase" flexWrap="wrap">
                    <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                        <text>Type :</text>
                        <Text fontWeight="bold">{type}</Text> 
                    </Flex>
                    <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                        <text>Purpose :</text>
                        <Text fontWeight="bold">{purpose}</Text>
                    </Flex>
                    {furnishingStatus && (
                    <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                        <text>Furnishing Status :</text>
                        <Text fontWeight="bold">{furnishingStatus}</Text>
                    </Flex>
                    )}
                </Flex>

                <Box>
                    {amenities.length && <Text fontSize="2xl" fontWeight="black" margintop="5" >Amenities</Text>}
                    <Flex flexWrap="wrap">
                        {amenities.map(item=>(
                            item.amenities.map(amenity =>(
                                <Text 
                                    key={amenity.text}
                                    fontWeight="bold"
                                    color="blue.400"
                                    fontSize="l"
                                    p="2"
                                    bg="gray.200"
                                    m="1"
                                    borderRadius="5"
                                > 
                                    {amenity.text} 
                                </Text>
                            ))
                        ))}
                    </Flex>
                </Box>
                
            </Box>
                                                
        </Box>
    </Box>
)



export async function getServerSideProps({params:{ id }}){
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return{
        props: {
            propertyDetails : data
        }
    }

}

export default propertyDetails;