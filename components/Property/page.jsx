import React from 'react';
import Link from 'next/link';
import {Box, Text, Flex, Avatar} from '@chakra-ui/react'
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';


const page = ({property :{coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}}) => (
    <Link href={`/property/${externalId}`} passHref>
    </Link>
  )

export default page;