import Link from 'next/link';
import Image  from 'next/image';
import { Flex, Box, Text, Button, } from '@chakra-ui/layout'; 
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({property:{ coverPhoto, price, rentFrequency, rooms, title, baths, agency, isVerified, externalID, area}})=>(
    <Link href={`/property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto? coverPhoto.url : DefaultImage} width={400} height={260} alt="house"/>
            </Box>
            <Box w="full" >
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
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substring(0,30)}...`:title}
                </Text>
            </Box>

        </Flex>
    </Link>
)

export default Property