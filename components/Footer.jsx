import { Box } from '@chakra-ui/react';
const year = new Date();

const Footer = ()=>(
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        {year.getFullYear()} Real-Estate Inc.
    </Box> 
)

export default Footer